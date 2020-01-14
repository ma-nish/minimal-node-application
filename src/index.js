import util from 'util';
import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost';
import { GET_ORGANIZATION, GET_REPOSITORIES_OF_ORGANIZATION, ADD_STAR } from './queries';

import 'dotenv/config';

let cursor = null;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
});

// client
//   .query({
//     query: GET_REPOSITORIES_OF_ORGANIZATION,
//     variables: {
//       organization: 'the-road-to-learn-react',
//       cursor
//     },
//   })
//   .then(data => {
//     cursor = data.data.organization.repositories.pageInfo.endCursor;
//     console.log(util.inspect(data, { showHidden: true, depth: null }))
//   });

client
  .mutate({
    mutation: ADD_STAR,
    variables: {
      repositoryId: 'MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw==',
    },
  })
  .then(data => console.log(util.inspect(data, { depth: null })));


