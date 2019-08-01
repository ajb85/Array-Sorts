import React from "react";

import styles from "./styles.module.scss";

function Array({ state }) {
  const thisStep = state.steps[state.step] ? state.steps[state.step] : null;
  console.log(thisStep);
  return (
    <section className={styles.Array}>
      <div className={styles.condition}>
        <p>
          {!thisStep || state.step === 0
            ? "Press Play or Step Forward to begin"
            : thisStep.evaluation}
        </p>
      </div>
      <div className={styles.displayArray}>
        <p style={{ marginRight: "5px" }}>[</p>
        {state.array.map((numInfo, i) => {
          const background =
            state.step > 0 && thisStep.indices.start.includes(i)
              ? "tan"
              : "white";
          return (
            <>
              <p
                key={numInfo.start}
                style={{
                  backgroundColor: background
                }}
              >
                {numInfo.num}
              </p>
              <p style={{ marginRight: "5px" }}>
                {i < state.array.length - 1 ? "," : ""}
              </p>
            </>
          );
        })}
        <p style={{ marginRight: "5px" }}>]</p>
      </div>
    </section>
  );
}

export default Array;
