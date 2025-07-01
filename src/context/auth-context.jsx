import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialState = {
  userName: "",
  password: "",
  token: ""
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [{ userName, password, token }, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ userName, password, token, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };