import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { FaBars } from "react-icons/fa";

const Header = ({ isOpen, handleClick }) => {



  return (
    <HeaderStyle>
      <div className="sibebarToggle" onClick={handleClick}>
        <FaBars />
      </div>
    </HeaderStyle>
  );
};


export default Header;
