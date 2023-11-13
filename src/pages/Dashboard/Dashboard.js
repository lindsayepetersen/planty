import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../Components/Reusable/CommonButton/CommonButton';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddTaskIcon from '@mui/icons-material/AddTask';

const Dashboard = () => {
  const buttonStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
      backgroundColor: '#009be5',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '&.MuiButton-outlined': {
      color: '#fff',
      borderColor: '#fff',
      '&:hover': {
        backgroundColor: '#006db3',
      },
    },
  };

  return (
    <Grid item xs={8} styles={{backgroundColor: '#009be5'}}>
      Hello! Welcome to the dashboard page.
    </Grid>
  )
}

export default Dashboard;
