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
    case "CLEAR_CREDENTIALS":
      return {
        ...state,
        userName: "",
        password: "",
      };
    case "TOKEN":
      return {
       ...state,
       token: payload
      }
    default:
      return state;
  }
};
