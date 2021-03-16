import React from 'react';
import "./Sidebar.css";

import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <Button className="sidebar__new">
                   + New
                </Button>
            </div>
        </div>
    )
}

export default Sidebar;
