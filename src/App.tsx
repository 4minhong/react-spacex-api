import React from 'react';
import './App.css';
import PastLaunches from './pages/PastLaunches.page';
import NextLaunch from './pages/NextLaunch.page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {

  return (
   <Container sx={{display:'flex', marginTop:3}}>
    <Box sx={{margin: 'auto'}}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
        mb: 2,
      }}>
        <Link href="/">Past</Link>
        <Link href="/next">Next</Link>
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PastLaunches/>} />
          <Route path="/next" element={<NextLaunch/>} />
        </Routes>
      </BrowserRouter>
    </Box>
   </Container>
  );
}

export default App;
