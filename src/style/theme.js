import { createTheme } from "@material-ui/core";
import {  green, purple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: green,
    
  },
  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
      'Source Sans Pro',
      'sans-serif'
    ].join(','),
  }})
export default theme