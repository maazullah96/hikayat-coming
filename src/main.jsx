import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import ReactGA from "react-ga4"

const TRACKING_ID = "G-M7RXD9DF0M" // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
