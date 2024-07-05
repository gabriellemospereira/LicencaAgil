import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Empresas cadastradas no sistema", 20],
  ["Clientes em potencial", 88000],
  ["Pequenas empresas em Londrina", 70],
  ["Micro empresas", 921],
  ["Mei", 2.459],
];

export const options = {
  title: "Usuário: Gabriel Rafael De Lemos P ",
};

export default function EmpresaA() {
  return (
    <Chart
    className="empresab"
      chartType="PieChart"
      data={data}
      options={options}
     
    />
  );
}
