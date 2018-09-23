import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Index";

export default () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>
);
