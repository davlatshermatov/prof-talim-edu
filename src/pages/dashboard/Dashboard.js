// import { connect } from "react-redux";
import React, { useEffect } from "react";

import { DashboardStyled } from "./DashboardStyle";
import BarChart from "../../components/bar/BarChart";
import DoughnutChart from "../../components/doughnut/DoughnutChart";
import HorizontalMenu from "../../components/horizontal-menu/HorizontalMenu";

import {
  getDashboardInfo,
  getAllStudents,
  getAllLyceums,
  getAllSchools,
  getAllColleges,
  getAllTechschools,
  getAllStudentsByEducation,
} from "../../store/dashboard";
import { connect } from "react-redux";

const Dashboard = ({
  getDashboardInfo,
  getAllStudents,
  getAllLyceums,
  getAllSchools,
  getAllColleges,
  getAllTechschools,
  getAllStudentsByEducation,
}) => {
  useEffect(() => {
    getDashboardInfo();
    getAllStudents();
    getAllSchools();
    getAllColleges();
    getAllLyceums();
    getAllTechschools();
    getAllStudentsByEducation();
  }, [
    getDashboardInfo,
    getAllStudents,
    getAllLyceums,
    getAllColleges,
    getAllSchools,
    getAllTechschools,
    getAllStudentsByEducation,
  ]);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date().toLocaleDateString("en-US", options);

  return (
    <DashboardStyled>
      <div className="dashboard-header">
        <p>/ Admin Side</p>
        <p>{today}</p>
      </div>
      <HorizontalMenu />
      <div className="doughnutCharts">
        <DoughnutChart />
      </div>
      <div className="barCharts">
        <BarChart />
      </div>
    </DashboardStyled>
  );
};

export default connect(null, {
  getDashboardInfo,
  getAllStudents,
  getAllLyceums,
  getAllSchools,
  getAllColleges,
  getAllTechschools,
  getAllStudentsByEducation,
})(Dashboard);
