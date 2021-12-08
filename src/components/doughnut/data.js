let borderRadius = 3;
let borderWidth = 2;

const data = [
  {
    name: "O'quvchilar",
    labels: ["Yigitlar", "Qizlar"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
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
        data: [4, 10, 7],
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
        data: [21, 9, 13],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCD56"],
        borderColor: ["#fff", "#fff"],
        borderWidth,
        borderRadius,
      },
    ],
  },
];

export default data;
