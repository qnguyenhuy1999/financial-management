import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Modal, Form, Select, DatePicker, InputNumber, Button } from "antd";
import PropTypes from "prop-types";

import {
  AddTransactionContainer,
  Icon,
  TagI,
  Title,
  TagSpanName,
} from "./styles";
import * as transactionAction from "../../actions/transaction";

function AddTransaction(props) {
  const [input, setInput] = useState("");
  const [form] = Form.useForm();
  const {
    categories,
    showModal,
    setShowModal,
    transactionActionCreators,
  } = props;
  const { createTransaction } = transactionActionCreators;

  const onFinish = (values) => {
    setShowModal(false);
    const { category, recurrence, date, amount } = values;
    createTransaction(amount, category, recurrence, date);
    form.resetFields();
  };

  return (
    <Modal
      title="ADD NEW TRANSACTION"
      onCancel={() => setShowModal(false)}
      onOk={() => setShowModal(false)}
      visible={showModal}
    >
      <Form form={form} onFinish={onFinish}>
        <AddTransactionContainer>
          <Form.Item label="Category" name="category" labelCol={{ span: 4 }}>
            <Select placeholder="Select category" style={{ width: "100%" }}>
              <Select.OptGroup label="Expenses">
                {categories.expenses.length > 0 &&
                  categories.expenses.map((category, index) => (
                    <Select.Option value={category._id} key={index}>
                      <Title>
                        <Icon
                          style={{
                            background: category.icon.background,
                          }}
                        >
                          <TagI className={category.icon.class} />
                        </Icon>
                        <TagSpanName>{category.name}</TagSpanName>
                      </Title>
                    </Select.Option>
                  ))}
              </Select.OptGroup>

              <Select.OptGroup label="Income">
                {categories.income.length > 0 &&
                  categories.income.map((category, index) => (
                    <Select.Option value={category._id} key={index}>
                      <Title>
                        <Icon
                          style={{
                            background: category.icon.background,
                          }}
                        >
                          <TagI className={category.icon.class} />
                        </Icon>
                        <TagSpanName>{category.name}</TagSpanName>
                      </Title>
                    </Select.Option>
                  ))}
              </Select.OptGroup>
            </Select>
          </Form.Item>

          <Form.Item
            label="Recurrence"
            name="recurrence"
            labelCol={{ span: 4 }}
          >
            <Select
              placeholder="Select recurrence"
              style={{ width: "100%" }}
              onChange={(value) => setInput(value)}
            >
              <Select.Option value="monthly">Monthly</Select.Option>
              <Select.Option value="day">Day</Select.Option>
            </Select>
          </Form.Item>

          {input === "day" && (
            <Form.Item label="Date" name="date" labelCol={{ span: 4 }}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          )}

          <Form.Item label="Amount" name="amount" labelCol={{ span: 4 }}>
            <InputNumber placeholder="0" style={{ width: "100%" }} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AddTransactionContainer>
      </Form>
    </Modal>
  );
}

AddTransaction.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    transactionActionCreators: bindActionCreators(transactionAction, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    categories: state.category,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
