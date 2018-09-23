import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faExclamationCircle,
    faCog,
    faPowerOff,
    faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faBell } from "@fortawesome/free-regular-svg-icons";

import "./sidebar.css";

export default () => (
    <div className="Sidebar">
        <div className="Sidebar-Group">
            <FontAwesomeIcon className="Sidebar-Icon" icon={faHome} />
            <FontAwesomeIcon className="Sidebar-Icon" icon={faClock} />
            <FontAwesomeIcon className="Sidebar-Icon" icon={faExclamationCircle} />
            <div className="Icon-wrapper">
                <FontAwesomeIcon className="Sidebar-Icon" icon={faBell} />
                <span class="Badge">6</span>
            </div>
        </div>
        <div className="Sidebar-Group">
            <FontAwesomeIcon className="Sidebar-Icon off" icon={faPowerOff} />
            {false && <FontAwesomeIcon className="Sidebar-Icon on" icon={faCircleNotch} />}
            <FontAwesomeIcon className="Sidebar-Icon" icon={faCog} />
        </div>
    </div>
);
