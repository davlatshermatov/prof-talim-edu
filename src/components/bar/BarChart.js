import React from "react";
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
import faker from "faker";

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

const labels = [
  "Andijon viloyati",
  "Buxoro viloyati",
  "Farg'ona viloyati",
  "Jizzax viloyati",
  "Namangan viloyati",
  "Navoiy viloyati",
  "Qashqadaryo viloyati",
  "Qoraqalpog'iston Respublikasi",
  "Samarqand viloyati",
  "Sirdaryo viloyati",
  "Surxondaryo villoyati",
  "Toshkent shahri",
  "Toshkent viloyati",
  "Xorazm viloyati",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Litseylar soni",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 50 })),
      backgroundColor: "#1460D0",
      stack: "Stack 1",
    },
    {
      label: "Kasb-hunar maktablari soni",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 50 })),
      backgroundColor: "#E91E62",
      stack: "Stack 2",
    },
    {
      label: "Kollejlar soni",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 50 })),
      backgroundColor: "#2E7D32",
      stack: "Stack 3",
    },
    {
      label: "Texnikumlar soni",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 50 })),
      backgroundColor: "#FFCD56",
      stack: "Stack 4",
    },
  ],
};

const BarChart = () => {
  return (
    <BarChartStyled>
      <Bar options={options} data={data} />
    </BarChartStyled>
  );
};

export default BarChart;
