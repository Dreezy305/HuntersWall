import React, { useState } from "react";
import Sidenav from "rsuite/Sidenav";
import Nav from "rsuite/Nav";
import Dropdown from "rsuite/Dropdown";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GearIcon from "@rsuite/icons/Gear";
import PeoplesIcon from "@rsuite/icons/Peoples";

const styles = {
  width: 240,
  display: "inline-table",
  marginRight: 10,
};

const MySidenav = ({ appearance, ...props }) => {
  console.log(appearance, props);
  return (
    <div style={styles}>
      <Sidenav appearance={appearance} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav {...props}>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
              User Group
            </Nav.Item>
            <Dropdown eventKey="3" title="Advanced">
              <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
            </Dropdown>
            <Dropdown eventKey="4" title="Settings" icon={<GearIcon />}>
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              <Dropdown.Menu eventKey="4-5" title="Custom Action">
                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

function Sidebar() {
  const [activeKey, setActiveKey] = React.useState("1");
  const [openKeys, setOpenKeys] = React.useState(["3", "4"]);

  return (
    <div className="nav-wrapper">
      <MySidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onSelect={setActiveKey}
        onOpenChange={setOpenKeys}
      />
    </div>
  );
}

export default Sidebar;
