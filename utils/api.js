import ApolloClient from "apollo-boost";
import fetch from 'isomorphic-fetch';

export default new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/",
  fetch
});
