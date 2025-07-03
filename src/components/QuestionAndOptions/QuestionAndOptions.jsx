import { useQuiz } from "../../context/quiz-context"
import { useNavigate } from "react-router-dom"

export const QuestionAndOptions = ({ quizData }) => {

    const navigate = useNavigate()

    const [currentQuiz] = quizData

    const { title, quizz } = currentQuiz

    const { index, score, selectedOption, quizDispatch } = useQuiz()

    const onNextQuestionClick = () => {
        if (index !== quizz.length - 1) {
            quizDispatch({
                type: "NEXT_QUESTION"
            })
        } else {
            quizDispatch({
                type: "SUBMIT"
            })
            navigate("/result")
        }
    }

    const onOptionClick = (optionId, isCorrect) => {
        quizDispatch({
            type: "SET_SELECTED_OPTION",
            payload: { optionId, isCorrect }
        })
    }

    const onQuitClick = () => {
        quizDispatch({
            type:"QUIT"
        })
        navigate("/")
    }

    return (
        <div className="bg-blue-950 text-white p-5 px-14 rounded-2xl max-w-xl shadow-lg mt-3">
            <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-xl font-bold mx-auto text-center">{title}</span>
            </div>
            <div className="flex justify-between">
                <span className="">Question {index + 1}/{quizz.length}</span>
                <span className="">Score: {score}</span>
            </div>
            <p className="mb-3 font-normal">
                Q{index + 1}: {quizz[index].question}
            </p>
            <div className="grid gap-2">
                {
                    quizz[index].options.map(({ id, option, isCorrect }) =>
                        <button key={id} className={`w-full px-4 py-2 border-none rounded-4xl focus:outline-none  mx-auto text-center  bg-blue-900 hover:bg-blue-800 ${selectedOption && isCorrect ? "bg-green-600" : ""} ${selectedOption === id && !isCorrect ? "bg-red-600" : ""}`}
                            onClick={() => onOptionClick(id, isCorrect)}
                            disabled={selectedOption}
                        >
                            {option}
                        </button>
                    )
                }
            </div>
            <div className="flex mt-4">
                <button className="px-4 py-1 mx-2 hover:bg-blue-900 focus:outline-none" onClick={onQuitClick} >
                    Quit
                </button>
                <button onClick={onNextQuestionClick} className="px-4 py-1 bg-blue-900 hover:bg-blue-800">
                    {
                        index === quizz.length - 1 ? "Submit" : "Next Question"
                    }
                </button>
            </div>
        </div>

    )
}