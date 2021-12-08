import { connect } from "react-redux";
import React, { useEffect } from "react";

import { HorizontalMenuStyled } from "./HorizontalMenuStyle";

import { getDashboardInfo, getAllStudents } from "../../store/dashboard";

function HorizontalMenu({
  dashboard,
  allStudents,
}) {
  const data = [
    [
      {
        name: "litseylar",
        number: dashboard.lyceum_list,
      },
      {
        name: "litsey o'quvchilari",
        number: allStudents.lyceum_students,
      },
      {
        name: "kasb-hunar maktablari",
        number: dashboard.school_list,
      },
      {
        name: "kasb-hunar maktablari o'quvchilari",
        number: allStudents.school_students,
      },
    ],
    [
      {
        name: "kollejlar",
        number: dashboard.college_list,
      },
      {
        name: "kollej o'quvchilari",
        number: allStudents.college_students,
      },
      {
        name: "texnikumlar",
        number: dashboard.techschool_list,
      },
      {
        name: "texnikum o'quvchilari",
        number: allStudents.techschool_students,
      },
    ],
    [
      {
        name: "berilgan diplomlar",
        number: dashboard.given_diplomas,
      },
      {
        name: "berilgan sertifikatlar",
        number: dashboard.given_certificates,
      },
      {
        name: "kasblar",
        number: dashboard.all_jobs,
      },
      {
        name: "qisqa kurslardagi o'quvchilar",
        number: allStudents.shortgroup_students,
      },
    ],
  ];

  return (
    <>
      {data.map((item, index) => {
        return (
          <HorizontalMenuStyled key={index}>
            {item.map((item, index) => (
              <div key={index}>
                <p>{item.number}</p>
                <p>{item.name}</p>
              </div>
            ))}
          </HorizontalMenuStyled>
        );
      })}
    </>
  );
}

export default connect(
  ({ dashboardReducer: { info, allStudents } }) => {
    return {
      dashboard: info,
      allStudents: allStudents,
    };
  },
  { getDashboardInfo, getAllStudents }
)(HorizontalMenu);
