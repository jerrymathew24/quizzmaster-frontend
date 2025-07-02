import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quiz-reducer";


const initialState = {
    index: 0,
    score: 0,
    quizCategory:""
};

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [{ index, score, quizCategory }, quizDispatch] = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={{ index, score, quizCategory, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)
export { useQuiz, QuizProvider }