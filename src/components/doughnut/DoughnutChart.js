import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartStyled } from "./DoughnutChartStyle";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  return (
    <DoughnutChartStyled>
      <Doughnut redraw data={data} />
      <p>{data.name}</p>
      {/* <p className="total">Jami: 257221</p> */}
    </DoughnutChartStyled>
  );
};

export default DoughnutChart;
