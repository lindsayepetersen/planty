import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Tasks from './pages/Tasks/Tasks';
import MyPlants from './pages/MyPlants/MyPlants';
import Supplies from './pages/Supplies/Supplies';
import Wishlist from './pages/Wishlist/Wishlist';
import Rooms from './pages/Rooms/Rooms';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='my-plants' element={<MyPlants />} />
          <Route path='supplies' element={<Supplies />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='rooms' element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
