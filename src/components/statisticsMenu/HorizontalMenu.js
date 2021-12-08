import React from "react";
import { HorizontalMenuStyled } from "./HorizontalMenuStyle";

function HorizontalMenu({ item }) {
  return (
    <HorizontalMenuStyled>
      {item.map((item,index) => (
        <div key={index}>
          <p>{item.number}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </HorizontalMenuStyled>
  );
}

export default HorizontalMenu;
