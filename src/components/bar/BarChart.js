import React, { useEffect } from "react";

import { BarChartStyled } from "./BarChartStyle";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "O'quv muassasalari soni",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: false,
    },
  },
};

const BarChart = ({
  dashboard,
  allLyceums,
  allSchools,
  allColleges,
  allTechschools,
  allStudentsByEducation,
}) => {
  const labels = dashboard?.regions?.map((item) => {
    return item.name;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Litseylar soni",
        data: Object.keys(allLyceums ? allLyceums : {}).map(function (key) {
          return allLyceums[key];
        }),
        backgroundColor: "#1460D0",
        stack: "Stack 1",
      },
      {
        label: "Kasb-hunar maktablari soni",
        data: Object.keys(allSchools ? allSchools : {}).map(function (key) {
          return allSchools[key];
        }),
        backgroundColor: "#E91E62",
        stack: "Stack 2",
      },
      {
        label: "Kollejlar soni",
        data: Object.keys(allColleges ? allColleges : {}).map(function (key) {
          return allColleges[key];
        }),
        backgroundColor: "#2E7D32",
        stack: "Stack 3",
      },
      {
        label: "Texnikumlar soni",
        data: Object.keys(allTechschools ? allTechschools : {}).map(function (
          key
        ) {
          return allTechschools[key];
        }),
        backgroundColor: "#FFCD56",
        stack: "Stack 4",
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: "Litsey",
        data: Object.keys(dashboard ? dashboard : {})
          .map(function (key) {
            return dashboard[key];
          })
          .slice(-14),
        backgroundColor: "#1460D0",
        stack: "Stack 1",
      },
      {
        label: "Kasb-hunar maktablari",
        data: Object.keys(allStudentsByEducation ? allStudentsByEducation : {})
          .map(function (key) {
            return allStudentsByEducation[key];
          })
          .slice(0, 14),
        backgroundColor: "#E91E62",
        stack: "Stack 2",
      },
      {
        label: "Kollej",
        data: Object.keys(allStudentsByEducation ? allStudentsByEducation : {})
          .map(function (key) {
            return allStudentsByEducation[key];
          })
          .slice(14, 28),
        backgroundColor: "#2E7D32",
        stack: "Stack 3",
      },
      {
        label: "Texnikum",
        data: Object.keys(allStudentsByEducation ? allStudentsByEducation : {})
          .map(function (key) {
            return allStudentsByEducation[key];
          })
          .slice(28, 42),
        backgroundColor: "#FFCD56",
        stack: "Stack 4",
      },
    ],
  };

  return (
    <>
      <BarChartStyled>
        <Bar options={options} data={data} className="chart" />
        <Bar
          options={{
            ...options,
            plugins: {
              title: {
                display: true,
                text: "O'quvchilar Soni Hududlar Kesimida",
              },
            },
          }}
          data={data2}
          className="chart"
        />
      </BarChartStyled>
    </>
  );
};

export default connect(
  ({
    dashboardReducer: {
      info,
      allLyceums,
      allSchools,
      allColleges,
      allTechschools,
      allStudentsByEducation,
    },
  }) => {
    return {
      dashboard: info,
      allLyceums,
      allSchools,
      allColleges,
      allTechschools,
      allStudentsByEducation,
    };
  }
)(BarChart);
