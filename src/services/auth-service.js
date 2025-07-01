import axios from "axios";

export const loginHandler = async (userName, password) => {

  try {
    const {
      data: { token },
      status,
    } = await axios.post(
      "https://quizzmaster-backend.onrender.com/auth/login",
      {
        userName: userName,
        password: password,
      }
    );
    if (status === 200) {
      localStorage.setItem("token", token);
      return token
    }
    console.log(userName, token, status);
  } catch (error) {
    console.log(error);
  }
};
