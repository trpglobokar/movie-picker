/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { MoviePicker } from '../../src';
import './fonts.css'

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3B7080" }, // Purple and green play nicely together.
    secondary: { main: "#ADE25D" }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: [
      'Raleway',
      'typeface-roboto',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    useNextVariants: true
  },
});


const App = () => (
  <MoviePicker />
);
render(<App />, document.getElementById("root"));