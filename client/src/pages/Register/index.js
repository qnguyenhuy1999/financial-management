import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";

import {
  H3,
  ContainerPage,
  PosBottom,
  Quote,
  PosBottomSpan,
  BackgroundPage,
  ContainerLoginForm,
  Header,
  Logo,
  TagPHeader,
} from "./styles";
import LogoLight from "../../images/logo-light.png";
import * as authAction from "../../actions/auth";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function RegisterPage(props) {
  const { authActionCreators } = props;
  const { register } = authActionCreators;

  const onFinish = (values) => {
    const { email, username, password } = values;
    register(email, username, password);
  };

  return (
    <ContainerPage className="page-login">
      <BackgroundPage>
        <PosBottom>
          <Quote>Stay hungry, stay foolish.</Quote>
          <PosBottomSpan>
            <strong>Steve Jobs</strong> - Apple's CEO
          </PosBottomSpan>
        </PosBottom>
      </BackgroundPage>

      <ContainerLoginForm>
        <Header>
          <Logo>
            <img src={LogoLight} alt="Logo" />
          </Logo>
          <TagPHeader>Welcome to manage money app</TagPHeader>
        </Header>
        <H3>Register</H3>
        <Form {...layout} name="basic" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="abc@gmail.com" />
          </Form.Item>

          <Form.Item label="Username" name="username">
            <Input placeholder="Abc" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="*********" />
          </Form.Item>

          <Form.Item className="none-border">
            <Button type="primary" htmlType="submit" style={{ width: "40%" }}>
              Register
            </Button>
          </Form.Item>
        </Form>
        <Link to="/login" style={{ color: "#0064bc", fontWeight: 500 }}>
          Login here
        </Link>
      </ContainerLoginForm>
    </ContainerPage>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActionCreators: bindActionCreators(authAction, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(RegisterPage);
