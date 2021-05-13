import { useForm } from 'react-hook-form';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { createRef } from 'react';
import InputField from '../../components/common/InputField';
import { Container } from '../../components/Container';
import { useCreateTeacherMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { withApollo } from '../../utils/apolloHelpers/withApollo';

const CreateTeacher: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [createTeacher] = useCreateTeacherMutation();

  const onSubmit = async (options) => {
    const { data, errors } = await createTeacher({
      variables: { options }, update: (cache) => {
      cache.evict({ fieldName: "teachers"})
    } });
    data ? router.push("/teachers") : alert('Something went wrong!');
  };
  return (
    <Container pageTitle="Add Teacher">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Teacher Name */}
        <Box color="gray.400" py={6}>
          <Heading as="h5" size="sm" mb={3}>
            Teacher Name
          </Heading>
          <Flex>
            <InputField
              ref={register}
              name="fName"
              label="First Name"
              placeholder="First Name"
              {...register('fName')}
            />
            <InputField
              ref={register}
              name="lName"
              placeholder="Last Name"
              label="Last Name"
              {...register('lName')}
              />
          </Flex>
        </Box>
        <Box color="gray.400" py={6}>
          <Heading as="h5" size="sm" mb={3}>
            Teacher Contact Info
          </Heading>
          <Flex mb={4}>
            <InputField
              ref={register}
              name="email"
              placeholder="example@example.com"
              label="Email"
              {...register('email')}
              />
            <InputField
              ref={register}
              name="phone"
              placeholder="410-123-4567"
              label="Phone"
              {...register('phone')}
              />
              </Flex>
              <Flex>
            <InputField
              ref={register}
              name="office"
              placeholder="Kreiger Hall, 3005"
              label="Office"
              {...register('office')}
            />
          </Flex>
        </Box>
         <Box color="gray.400" py={6}>
          <Heading as="h5" size="sm" mb={3}>
            Teacher User Info
          </Heading>
          <Flex>
            <InputField
              ref={register}
              name="username"
              placeholder="Username"
              label="Username"
              {...register('username')}
            />
          </Flex>
          </Box>
        <Button type="submit" colorScheme="cyan" loadingText="Submitting">
          Add Teacher
        </Button>
      </form>
    </Container>
  );
};

export default withApollo({ ssr: false })(CreateTeacher);
