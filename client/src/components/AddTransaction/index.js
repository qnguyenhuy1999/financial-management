import React from "react";
import { Modal, Form, Select, DatePicker, InputNumber } from "antd";
import PropTypes from "prop-types";

import { AddTransactionContainer, FormGroup, Title } from "./styles";

const { Option } = Select;

export default function AddTransaction(props) {
  const { showModal, setShowModal } = props;
  return (
    <Modal
      title="ADD NEW TRANSACTION"
      onCancel={() => setShowModal(false)}
      onOk={() => setShowModal(false)}
      visible={showModal}
    >
      <Form>
        <AddTransactionContainer>
          <FormGroup>
            <Title>Category</Title>
            <Select placeholder="Select category" style={{ width: "100%" }}>
              <Option value="family">Family</Option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Title>Recurrence</Title>
            <Select placeholder="Select recurrence" style={{ width: "100%" }}>
              <Option value="day">Day</Option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Title>Date</Title>
            <DatePicker style={{ width: "100%" }} />
          </FormGroup>

          <FormGroup>
            <Title>Amount</Title>
            <InputNumber placeholder="0" style={{ width: "100%" }} />
          </FormGroup>

          <FormGroup>
            <Title>Currency</Title>
            <Select placeholder="Select currency" style={{ width: "100%" }}>
              <Option value="vnd">VND</Option>
            </Select>
          </FormGroup>
        </AddTransactionContainer>
      </Form>
    </Modal>
  );
}

AddTransaction.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
