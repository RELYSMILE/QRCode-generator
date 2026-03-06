import React from "react";
import App from "../../App";
import Verify from "../../Verify";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/verify', element: <Verify />}
  ]);

export default routes