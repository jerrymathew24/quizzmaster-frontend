export const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY":
      return {
        ...state,
        quizCategory: payload,
      };
    default:
        return state
  }
};
