import React from 'react';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import { useNavigate } from 'react-router-dom';

const BottomNavbar = () => {
  const [bnValue, setBNValue] = useState(0);
  const navigate = useNavigate();

  return (
    <BottomNavigation 
      sx={{ 
        width: '100%', 
        position: 'absolute', 
        bottom: 0 ,
        display: { 
          sm: "none",
          md: "none" 
        }
      }}
      value={bnValue} 
      onChange={(event, value) => setBNValue(value)}
    >
      <BottomNavigationAction 
        label='Home' 
        value={bnValue} 
        onClick={() => navigate('/dashboard')}
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction 
        label='Tasks' 
        value='tasks' 
        onClick={() => navigate('/tasks')}
        icon={<TaskAltOutlinedIcon />}
      />
      <BottomNavigationAction 
        label='Plants' 
        value='my-plants' 
        onClick={() => navigate('/my-plants')}
        icon={<LocalFloristOutlinedIcon />}
      />
      <BottomNavigationAction 
        label='Add' 
        value='add' 
        onClick={() => navigate('/')}
        icon={<AddOutlinedIcon />}
      />
      <BottomNavigationAction 
        label='Supplies' 
        value='supplies' 
        onClick={() => navigate('/supplies')}
        icon={<HomeRepairServiceOutlinedIcon />}
      />
      <BottomNavigationAction 
        label='Wishlist' 
        value='wishlist' 
        onClick={() => navigate('/wishlist')}
        icon={<TextSnippetOutlinedIcon />}
      />
      <BottomNavigationAction 
        label='Rooms' 
        value='rooms' 
        onClick={() => navigate('/rooms')}
        icon={<BedOutlinedIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavbar;
