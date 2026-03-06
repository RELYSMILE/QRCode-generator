import React from "react";
import App from "../../App";
import Verify from "../../Verify";
import { createBrowserRouter } from "react-router-dom";

const Routerz = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/verify/:code', element: <Verify />}
  ]);

export default Routerz