import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { FaBars } from "react-icons/fa";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <HeaderStyle>
      <div className="sibebarToggle" onClick={() => setIsOpen((prev) => !prev)}>
        <FaBars />
      </div>
    </HeaderStyle>
  );
};

export default Header;
