import React from "react";
import { Container, Content } from "rsuite";
import Menu from "../components/dashboard/menu";
import Heading from "../components/dashboard/heading";

function Profile() {
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Menu />
        <Container>
          <Heading page="Add banner" user="Howard Stern" />
          <Content className="container">
            <div className="inner"></div>
          </Content>
        </Container>
      </Container>
    </div>
  );
}

export default Profile;
