import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
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
    },
    primary: {
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
    },
    background: {
      default: '#00000',
      paper: '#1a1a1a',
    },
  },
});
