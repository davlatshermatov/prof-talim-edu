import React, { useState } from "react";

import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  FaChartLine,
  FaChartPie,
  FaCertificate,
  FaRegNewspaper,
  FaQuestion,
  FaLocationArrow,
  FaClone,
} from "react-icons/fa";
import { SidebarStyled } from "./SidebarStyle";
import Dashboard from "../../pages/dashboard/Dashboard";
import Header from "../header/Header";
import { Link, Route, Routes } from "react-router-dom";
import Duplicates from "../../pages/duplicates/Duplicates";

const Sidebar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidebarStyled>
        <ProSidebar className="sidebar" collapsed={IsOpen}>
          <SidebarHeader>
            <img src="./SidebarImg.jpg" alt="" className="sidebarImage" />
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FaClone />}>
                Dublikatlar <Link to="/duplicates" />
              </MenuItem>
              <MenuItem icon={<FaChartLine />}>
                Dashboard <Link to="/dashboard" />
              </MenuItem>
              <SubMenu icon={<FaLocationArrow />} title="Hududlar" />
              <SubMenu icon={<FaRegNewspaper />} title="O'quv muassasi" />
              <SubMenu icon={<FaChartPie />} title="Hisobotlar" />
              <SubMenu icon={<FaCertificate />} title="Sertifikatlar" />
              <SubMenu icon={<FaQuestion />} title="So'rovlar" />
            </Menu>
          </SidebarContent>
          <SidebarFooter>{/* do something */}</SidebarFooter>
        </ProSidebar>
        <div className="content">
          <Header IsOpen={IsOpen} setIsOpen={setIsOpen} />
          <div className="container">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/duplicates" element={<Duplicates />} />
            </Routes>
          </div>
        </div>
      </SidebarStyled>
    </>
  );
};

export default Sidebar;
