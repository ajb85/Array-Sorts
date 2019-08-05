import React, { useReducer } from "react";

import UI from "./components/UI/";
import Array from "./components/Array/";
import { initialState, reducer } from "reducer/";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UI state={state} dispatch={dispatch} />
      <Array state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
