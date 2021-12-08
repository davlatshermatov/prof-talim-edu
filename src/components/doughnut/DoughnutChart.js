import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartStyled } from "./DoughnutChartStyle";
import { connect } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ dashboard }) => {
  let borderRadius = 3;
  let borderWidth = 2;

  const data = [
    {
      name: "O'quvchilar",
      labels: ["Yigitlar", "Qizlar"],
      datasets: [
        {
          label: "# of Votes",
          data: [dashboard.student_male, dashboard.student_female],
          backgroundColor: ["#36A2EB", "#FF6384"],
          borderColor: ["#fff", "#fff"],
          borderWidth,
          borderRadius,
        },
      ],
    },
    {
      name: "Kasb va mutaxassisliklar soni",
      labels: ["Boshlang'ich", "O'rta", "O'rta maxsus"],
      datasets: [
        {
          label: "# of Votes",
          data: [
            dashboard.pro_primary_edu2,
            dashboard.secondary_edu2,
            dashboard.pro_secondary_edu2,
          ],
          backgroundColor: ["#36A2EB", "#FF6384", "#FFCD56"],
          borderColor: ["#fff", "#fff", "#fff"],
          borderWidth,
          borderRadius,
        },
      ],
    },
    {
      name: "Kvalifikatsiyalar soni",
      labels: ["Boshlang'ich", "O'rta", "O'rta maxsus"],
      datasets: [
        {
          label: "# of Votes",
          data: [
            dashboard.pro_primary_edu2_qualification,
            dashboard.secondary_edu2_qualification,
            dashboard.pro_secondary_edu2_qualification,
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCD56"],
          borderColor: ["#fff", "#fff"],
          borderWidth,
          borderRadius,
        },
      ],
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        return (
          <DoughnutChartStyled key={index}>
            <Doughnut data={item} />
            <p>{item.name}</p>
            {/* <p className="total">Jami: 257221</p> */}
          </DoughnutChartStyled>
        );
      })}
    </>
  );
};

export default connect(({ dashboardReducer: { info } }) => {
  return {
    dashboard: info,
  };
})(DoughnutChart);
