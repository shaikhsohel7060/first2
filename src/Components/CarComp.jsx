import React from "react";

export const CarComp = (props) => {
  const { naem, mdl2, clr2, type2 } = props;
  return (
    <div>
      <h1>Car Name:{naem}</h1>
      <h1>Car Model:{mdl2}</h1>
      <h1>Car color:{clr2}</h1>
      <h1>Car Type:{type2}</h1>
    </div>
  );
};
