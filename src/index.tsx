import * as React from "react";
import * as ReactDOM from "react-dom";
import "./static/index.css";
import { store } from "./utils/store";
import { Provider } from "react-redux";
//import * as serviceWorker from "./serviceWorker"

import MoviePicker from "./MoviePicker";
import { loadListByIdAsync } from "./utils/List";

store.dispatch(loadListByIdAsync("108073"));

ReactDOM.render(
  <Provider store={store}>
    <MoviePicker />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
