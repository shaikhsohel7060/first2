import React, { useState } from "react";

const CounterFirst = () => {
  const [data, setData] = useState(0);

  const funk = () => {
    setData(data + 1);
  };
  return (
    <div>
      <h1>{data}</h1>
      {/* <input type="text"/> */}

      <br />
      <br />

      <button onClick={funk}>Plus</button>
      <button onClick={setData(data - 1)}>Minus</button>
    </div>
  );
};
export default CounterFirst;
