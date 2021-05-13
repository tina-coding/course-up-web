import {
  Box,


  Heading,
  Link,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoIosHome, IoIosListBox } from 'react-icons/io';
import { useDarkModeSidebarAttr } from '../../hooks/useDarkModeSidebarAttr';

type SidebarLinkProps = { href: string; name: string; icon: IconType };
const SidebarLink: React.FC<SidebarLinkProps> = ({ href, name, icon }) => {
  const ACTIVE_LINK_ATTR = {
    background: 'slategray',
    p: 2,
    borderRadius: 8,
    color: 'whitesmoke'
  };

  const router = useRouter();
  const isActive = router.asPath === href;

  const listItemProps = isActive ? { ...ACTIVE_LINK_ATTR } : {};

  return (
    <NextLink href={href}>
      <Link>
        <ListItem fontWeight="medium" {...listItemProps}>
          <ListIcon as={icon} />
          {name}
        </ListItem>
      </Link>
    </NextLink>
  );
};

type SidebarGroupProps = {
  title: string;
};
const SidebarGroup: React.FC<SidebarGroupProps> = ({ title }) => {
  return (
    <Box mb={4}>
      <Heading as="h6" size="sm" color="gray.500" mb={3}>
        {title}
      </Heading>
      {/* List of Links */}
      <List spacing={4}>
        <SidebarLink href="/courses" name="Courses" icon={IoIosListBox} />
        <SidebarLink href="/teachers" name="Teachers" icon={FaChalkboardTeacher} />
      </List>
    </Box>
  );
};

const Sidebar: React.FC = () => {
  const darkMode = useDarkModeSidebarAttr();
  return (
    <Box
      p={6}
      height="100vh"
      color="gray.600"
      {...darkMode}
		>
			{/* LOGO, App Title */}
      <Box mb={4}>
        <Heading as="h3" size="md" color="gray.500" mb={3}>
          course up
        </Heading>
			</Box>

			{/* Default Group, Home */}
      <Box mb={4}>
      <List spacing={2}>
        <SidebarLink href="/" name="Home" icon={IoIosHome} />
      </List>
			</Box>

			{/* Page Groups */}
      <SidebarGroup title="Course Management" />
    </Box>
  );
};

export default Sidebar;
