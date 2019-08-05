import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import styles from "./styles.module.scss";
const animateShift = props => keyframes`
    from {left: ${props.location}px;}
    to {left: ${props.location + props.shift}px;}
  `;

const Animate = styled.div`
  div {
    -webkit-animation: ${props => props.time} ${animateShift} infinite;
    animation: ${props => props.time} ${animateShift} infinite;
  }
`;

function Array({ state, dispatch }) {
  useEffect(() => {
    let stopLoop;
    if (state.play) {
      stopLoop = setInterval(() => {
        dispatch({ type: "incrementStep" });
      }, 2000);
    } else if (!state.play && stopLoop) {
      clearInterval(stopLoop);
    }

    return () => clearInterval(stopLoop);
  }, [state.play, dispatch]);
  const thisStep = state.steps[state.step] ? state.steps[state.step] : null;
  let totalSize;
  const sortingArray =
    thisStep &&
    thisStep.array.map((numInfo, i) => {
      const isEvaluated = state.step > 0 && thisStep.indices.start.includes(i);
      const isAnimated = isEvaluated && thisStep.changed;
      const index = isAnimated && thisStep.indices.start.indexOf(i);

      const background = isEvaluated ? "tan" : "white";

      const left = 15 + (36 + 6.28 + 5) * i;

      totalSize = left;
      const shift = isAnimated ? (thisStep.indices.end[index] - i) * 47.28 : 0;

      return (
        <Animate time="2s" location={left} shift={shift}>
          <div
            key={numInfo.start}
            className={styles.numberBlock}
            style={{ left: `${left}px` }}
          >
            <p
              style={{
                backgroundColor: background,
                width: "36px",
                textAlign: "center"
              }}
            >
              {numInfo.num}
            </p>
            <p style={{ marginRight: "5px" }}>
              {i < state.array.length - 1 ? "," : ""}
            </p>
          </div>
        </Animate>
      );
    });

  return (
    <section className={styles.Array}>
      <div className={styles.condition}>
        <p>
          {!thisStep || state.step === 0
            ? "Press Play or Step Forward to begin"
            : thisStep.evaluation}
        </p>
      </div>
      <div
        className={styles.displayArray}
        style={{
          // last ele start point + last ele size + bracket size = div size
          width: `${totalSize + 41 + 8.48}px`
        }}
      >
        <p>[</p>
        {sortingArray}
        <p>]</p>
      </div>
    </section>
  );
}

export default Array;

// let width;
// *** This logic works, but it's overly complicated.
// *** For now, I'm just making each element the size of 2 elements for
// *** simplicity sakes
// if (
//   thisStep.indices &&
//   thisStep.indices.start &&
//   thisStep.indices.start.includes(i)
// ) {
//   const index = thisStep.indices.start.indexOf(i);
//   const arrayStartElement =
//     thisStep.array[thisStep.indices.start[index]];
//   const arrayEndElement =
//     thisStep.array[thisStep.indices.end[index]];
//   width = `${Math.max(
//     arrayEndElement.num.toString().length,
//     arrayStartElement.num.toString().length
//   ) * 18}px`;
// } else {
//   width = `${18 * numInfo.num.toString().length}px`; // 18px per number
// }
