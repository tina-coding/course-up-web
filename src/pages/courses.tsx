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
import NextLink from 'next/link';
import { BiBookAdd } from 'react-icons/bi';
import React, { useState } from 'react';
// Icons
import { BiSearchAlt } from 'react-icons/bi';
import { BsFillGridFill, BsList } from 'react-icons/bs';
// Components
import { Container } from '../components/Container';
import GridView from '../components/views/GridView';
import ListView from '../components/views/ListView';
// Graphql Queries, Mutations, Types
import { Course, useCoursesQuery } from '../generated/graphql';
// Hooks
import { useSearchList } from '../hooks/useSearchList';
import { withApollo } from '../utils/apolloHelpers/withApollo';

type CourseData = {
  __typename?: 'Course';
} & Pick<Course, 'id' | 'courseRef' | 'name' | 'description'>;
interface ICourseListProps {
  courses: CourseData[];
}
const CoursesList: React.FC<ICourseListProps> = ({ courses }) => {
  return (
    <>
      {courses.length === 0 ? (<Text>There are no courses yet!</Text>) : courses.map((course) => (
        <Box p={5} shadow="lg" key={course.id}>
          <Text fontSize="sm" color="gray.400" fontFamily="sans-serif" mb={2}>
            {course.courseRef}
          </Text>
          <Heading fontSize="xl">{course.name}</Heading>
          <Text mt={4}>{course.description}</Text>
        </Box>
      ))}
    </>
  );
};

const Courses: React.FC = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading } = useCoursesQuery();
  const filteredList = useSearchList<CourseData>({
    query: searchQuery,
    field: 'name',
    list: data?.courses?.courses
  });

  const isListView = view === 'list';

  const CourseView = isListView ? ListView : GridView;

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Container pageTitle="Courses">
      <Flex justifyContent="space-between">
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
                placeholder="Search for a course..."
                size="md"
                onChange={onChangeSearch}
              />
            </InputGroup>
          </Box>

          <NextLink href="/courses/create">
            <Button leftIcon={<BiBookAdd />} as={Link}>
              Add Course
            </Button>
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
            CourseView,
            {},
            React.createElement(CoursesList, { courses: filteredList })
          )}
        </>
      )}
    </Container>
  );
};

export default withApollo({ ssr: true })(Courses);
