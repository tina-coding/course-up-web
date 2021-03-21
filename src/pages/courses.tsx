
import { Box, Flex, Heading, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Container } from "../components/Container";
import { Course, useCoursesQuery } from "../generated/graphql";
import React, { useState } from "react";
import ListView from "../components/views/ListView";
import GridView from "../components/views/GridView";
import { useSearchList } from "../hooks/useSearchList";
type CourseData = {
  __typename?: 'Course';
} & Pick<Course, 'id' | 'courseRef' | 'name' | 'description'>;
interface ICourseListProps {
	courses: CourseData[];
}
const CoursesList: React.FC<ICourseListProps> = ({ courses }) => {
	return (
		<>
			{courses.map((course) => (
				<Box p={5} shadow="lg" key={course.id}>
					<Text fontSize='sm' color="gray.400" fontFamily='sans-serif' mb={2}>{course.courseRef}</Text>
					<Heading fontSize="xl">{course.name}</Heading>
					<Text mt={4}>{course.description}</Text>
				</Box>
			))}
		</>
	)
};


const Courses: React.FC = () => {
	const [view, setView] = useState<'list' | 'grid'>('list');
	const [searchQuery, setSearchQuery] = useState('');

	const { data, loading } = useCoursesQuery();
	const filteredList = useSearchList<CourseData>({ query: searchQuery, field: "name", list: data?.courses?.courses });

	const isListView = view === 'list';

	const CourseView = isListView ? ListView : GridView;

	const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value.toLowerCase());
	}

	return (
    <Container>
      <div>Courses</div>
			<Flex justifyContent="space-between">
				<Input placeholder='Search for a course...' size="md" onChange={onChangeSearch} />
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
}

export default Courses;