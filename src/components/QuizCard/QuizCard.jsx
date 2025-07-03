import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

export const QuizCard = ({ quizCategory }) => {
    const navigate = useNavigate()
    const {quizDispatch} = useQuiz()
    const { title, description, image, category } = quizCategory;
    const token = localStorage.getItem("token")

    const onPlayNowClick = () => {
        if (token) {
            quizDispatch({
                type:"CATEGORY",
                payload:category
            })
            localStorage.setItem("category", category)
            navigate("/quiz")
        }
        
        else {
            navigate("/auth/login")
        }
    }


    return (
        <div className="bg-blue-950 text-white rounded-2xl shadow-lg p-4 max-w-sm w-full hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={image} alt="Quiz Icon" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <span className="text-sm text-gray-300">{description}</span>
                </div>
            </div>
            <div className="mt-4 text-right">
                <button onClick={onPlayNowClick} className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
                    PLAY NOW
                </button>
            </div>
        </div>
    );
};
