import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Select, InputNumber, Button } from "antd";

import * as budgetAction from "../../actions/budget";

function WalletSettingPage(props) {
  const { budget, currency, budgetActionCreators } = props;
  const { editBudget } = budgetActionCreators;

  const onFinish = (values) => {
    const { cash, card, balancePerMonth, mainCurrency } = values;
    editBudget(cash, card, balancePerMonth, mainCurrency);
  };

  return (
    <div>
      <h2>General information</h2>
      <div className="container-form">
        <Form layout="horizontal" onFinish={onFinish}>
          <Form.Item label="Cash" name="cash" initialValue={budget.cash}>
            <InputNumber />
          </Form.Item>

          <Form.Item label="Card" name="card" initialValue={budget.card}>
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Initial balance"
            name="balancePerMonth"
            initialValue={budget.balancePerMonth}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Initial currency"
            name="mainCurrency"
            initialValue={budget?.mainCurrency?._id}
          >
            <Select>
              <Select.Option value="">Chose one main currency</Select.Option>
              {currency.length > 0 &&
                currency.map((item, index) => (
                  <Select.Option key={index} value={item._id}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    budget: state.budget.data,
    currency: state.currency.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    budgetActionCreators: bindActionCreators(budgetAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletSettingPage);
