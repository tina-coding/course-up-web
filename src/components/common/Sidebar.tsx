import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react';
import { IoIosListBox, IoIosHome } from 'react-icons/io';
import { useDarkModeAttr } from '../../hooks/useDarkModeAttr';
import { IconType } from 'react-icons';

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
      <List spacing={2}>
        <SidebarLink href="/courses" name="Courses" icon={IoIosListBox} />
      </List>
    </Box>
  );
};

const Sidebar: React.FC = () => {
  const darkMode = useDarkModeAttr();
  return (
    <Box
      p={6}
      height="100vh"
      borderRight="2px"
      borderRightColor="gray.800"
      shadow="md"
      {...darkMode}
      color="gray.600"
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
