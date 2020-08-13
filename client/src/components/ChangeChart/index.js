import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// import PropTypes from "prop-types";

import { ToolTipContainer, ToolTipTitle } from "./styles";
import { formatMoney } from "../../commons/helper";

const data = [
  { date: "2020-08-11", Income: 400000, Expenses: 300000 },
  { date: "2020-08-11", Income: 400000, Expenses: 300000 },
  { date: "2020-08-11", Income: 400000, Expenses: 300000 },
];

export default function ChangeChart() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <ToolTipContainer>
          <ToolTipTitle>{`${label}`}</ToolTipTitle>
          <p className="label">
            <span style={{ color: "#2dba75" }}>Income:</span>
            {` ${formatMoney.format(payload[0].payload.Income)}`}
          </p>

          <p className="label">
            <span style={{ color: "#f14c52" }}>Expenses:</span>
            {` ${formatMoney.format(payload[0].payload.Expenses)}`}
          </p>
        </ToolTipContainer>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer className="change-chart" height={350}>
      <BarChart
        height={350}
        data={data}
        margin={{ top: 5, right: 30, left: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis type="number" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Income" barSize={20} fill="#2dba75" />
        <Bar dataKey="Expenses" barSize={20} fill="#f14c52" />
      </BarChart>
    </ResponsiveContainer>
  );
}
