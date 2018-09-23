import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faExclamationCircle,
    faCog,
    faPowerOff,
    faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./sidebar.css";

export default () => (
    <div className="Sidebar">
        <div className="Sidebar-Group">
            <FontAwesomeIcon className="Sidebar-Icon" icon={faHome} />
            <FontAwesomeIcon className="Sidebar-Icon" icon={faClock} />
            <FontAwesomeIcon className="Sidebar-Icon" icon={faExclamationCircle} />
        </div>
        <div className="Sidebar-Group">
            <FontAwesomeIcon className="Sidebar-Icon off" icon={faPowerOff} />
            <FontAwesomeIcon className="Sidebar-Icon on" icon={faCircleNotch} />
            <FontAwesomeIcon className="Sidebar-Icon" icon={faCog} />
        </div>
    </div>
);
