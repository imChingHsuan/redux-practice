import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  //useSelector's data is from reducers
  const count = useSelector((data) => data.counter);
  const isLogged = useSelector((data) => data.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>hello shelly</h1>
      <h2>count: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement(2));
        }}
      >
        -
      </button>
      <h2>Am I signin? {isLogged ? <p>YES</p> : <p>NOT YET</p>}</h2>
    </div>
  );
}

export default App;
