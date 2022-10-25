import React from 'react'
import { Launch } from '../graphql/graphql'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Collapse from '@mui/material/Collapse';
import VideoFrame from './VideoFrame.components';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RocketIcon from '@mui/icons-material/Rocket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Stack from '@mui/material/Stack';

interface Props {
  data: Launch;
}

const LaunchesCard: React.FC<Props> = ({data}) => {
  const [expanded, setExpanded] = React.useState(false);
  console.log(data)
  return (
    <Card sx={{ maxWidth: 420, mt: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.mission_name}
        </Typography>
        <Stack sx={{ mb: 1 }}  direction="row" alignItems="center" gap={1}>
          <RocketIcon fontSize="small"/>
          <Typography color="text.secondary">
            {`${data.rocket!.rocket_name} type: ${data.rocket!.rocket_type}`}
          </Typography>
        </Stack>
        <Stack sx={{ mb: 1 }} direction="row" alignItems="center" gap={1}>
          <CalendarMonthIcon fontSize="small"/>
          <Typography color="text.secondary">{data.launch_date_local}</Typography>
        </Stack>
        <Stack sx={{ mb: 1.5 }} direction="row" alignItems="center" gap={1}>
          <LocationOnIcon fontSize="small"/>
          <Typography color="text.secondary">{data.launch_site!.site_name_long}</Typography>
        </Stack>
        <Typography variant="body2">
          {data.details}
        </Typography>
      </CardContent>
      <CardActions>
        {data.links!.video_link && (
          <Button size="small" onClick={()=>setExpanded(!expanded)}>Video</Button>
        )}
        {data.links!.article_link && (
          <Link target="_blank" href={data.links!.article_link!}>
            <Button size="small" endIcon={<OpenInNewIcon />}>
            Article
            </Button>
          </Link>
        )}
      </CardActions>
      <Collapse in={expanded} unmountOnExit>
        <CardContent>
          {data.links!.video_link && <VideoFrame url={data.links!.video_link!}/>}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default LaunchesCard