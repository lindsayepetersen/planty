import React from 'react';
// import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import BottomNavbar from './Components/BottomNavbar';

function App() {
  return (
    <Grid container>
      {/* <Navbar /> */}
      <BottomNavbar />
      <Outlet />
    </Grid>
  );
}

export default App;
