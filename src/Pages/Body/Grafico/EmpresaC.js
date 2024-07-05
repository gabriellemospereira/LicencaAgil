import { style } from "d3";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 20],
  ["Commute", 50],
  ["Watch TV", 44],
  ["Sleep", 66],
];

export const options = {
  title: "Empresa C",
  
  
};

export default function EmpresaC() {
  return (
    <Chart
    className="empresab"
      chartType="PieChart"
      data={data}
      options={options}
     
    />
  );
}
