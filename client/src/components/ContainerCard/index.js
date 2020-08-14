import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import { Div1, Div2, Div3, Div4 } from "./styles";
import { formatMoney } from "../../commons/helper";

function ContainerCard(props) {
  const { budget, transaction } = props;
  const { monthTransactions, dayTransactions } = transaction;

  const calcTotalExpense = () => {
    const month = monthTransactions.map((item) => {
      return item.category.type === "expenses" && item.amount;
    });

    const day = dayTransactions.map((item) => {
      return item.category.type === "expenses" && item.amount;
    });

    const total = [...month, ...day];

    return total.reduce((result, item) => (result += item), 0);
  };

  const calcTotalIncome = () => {
    const month = monthTransactions.map((item) => {
      return item.category.type === "income" && item.amount;
    });

    const day = dayTransactions.map((item) => {
      return item.category.type === "income" && item.amount;
    });

    const total = [...month, ...day];

    return total.reduce((result, item) => (result += item), 0);
  };

  return (
    <div className="container-card">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Div1>
            <h3>Current Wallet Balance</h3>
            <div className="footer d-flex">
              <div className="icon">
                <i className="fas fa-wallet" />
              </div>
              <span className="ml-1">
                {formatMoney(
                  budget.cash +
                    budget.card +
                    calcTotalIncome() -
                    calcTotalExpense(),
                )}{" "}
                VND
              </span>
            </div>
          </Div1>
        </Col>
        <Col className="gutter-row" span={6}>
          <Div2>
            <h3>Total Period Expenses / Month</h3>
            <div className="footer d-flex">
              <div className="icon">
                <i className="fas fa-funnel-dollar" />
              </div>
              <span className="ml-1">
                {formatMoney(calcTotalExpense())} VND
              </span>
            </div>
          </Div2>
        </Col>
        <Col className="gutter-row" span={6}>
          <Div3>
            <h3>Total Period Income / Month</h3>
            <div className="footer d-flex">
              <div className="icon">
                <i className="fas fa-dollar-sign" />
              </div>
              <span className="ml-1">{formatMoney(calcTotalIncome())} VND</span>
            </div>
          </Div3>
        </Col>
        <Col className="gutter-row" span={6}>
          <Div4>
            <h3>You Can Spend / Day</h3>
            <div className="footer d-flex">
              <div className="icon">
                <i className="far fa-calendar-check" />
              </div>
              <span className="ml-1">
                {formatMoney(budget.balancePerMonth / 30).split(".")[0]} VND
              </span>
            </div>
          </Div4>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    budget: state.budget.data,
    transaction: state.transaction,
  };
};

export default connect(mapStateToProps, null)(ContainerCard);
