import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialState = {
  userName: "",
  password: "",
  token: "",
  quizCategory: ""
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token")
    authDispatch({
      type: "INITIAL_STATE",
      payload: token
    })
  }, [])
  const [{ userName, password, token, quizCategory }, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ userName, password, token,quizCategory, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };