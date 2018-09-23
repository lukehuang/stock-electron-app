import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home-main d-flex">
                <Sidebar />
                <p>foo</p>
            </div>
        );
    }
}
