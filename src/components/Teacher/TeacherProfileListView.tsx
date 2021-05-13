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
const TeacherProfileListView: React.FC<IProps> = ({ name, email }) => {
  return (
    <Center py={2}>
      <Box
        w='xl'
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Flex justifyContent="space-between" p={6} pb={0}>
          <Flex>
            <Avatar
              mr={4}
              size={'md'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Author'}
            />
            <Stack spacing={0} align="flex-start" mb={5}>
              <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                {name.fName} {name.lName}
              </Heading>
              <Text color={'gray.500'}>{email}</Text>
            </Stack>
          </Flex>
          <Flex>
            <Stack spacing={0} align={'center'} mx={2}>
              <Text fontWeight={600}>2</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Courses
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'} mx={2}>
              <Text fontWeight={600}>45</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Students
              </Text>
            </Stack>
            <Button
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
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
};

export default TeacherProfileListView;
