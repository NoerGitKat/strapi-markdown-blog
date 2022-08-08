import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.STRAPI_GRAPHQL_URI || "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
