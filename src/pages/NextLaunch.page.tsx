import React from 'react'
import Typography from '@mui/material/Typography';
import LaunchesCard from '../components/LaunchesCard.component';
import { useGetNextLaunchesQuery } from '../graphql/graphql'

function NextLaunch() {
  const { data, error, loading } = useGetNextLaunchesQuery()

  return (
    <div>
      <Typography variant="h2">
        NextLaunches
      </Typography>
      {loading && <p>Loading...</p>}
      {!data || error && <p>Error :(</p>}
      {data &&
        <LaunchesCard data={data.launchNext!}/>
      }
    </div>
  )
}

export default NextLaunch