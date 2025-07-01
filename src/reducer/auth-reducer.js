export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "USERNAME":
      return {
        ...state,
        userName: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    default:
      return state;
  }
};
