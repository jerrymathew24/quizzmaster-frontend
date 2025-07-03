export const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY":
      return {
        ...state,
        quizCategory: payload,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        index: state.index + 1,
      };
    default:
      return state;
  }
};
