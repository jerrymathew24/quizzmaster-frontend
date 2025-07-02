
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Quiz } from "./Pages/Quiz";
import { QuestionAndOptions } from "./components/QuestionAndOptions/QuestionAndOptions";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />

      </Routes>
    </div>
  )
}

export default App;