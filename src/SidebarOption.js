import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ name, icon, hasArrow, selected }) {
    return (
        <div className={`sidebarOption ${selected ? "selected" : ""}`}>
            <div className="sidebarOption__arrow">
                {hasArrow ? (
                    <svg width="20px" height="20px" viewBox="0 0 20 20" focusable="false" fill="#000000">
                        <polygon points="8,5 13,10 8,15"></polygon>
                    </svg>
                ) : null}
            </div>
            <div className="sidebarOption__holder">
                <div className="sidebarOption__icon">
                    {icon}
                </div>
                <div className="sidebarOption__name">
                    {name}
                </div>
            </div>
        </div>
    )
}

export default SidebarOption;
