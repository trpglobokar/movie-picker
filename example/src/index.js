/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import { MoviePicker } from '../../src';
const App = () => (
    <MoviePicker />
);
render(<App />, document.getElementById("root"));