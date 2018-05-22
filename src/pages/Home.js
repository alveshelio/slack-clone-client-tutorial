import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '../layout/Layout';

const ALL_USERS = gql`
  {
    allUsers {
      id
      email
      username
    }
  }
`;

const Home = () => (
  <Query
    query={ALL_USERS}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allUsers.map(({ id, username, email }) => (
        <Layout>
          <div key={id}>
            <p>Username: {username}<br />Email: {email}</p>
          </div>
        </Layout>
      ));
    }}
  </Query>
);

export default Home;
