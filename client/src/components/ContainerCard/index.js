import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import { Div1, Div2, Div3, Div4 } from "./styles";
import { formatMoney } from "../../commons/helper";

function ContainerCard(props) {
  const { budget } = props;

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
                {formatMoney.format(budget.cash + budget.card)}
              </span>
            </div>
          </Div1>
        </Col>
        <Col className="gutter-row" span={6}>
          <Div2>
            <h3>Total Period Expenses</h3>
            <div className="footer d-flex">
              <div className="icon">
                <i className="fas fa-funnel-dollar" />
              </div>
              <span className="ml-1">500</span>
            </div>
          </Div2>
        </Col>
        <Col className="gutter-row" span={6}>
          <Div3>
            <h3>Total Period Income</h3>
            <div className="footer d-flex">
              <div className="icon">
                <i className="fas fa-dollar-sign" />
              </div>
              <span className="ml-1">500</span>
            </div>
          </Div3>
        </Col>
        <Col className="gutter-row" span={6}>
          <Div4>
            <h3>You Can Spend</h3>
            <div className="footer d-flex">
              <div className="icon">
                <i className="far fa-calendar-check" />
              </div>
              <span className="ml-1">
                {formatMoney.format(budget.balancePerMonth / 30)}
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
  };
};

export default connect(mapStateToProps, null)(ContainerCard);
