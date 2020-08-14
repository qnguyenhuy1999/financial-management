import React from "react";
import { connect } from "react-redux";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { BorderContainer } from "./styles";
import ListTransaction from "../ListTransaction";

const RADIAN = Math.PI / 180;

function CostPeriod(props) {
  const { title, color, transaction } = props;

  const fetchData = () => {
    const data = [
      ...transaction.monthTransactions,
      ...transaction.dayTransactions,
    ];

    return data.length > 0
      ? data
          .filter((item) =>
            title === "Income"
              ? item.category.type === "income"
              : item.category.type === "expenses",
          )
          .map((item) => {
            return {
              name: item.category.name,
              background: item.category.icon.background,
              value: item.amount,
            };
          })
      : [];
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + 2.08 * radius * Math.cos(-midAngle * RADIAN);
    const y = cy + 2.08 * radius * Math.sin(-midAngle * RADIAN);

    const item = fetchData()[index];

    return (
      <text
        x={x}
        y={y}
        fill={item.background}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${item.name} - ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <BorderContainer>
      <h3 style={{ color: color }}>{title}</h3>
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={fetchData()}
              cx={300}
              cy={165}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {fetchData().map((item, index) => (
                <Cell key={`cell-${index}`} fill={item.background} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ListTransaction />
    </BorderContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
  };
};

export default connect(mapStateToProps, null)(CostPeriod);
