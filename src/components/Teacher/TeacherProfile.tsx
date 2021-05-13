import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { Teacher } from '../../generated/graphql';

interface IProps {
	name: Pick<Teacher, 'fName' | 'lName'>;
	email: string;
}
const TeacherProfile: React.FC<IProps> = ({ name, email }) => {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Flex justify={'center'} mt={3}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Author'}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
							{name.fName} {name.lName}
            </Heading>
						<Text color={'gray.500'}>{email}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>2</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Courses
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>45</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Students
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
          >
            Fire
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default TeacherProfile;