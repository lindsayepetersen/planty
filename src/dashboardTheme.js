import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
  components: {
    // name of the component
    MuiButton: {
      styleOverrides: {
        // name of the slot
        root: {
          // some css
          fontSize: '1rem',
        },
      },
    },
  },

  palette: {
    primary: {
      main: '#bada55',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe Ui Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: [4, 8, 12, 16, 20]
  // theme.spacing(4)
});