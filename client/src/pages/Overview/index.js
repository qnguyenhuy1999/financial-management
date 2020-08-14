import React from "react";
import { Row, Col } from "antd";

import { ContainerPeriod } from "./styles";
import ContainerCard from "../../components/ContainerCard";
import CostPeriod from "../../components/CostPeriod";

export default function () {
  return (
    <div>
      <ContainerCard />

      <ContainerPeriod>
        <Row gutter="50">
          <Col className="gutter-row" span={12}>
            <CostPeriod title={"Income"} color={"#2dba75"} />
          </Col>
          <Col className="gutter-row" span={12}>
            <CostPeriod title={"Expenses"} color={"#f14c52"} />
          </Col>
        </Row>
      </ContainerPeriod>
    </div>
  );
}
