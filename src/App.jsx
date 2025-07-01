
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;