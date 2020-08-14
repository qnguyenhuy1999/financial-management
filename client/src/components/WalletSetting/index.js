import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, InputNumber, Button } from "antd";

import { H2 } from "./styles";
import * as budgetAction from "../../actions/budget";

function WalletSettingComponent(props) {
  const { budget, budgetActionCreators } = props;
  const { editBudget } = budgetActionCreators;

  const onFinish = (values) => {
    const { cash, card, balancePerMonth } = values;
    editBudget(cash, card, balancePerMonth);
  };

  return (
    <div className="setting-component">
      <H2>General information</H2>
      <div className="container-form">
        <Form layout="horizontal" onFinish={onFinish}>
          <Form.Item
            label="Cash"
            name="cash"
            labelCol={{ span: 5 }}
            initialValue={budget.cash}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Card"
            name="card"
            labelCol={{ span: 5 }}
            initialValue={budget.card}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Initial balance"
            name="balancePerMonth"
            labelCol={{ span: 5 }}
            initialValue={budget.balancePerMonth}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    budget: state.budget.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    budgetActionCreators: bindActionCreators(budgetAction, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletSettingComponent);
