import { connect } from "react-redux";
import React, { useEffect } from "react";

import { getDashboardInfo } from "../../store/dashboard";

import { DashboardStyled } from "./DashboardStyle";
import HorizontalMenu from "../../components/statisticsMenu/HorizontalMenu";
import data from "../../components/statisticsMenu/data";
import doughnutData from "../../components/doughnut/data";
import DoughnutChart from "../../components/doughnut/DoughnutChart";
import BarChart from "../../components/bar/BarChart";

const Dashboard = ({ dashboard, getDashboardInfo }) => {
  useEffect(() => {
    // getDashboardInfo();
  }, [getDashboardInfo]);

  return (
    <DashboardStyled>
      <h1>Dashboard</h1>
      {data.map((item, index) => (
        <HorizontalMenu key={index} item={item} />
      ))}
      <div className="doughnutCharts">
        {doughnutData.map((item) => (
          <DoughnutChart data={item} />
        ))}
      </div>
      <div className="barCharts">
        <BarChart />
      </div>
      <div className="barCharts">
        <BarChart />
      </div>
    </DashboardStyled>
  );
};

export default connect(
  ({ dashboardReducer }) => {
    return { dashboard: dashboardReducer };
  },
  { getDashboardInfo }
)(Dashboard);
