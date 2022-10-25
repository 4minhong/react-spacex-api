import React from 'react';
import Typography from '@mui/material/Typography';
import LaunchesCard from '../components/LaunchesCard.component';
import { useGetPastLaunchesQuery } from '../graphql/graphql'

function PastLaunches() {
  const { data, error, loading } = useGetPastLaunchesQuery({
    variables: {
      limit: 10,
    }
  })

  return (
    <div>
      <Typography variant="h2">
        PastLaunches
      </Typography>
      {loading && <p>Loading...</p>}
      {!data || error && <p>Error :(</p>}
      {data && data.launchesPast!.map((item) => <LaunchesCard key={item!.id} data={item!}/> )}
    </div>
  )
}

export default PastLaunches