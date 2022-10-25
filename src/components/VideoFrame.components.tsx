import React, { useEffect, useState } from 'react'
import CardMedia from '@mui/material/CardMedia';


function VideoFrame({url}: {url: string}) {
  const [videoId, setVideoId ] = useState<string>('');
  useEffect(()=>{
    setVideoId(url.split('/').pop()!)
  }, [url])
  return (
    <CardMedia
      component="iframe"
      width="420"
      height="315"
      src= {`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    />
  )
}

export default VideoFrame