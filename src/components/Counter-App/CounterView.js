import React, { useEffect } from "react";

const generateColor = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
};

const CounterView = (props) => {
  const { countValue, handleStep } = props;

  useEffect(() => {
    console.log("USE EFFECT from CounterView");
  });

  return (
    <div style={{ background: generateColor() }}>
      <h2 className="value">{countValue}</h2>
      <button onClick={handleStep(1)} className="button">
        Increment
      </button>
      <button onClick={handleStep(-1)} className="button">
        Decrement
      </button>
    </div>
  );
};

export default React.memo(CounterView);
