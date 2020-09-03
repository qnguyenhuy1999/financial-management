import React from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";

import { H2 } from "./styles";

function ProfileSetting(props) {
  const { profile } = props;

  const onFinish = (values) => {
    const { email, username, password } = values;
    console.log(email, username, password);
  };

  return (
    <div className="setting-component">
      <H2>Profile Infomation</H2>
      <div className="container-form">
        <Form layout="horizontal" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            labelCol={{ span: 4 }}
            initialValue={profile.email}
          >
            <Input type="email" disabled />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            labelCol={{ span: 4 }}
            initialValue={profile.username}
          >
            <Input type="username" />
          </Form.Item>

          <Form.Item label="Password" name="password" labelCol={{ span: 4 }}>
            <Input.Password placeholder="******" />
          </Form.Item>

          {/* <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile,
  };
};
export default connect(mapStateToProps, null)(ProfileSetting);
