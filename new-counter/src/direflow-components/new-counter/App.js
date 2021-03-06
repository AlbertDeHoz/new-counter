import React, { useState } from "react";

const NewCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div
        style={{
          fontSize: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>You clicked {count} times</p>
        <button
          onClick={increment}
          style={{ width: "100px", height: "30px", fontSize: "16px" }}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default NewCounter;

