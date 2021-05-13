import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
	NumberInput,
	NumberInputField,
  Select,
	useToast
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/common/InputField';
import { Container } from '../../components/Container';
import { useCreateCourseMutation, useTeachersCountQuery, useTeachersQuery } from '../../generated/graphql';
import { withApollo } from '../../utils/apolloHelpers/withApollo';

const CreateCourse: React.FC = () => {
  const { register, handleSubmit } = useForm();
	const router = useRouter();
	const toast = useToast();
	const [createCourse] = useCreateCourseMutation();
	const { data, loading } = useTeachersQuery();

	const onSuccess = () => router.push('/courses');
	const onError = (msg) => toast({ isClosable: true, title: "Failed to Save Course", description: msg, position: 'top-right', status: 'error' })
	const onSubmit = async (options) => {
		console.log({ options })
    const { data } = await createCourse({ variables: { options:  {...options, credits: parseInt(options.credits), teacherId: parseInt(options.teacherId)} } });

		data.createCourse.errors ? onError(data.createCourse.errors[0].message) : onSuccess();
  };
  return (
    <Container pageTitle="Add Teacher">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Course Info */}
        <Box color="gray.400" py={6}>
          <Heading as="h5" size="sm" mb={3}>
            Course Information
          </Heading>
          <Flex mb={4}>
            <InputField
              ref={register}
              name="courseRef"
              label="Course Number"
              placeholder="MAT-1000"
              {...register('courseRef')}
            />
          </Flex>
          <Flex mb={4}>
            <InputField
              ref={register}
              name="name"
              placeholder="Course Name"
              label="Course Name"
              {...register('name')}
            />
          </Flex>
					<Flex mb={4}>
						<FormControl id="credits">
						<FormLabel>Credits</FormLabel>
            <NumberInput name='credits' min={1} max={6} w='sm'>
              <NumberInputField ref={register}  {...register('credits')} />
            </NumberInput>
						</FormControl>
          </Flex>
          <Flex mb={4}>
            <InputField
              ref={register}
              name="description"
              placeholder="Please describe the course..."
              label="Description"
              textarea={true}
              {...register('description')}
            />
          </Flex>
        </Box>
        <Box color="gray.400" py={6}>
          <Heading as="h5" size="sm" mb={3}>
            Assign a Teacher
          </Heading>
          <Flex mb={4} w="sm">
            <FormControl id="teacherId">
              <FormLabel>Teacher</FormLabel>
              <Select
                placeholder="Select a teacher"
                name="teacherId"
                ref={register}
                {...register('teacherId')}
							>
								{!loading && data.teachers.map(teacher => (
									<option key={teacher.id} value={teacher.id}>{teacher.fName} {teacher.lName}</option>
								))}
              </Select>
            </FormControl>
          </Flex>
        </Box>
        <Button type="submit" colorScheme="cyan" loadingText="Submitting">
          Add Course
        </Button>
      </form>
    </Container>
  );
};

export default withApollo({ ssr: false })(CreateCourse);
