// src/constants/apolloClient.js
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";


const APOLLO_CLIENT = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: "http://127.0.0.1:8000" }),
});

export default APOLLO_CLIENT;