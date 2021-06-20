export default function pageReducer(state, action) {
  switch (action.payload) {
    case "NEXT":
      return state < 9 ? state + 1 : state;
    case "PREVIOUS":
      return state > 1 ? state - 1 : state;
    default:
      console.log("something is wrong with pageReducer...");
      break;
  }
}
