import { graphql } from 'react-apollo';
import Organization from '../Organization';
import gql from 'graphql-tag';

export interface RepositoriesQuery {
  organization: Organization;
}

const REPOSITORIES_QUERY = gql`
  {
    organization (
      login: "HippoCMMS"
    ){
      repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          isArchived
        }
        totalCount
      }
    }
  }
`;

export default graphql(REPOSITORIES_QUERY);
