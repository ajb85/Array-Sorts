const startArray = [
  { start: 0, end: null, num: 5 },
  { start: 1, end: null, num: 4 },
  { start: 2, end: null, num: 3 },
  { start: 3, end: null, num: 2 },
  { start: 4, end: null, num: 1 }
];

export const initialState = {
  array: startArray,
  length: 4,
  steps: [],
  step: 0,
  play: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "randomize":
      return { ...state, array: randomizeArray(state.length) };
    case "newLength":
      return {
        ...state,
        array: randomizeArray(action.payload),
        length: action.payload
      };
    case "incrementStep":
      return {
        ...state,
        step: state.step < state.steps.length - 1 ? state.step + 1 : state.step
      };
    case "decrementStep":
      return {
        ...state,
        step: state.step > 0 ? state.step - 1 : state.step
      };
    case "setStep":
      return { ...state, step: action.payload };
    case "setSteps":
      return { ...state, steps: action.payload };
    case "togglePlay":
      const step = state.step === 0 ? 1 : state.step;
      return { ...state, play: !state.play, step };
    default:
      return state;
  }
};

function randomizeArray(length) {
  let newArr = [];
  for (let i = 0; i < length; i++) {
    const entry = {
      num: Math.round(Math.random() * 100),
      start: i,
      end: null
    };
    newArr.push(entry);
  }
  return newArr;
}
