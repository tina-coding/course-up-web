import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  courses: CoursesResponse;
  teachersCount: Scalars['Int'];
  coursesCount: Scalars['Int'];
  students: Array<Student>;
  teachers: Array<Teacher>;
};

export type CoursesResponse = {
  __typename?: 'CoursesResponse';
  errors?: Maybe<Array<FieldError>>;
  courses?: Maybe<Array<Course>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['Int'];
  teacherId: Scalars['Float'];
  teacher: Teacher;
  courseRef: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  credits: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['Int'];
  user: Scalars['Int'];
  courses: Scalars['Int'];
  fName: Scalars['String'];
  lName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  office: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Student = {
  __typename?: 'Student';
  id: Scalars['Int'];
  fName: Scalars['String'];
  lName: Scalars['String'];
  email: Scalars['String'];
  year: Scalars['Int'];
  phone: Scalars['String'];
  major: Scalars['String'];
  credits: Scalars['Int'];
  gpa: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse: CourseResponse;
  createTeacher: Scalars['Boolean'];
};


export type MutationCreateCourseArgs = {
  options: CreateCourseInput;
};


export type MutationCreateTeacherArgs = {
  options: CreateTeacherInput;
};

export type CourseResponse = {
  __typename?: 'CourseResponse';
  errors?: Maybe<Array<FieldError>>;
  course?: Maybe<Course>;
};

export type CreateCourseInput = {
  /** Course number, please prefix it with the department name. Cannot duplicate. */
  courseRef: Scalars['String'];
  /** The name of the course, try not to make it too long but make it unique. */
  name: Scalars['String'];
  /** Please describe the course, prerequisites and what the students will get out of it. */
  description: Scalars['String'];
  /** The number of credits this course satifies. */
  credits: Scalars['Int'];
  /** The id of the teacher that will teach this course. */
  teacherId: Scalars['Int'];
};

export type CreateTeacherInput = {
  fName: Scalars['String'];
  lName: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  office?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type CreateCourseMutationVariables = Exact<{
  options: CreateCourseInput;
}>;


export type CreateCourseMutation = (
  { __typename?: 'Mutation' }
  & { createCourse: (
    { __typename?: 'CourseResponse' }
    & { course?: Maybe<(
      { __typename?: 'Course' }
      & Pick<Course, 'id' | 'courseRef' | 'name' | 'description' | 'credits' | 'createdAt' | 'updatedAt'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type CreateTeacherMutationVariables = Exact<{
  options: CreateTeacherInput;
}>;


export type CreateTeacherMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createTeacher'>
);

export type CoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursesQuery = (
  { __typename?: 'Query' }
  & { courses: (
    { __typename?: 'CoursesResponse' }
    & { courses?: Maybe<Array<(
      { __typename?: 'Course' }
      & Pick<Course, 'id' | 'courseRef' | 'name' | 'description'>
    )>>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type CoursesCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursesCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'coursesCount'>
);

export type TeachersCountQueryVariables = Exact<{ [key: string]: never; }>;


export type TeachersCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'teachersCount'>
);

export type TeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeachersQuery = (
  { __typename?: 'Query' }
  & { teachers: Array<(
    { __typename?: 'Teacher' }
    & Pick<Teacher, 'id' | 'fName' | 'lName' | 'email'>
  )> }
);


export const CreateCourseDocument = gql`
    mutation CreateCourse($options: CreateCourseInput!) {
  createCourse(options: $options) {
    course {
      id
      courseRef
      name
      description
      credits
      createdAt
      updatedAt
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const CreateTeacherDocument = gql`
    mutation CreateTeacher($options: CreateTeacherInput!) {
  createTeacher(options: $options)
}
    `;
export type CreateTeacherMutationFn = Apollo.MutationFunction<CreateTeacherMutation, CreateTeacherMutationVariables>;

/**
 * __useCreateTeacherMutation__
 *
 * To run a mutation, you first call `useCreateTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeacherMutation, { data, loading, error }] = useCreateTeacherMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateTeacherMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeacherMutation, CreateTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeacherMutation, CreateTeacherMutationVariables>(CreateTeacherDocument, options);
      }
export type CreateTeacherMutationHookResult = ReturnType<typeof useCreateTeacherMutation>;
export type CreateTeacherMutationResult = Apollo.MutationResult<CreateTeacherMutation>;
export type CreateTeacherMutationOptions = Apollo.BaseMutationOptions<CreateTeacherMutation, CreateTeacherMutationVariables>;
export const CoursesDocument = gql`
    query Courses {
  courses {
    courses {
      id
      courseRef
      name
      description
    }
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useCoursesQuery__
 *
 * To run a query within a React component, call `useCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCoursesQuery(baseOptions?: Apollo.QueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
      }
export function useCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
        }
export type CoursesQueryHookResult = ReturnType<typeof useCoursesQuery>;
export type CoursesLazyQueryHookResult = ReturnType<typeof useCoursesLazyQuery>;
export type CoursesQueryResult = Apollo.QueryResult<CoursesQuery, CoursesQueryVariables>;
export const CoursesCountDocument = gql`
    query CoursesCount {
  coursesCount
}
    `;

/**
 * __useCoursesCountQuery__
 *
 * To run a query within a React component, call `useCoursesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCoursesCountQuery(baseOptions?: Apollo.QueryHookOptions<CoursesCountQuery, CoursesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesCountQuery, CoursesCountQueryVariables>(CoursesCountDocument, options);
      }
export function useCoursesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesCountQuery, CoursesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesCountQuery, CoursesCountQueryVariables>(CoursesCountDocument, options);
        }
export type CoursesCountQueryHookResult = ReturnType<typeof useCoursesCountQuery>;
export type CoursesCountLazyQueryHookResult = ReturnType<typeof useCoursesCountLazyQuery>;
export type CoursesCountQueryResult = Apollo.QueryResult<CoursesCountQuery, CoursesCountQueryVariables>;
export const TeachersCountDocument = gql`
    query TeachersCount {
  teachersCount
}
    `;

/**
 * __useTeachersCountQuery__
 *
 * To run a query within a React component, call `useTeachersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeachersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeachersCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeachersCountQuery(baseOptions?: Apollo.QueryHookOptions<TeachersCountQuery, TeachersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeachersCountQuery, TeachersCountQueryVariables>(TeachersCountDocument, options);
      }
export function useTeachersCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeachersCountQuery, TeachersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeachersCountQuery, TeachersCountQueryVariables>(TeachersCountDocument, options);
        }
export type TeachersCountQueryHookResult = ReturnType<typeof useTeachersCountQuery>;
export type TeachersCountLazyQueryHookResult = ReturnType<typeof useTeachersCountLazyQuery>;
export type TeachersCountQueryResult = Apollo.QueryResult<TeachersCountQuery, TeachersCountQueryVariables>;
export const TeachersDocument = gql`
    query Teachers {
  teachers {
    id
    fName
    lName
    email
  }
}
    `;

/**
 * __useTeachersQuery__
 *
 * To run a query within a React component, call `useTeachersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeachersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeachersQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeachersQuery(baseOptions?: Apollo.QueryHookOptions<TeachersQuery, TeachersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeachersQuery, TeachersQueryVariables>(TeachersDocument, options);
      }
export function useTeachersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeachersQuery, TeachersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeachersQuery, TeachersQueryVariables>(TeachersDocument, options);
        }
export type TeachersQueryHookResult = ReturnType<typeof useTeachersQuery>;
export type TeachersLazyQueryHookResult = ReturnType<typeof useTeachersLazyQuery>;
export type TeachersQueryResult = Apollo.QueryResult<TeachersQuery, TeachersQueryVariables>;