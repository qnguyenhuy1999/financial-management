import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

import { BorderContainer } from "./styles";
import ListTransaction from "../ListTransaction";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function (props) {
  const { title, color } = props;

  return (
    <BorderContainer>
      <h3 style={{ color: color }}>{title}</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ListTransaction />
    </BorderContainer>
  );
}
