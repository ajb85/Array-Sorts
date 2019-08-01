import React from "react";

import styles from "./styles.module.scss";

function Array({ state }) {
  return (
    <section className={styles.Array}>
      <p>[</p>
      {state.array.map((numInfo, i) => (
        <p>
          {numInfo.num}
          {i < state.array.length - 1 ? "," : ""}
        </p>
      ))}
      <p>]</p>
    </section>
  );
}

export default Array;
