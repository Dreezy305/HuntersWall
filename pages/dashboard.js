import React, { useState } from "react";
import { useAuth } from "../auth/useAuth";
import Navbar from "rsuite/Navbar";
import Nav from "rsuite/Nav";
import Dropdown from "rsuite/Dropdown";
import Sidenav from "rsuite/Sidenav";
import { Container, Header, Content, Sidebar } from "rsuite";
import DashboardIcon from "@rsuite/icons/Dashboard";
import PeoplesIcon from "@rsuite/icons/Peoples";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";
import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import { Profile } from "../components/icons";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const iconStyles = {
  width: 56,
  height: 56,
  padding: 18,
  lineHeight: "56px",
  textAlign: "center",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        {/* <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={(children) => {
              return <Cog style={iconStyles} />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav> */}

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            {expand ? <ArrowLeftLineIcon /> : <ArrowRightLineIcon />}
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

function Dashboard() {
  const auth = useAuth();
  const [expand, setExpand] = useState(true);

  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <span style={{ marginLeft: 12 }}>HuntersWall</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav></Nav>
              <Nav></Nav>
              <Nav></Nav>
              <Nav>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                  Profile
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
                  Wallet
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
                  Portfolio
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
                  Loan request
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
                  Market
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
                  Transaction History
                </Nav.Item>
              </Nav>
              <Nav></Nav>
              <Nav></Nav>
              <Nav></Nav>
              <Nav>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                  Settings
                </Nav.Item>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                  Logout
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container>
          <Header>
            <h2>Page Title</h2>
          </Header>
          <Content>Content</Content>
        </Container>
      </Container>
    </div>
  );
}

export default Dashboard;
