import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quiz-reducer";


const initialState = {
    index: 0,
    score: 0,
    quizCategory: "",
    selectedOption: ""
};

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [{ index, score, quizCategory, selectedOption }, quizDispatch] = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={{ index, score, quizCategory, selectedOption, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)
export { useQuiz, QuizProvider }