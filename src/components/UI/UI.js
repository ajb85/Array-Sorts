import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

function UI({ state, dispatch }) {
  const updateLength = ({ target: { value } }) => {
    const num = parseInt(value, 10);

    if (!isNaN(num) && num < 10 && num > 0) {
      dispatch({
        type: "newLength",
        payload: num
      });
    }
  };
  return (
    <section className={styles.UI}>
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
    </section>
  );
}

export default UI;
