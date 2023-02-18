import React from "react";

const Gread = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} {props.name2}, Welcome to Class
      </h1>
      <h2>{props.add}</h2>
    </div>
  );
};
export default Gread;
