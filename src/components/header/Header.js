import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { FaBars } from "react-icons/fa";

const Header = ({ isOpen, handleClick }) => {
  return (
    <HeaderStyle>
      <div className="sibebarToggle" onClick={handleClick}>
        <FaBars />
      </div>
      <div className="avatar">
        <img
          src="https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4"
          alt="avatar"
        />
      </div>
    </HeaderStyle>
  );
};

export default Header;
