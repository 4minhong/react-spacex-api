import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_PAST_LAUNCHES_QUERY } from './queries';

export const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

class SpaceService {
  async getSpaceMission(limit=10) {
    const response = await client.query({
      query: GET_PAST_LAUNCHES_QUERY,
      variables: {limit}
    });

    if(!response || !response.data) 
      throw new Error("Cannot get launches list")
      return response.data.launchesPast;
   
  }
}

export default new SpaceService();