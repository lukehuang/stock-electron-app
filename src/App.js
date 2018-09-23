import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Index";

import "./assets/bootstrap.min.css";
import "./assets/app.css";

export default () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>
);
