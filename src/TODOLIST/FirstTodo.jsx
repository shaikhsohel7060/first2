import React, { useState } from "react";

const FirstTodo = () => {
  const [name, setName] = useState(0);

  const funk = () => {
    if (name >= 10) {
      setName(name + name);
    } else {
      setName(name + 1);
    }
  };

  return (
    <div>
      <h1 style={name == 0 ? { color: "red" } : { name }}>{name}</h1>
      <button onClick={funk}>Plus</button>

      <button onClick={() => setName(name - 1)} disabled={name == 0}>
        Minus
      </button>
    </div>
  );
};
export default FirstTodo;
