const startArray = [
  { start: 0, end: null, num: 5 },
  { start: 1, end: null, num: 4 },
  { start: 2, end: null, num: 3 },
  { start: 3, end: null, num: 2 },
  { start: 4, end: null, num: 1 }
];

export const initialState = {
  array: startArray,
  length: 4
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
