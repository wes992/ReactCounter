import React, { useState, Component, useEffect, useCallback } from "react";
import CounterView from "./CounterView";

import "./CounterApp.css";

//Object that only keeps unique data
const CounterApp = (props) => {
  const [count, setCount] = useState(0);
  const { title } = props;

  useEffect(() => {
    console.log("Using USE EFFECT");
  }, []);

  //   const changeCount = (step) => () => setCount(count + step);

  const changeCount = useCallback((step) => () => setCount(count + step), [count]);

  return (
    <div className="counter-app">
      <h1>{title}</h1>
      <CounterView countValue={count} handleStep={changeCount} />
    </div>
  );
};

export default CounterApp;

// class CounterApp extends Component {
//   state = {
//     count: 0,
//   };

//   constructor() {
//     super();
//     this.changeCount = this.changeCount.bind(this);
//   }

//   changeCount = (step) => {
//     this.setState({
//       count: this.state.count + step,
//     });
//   };

//   render() {
//       const { count } = this.state
//     return (
//       <div className="counter-app">
//         <h1 className="value">{count}</h1>
//         <button onClick={() => this.changeCount(1)} className="button">
//           Increment
//         </button>
//         <button onClick={() => this.changeCount(-1)} className="button">
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }

// export default CounterApp;
