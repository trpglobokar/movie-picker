import * as React from "react"
import * as ReactDOM from "react-dom"
import "./static/index.css"
//import * as serviceWorker from "./serviceWorker"

import MoviePicker from "./MoviePicker"

ReactDOM.render(
    <MoviePicker />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
