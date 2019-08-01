import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

import bubbleSort from "sorts/bubbleSort.js";

function UI({ state, dispatch }) {
  useEffect(() => {
    dispatch({ type: "setSteps", payload: bubbleSort(state.array) });
  }, [state.array, dispatch]);

  const updateLength = ({ target: { value } }) => {
    const num = parseInt(value, 10);

    if (!isNaN(num) && num < 10 && num > 0) {
      dispatch({
        type: "newLength",
        payload: num
      });
    }
  };

  const nextStep = direction => {
    if (direction < 0 && state.step > 0) {
      dispatch({ type: "decrementStep" });
    } else if (direction > 0 && state.step < state.steps.length - 1) {
      dispatch({ type: "incrementStep" });
    }
  };

  return (
    <section className={styles.UI}>
      <div className={styles.settings}>
        <div>
          <label>Array Length:</label>
          <input value={state.length} onChange={e => updateLength(e)} />
        </div>
        <div>
          <label>Randomize Array:</label>
          <FontAwesomeIcon
            onClick={() => dispatch({ type: "randomize" })}
            icon="sync"
          />
        </div>
      </div>

      <div className={styles.controls}>
        <FontAwesomeIcon
          // onClick={()=>dispatch({type:"play"})}
          icon="play"
        />
        <FontAwesomeIcon
          // onClick={()=>dispatch({type:"pause"})}
          icon="pause"
        />
        <FontAwesomeIcon onClick={() => nextStep(-1)} icon="step-backward" />
        <FontAwesomeIcon onClick={() => nextStep(1)} icon="step-forward" />
      </div>
    </section>
  );
}

export default UI;
