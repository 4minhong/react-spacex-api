import { gql } from '@apollo/client';

export const GET_PAST_LAUNCHES_QUERY = gql`
  query GetPastLaunches($limit: Int!)
  {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
      details
    }
  }
`;

export const GET_NEXT_LAUNCHES_QUERY = gql`
  query GetNextLaunches
  {
    launchNext {
      launch_date_local
      id
      launch_site {
        site_name_long
      }
      launch_success
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      details
      mission_name
    }
  }
`;