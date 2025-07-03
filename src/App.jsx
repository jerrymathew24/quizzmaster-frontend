
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Quiz } from "./Pages/Quiz";
import { QuestionAndOptions } from "./components/QuestionAndOptions/QuestionAndOptions";
import { Result } from "./Pages/Result";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </div>
  )
}

export default App;