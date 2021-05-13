import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo as apolloHOC } from "next-apollo";
import { TeachersQuery } from "../../generated/graphql";
import { fields } from "./queryCache";

const createClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    cache: new InMemoryCache({})
  });

export const withApollo = apolloHOC(createClient);