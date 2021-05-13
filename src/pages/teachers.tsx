import NextLink from 'next/link';
import {
  Box,
	Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
	InputLeftElement,
	Link,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
// Icons
import { BiSearchAlt } from 'react-icons/bi';
import { BsFillGridFill, BsList, BsPersonPlusFill } from 'react-icons/bs';
// Components
import { Container } from '../components/Container';
import TeacherProfile from '../components/Teacher/TeacherProfile';
import TeacherProfileListView from '../components/Teacher/TeacherProfileListView';
import GridView from '../components/views/GridView';
import ListView from '../components/views/ListView';
// Graphql Queries, Mutations, Types
import { Course, Teacher, useCoursesQuery, useTeachersQuery } from '../generated/graphql';
// Hooks
import { useSearchList } from '../hooks/useSearchList';
import { withApollo } from '../utils/apolloHelpers/withApollo';

type TeacherData = {
  __typename?: 'Teacher';
} & Pick<Teacher, 'id' | 'fName' | 'lName' | 'email'>;
interface ITeacherListProps {
	teachers: TeacherData[];
	isList?: boolean;
}
const TeachersList: React.FC<ITeacherListProps> = ({ teachers, isList = false }) => {
  return (
    <>
      {teachers.length === 0 ? (
        <Text>There are no teachers yet!</Text>
      ) : (
					teachers.map((teacher) => {
						const profileProps = {name: { fName: teacher.fName, lName: teacher.lName }, email: teacher.email }
						return (
              isList ? <TeacherProfileListView key={teacher.id} {...profileProps} /> : <TeacherProfile key={teacher.id} {...profileProps }  />
        )})
      )}
    </>
  );
};

const Teachers: React.FC = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading } = useTeachersQuery();
  const filteredList = useSearchList<TeacherData>({
    query: searchQuery,
    field: 'fName',
    list: data?.teachers
  });

  const isListView = view === 'list';

  const TeacherView = isListView ? ListView : GridView;

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Container pageTitle="Teachers">
      <Flex justifyContent="space-between" mb={6}>
        <Flex>
        <Box flex={1} mr={3}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon
                  as={BiSearchAlt}
                  aria-label="A magnifying glass icon, to symbolize search"
                />
              }
            />
            <Input
              placeholder="Search for a teacher..."
              size="md"
              onChange={onChangeSearch}
            />
						</InputGroup>
					</Box>

					<NextLink href='/teachers/create'>
						<Button leftIcon={<BsPersonPlusFill />} as={Link}>Add Teacher</Button>
					</NextLink>
        </Flex>
        <Flex>
          <IconButton
            variant={isListView ? 'solid' : 'ghost'}
            icon={<BsList />}
            onClick={() => setView('list')}
            aria-label="List emoji, color black, three horizontal black lines"
          />
          <IconButton
            variant={!isListView ? 'solid' : 'ghost'}
            icon={<BsFillGridFill />}
            onClick={() => setView('grid')}
            aria-label="Grid emoji, color black, four boxes with rounded corners, two on each row"
          />
        </Flex>
      </Flex>
      {!loading && data && (
        <>
          {React.createElement(
            TeacherView,
            {},
            React.createElement(TeachersList, { teachers: filteredList, isList: isListView })
          )}
        </>
      )}
    </Container>
  );
};

export default withApollo({ ssr: true})(Teachers);
