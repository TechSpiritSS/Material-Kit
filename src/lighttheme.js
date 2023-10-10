import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0000FF',
      bgColor: '#0000FF',
      textColor: '#FFFFFF',
      fontSize: '1rem',
      fontWeight: 'bold',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px',
      transition: '0.5s',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      display: 'block',
    },
    secondary: {
      main: '#FF0000',
      bgColor: '#FF0000',
      textColor: '#FFFFFF',
      fontSize: '1rem',
      fontWeight: 'bold',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px',
      transition: '0.5s',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      display: 'flex',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
});
