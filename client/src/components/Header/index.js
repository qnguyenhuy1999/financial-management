import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Layout, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import LogoLight from "../../images/logo-light.png";
import { LogoContainer, H1 } from "./styles";
import * as authAction from "../../actions/auth";

const { Header } = Layout;

function HeaderComponent(props) {
  const { authActionCreators } = props;
  const { logout } = authActionCreators;

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<ProfileOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="main-header">
      <LogoContainer>
        <Link to="/" className="main-logo">
          <img src={LogoLight} alt="logo" />
          <H1>money</H1>
        </Link>
      </LogoContainer>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Transactions</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/overview">Overview</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/setting">Settings</Link>
        </Menu.Item>
      </Menu>
      <div id="components-dropdown-demo-dropdown-button">
        <Dropdown.Button
          overlay={menu}
          placement="bottomCenter"
          icon={<UserOutlined />}
        >
          NguyenQuangHuy
        </Dropdown.Button>
      </div>
    </Header>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActionCreators: bindActionCreators(authAction, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(HeaderComponent);
