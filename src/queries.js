import { gql } from 'apollo-boost';

// export const GET_ORGANIZATION = gql`
//   {
//     organization(login: "the-road-to-learn-react") {
//       id
//       name
//       url
//       repository(name: "the-road-to-learn-react"){
//         id
//         name
//         url
//       }
//     }
//   }
// `;

export const GET_ORGANIZATION = gql`
  query($organization: String!) {
    organization(login: $organization) {
      name
      url
    }
  }
`;

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query($organization: String!, $cursor: String) {
    organization(login: $organization) {
      name
      url
      repositories(first: 5, after: $cursor, orderBy: {field: STARGAZERS, direction: ASC}) {
        edges {
          node {
            name
            url
          }
        }
        pageInfo{
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const ADD_STAR = gql`
  mutation AddStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;