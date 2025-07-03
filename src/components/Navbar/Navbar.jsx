import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

export const Navbar = ({ route }) => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const { quizDispatch } = useQuiz()

    const onAuthClick = () => {
        if (token) {
            localStorage.clear()
            quizDispatch({
                type: "QUIT"
            })
        }
        navigate("/")
    }

    const onEndGameClick = () => {
        quizDispatch({
            type: "QUIT"
        })
    }

    return (
        <header className="bg-blue-950 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-amber-50">
                        crossword
                    </span>
                    <h1 className="text-xl font-bold text-yellow-50">
                        {
                            route === "home" ? (

                                <Link to="/">Quiz Master</Link>
                            ) : "Quiz Master"
                        }
                    </h1>
                </div>

                <nav>
                    <ul className="flex space-x-6 text-amber-50 font-medium">
                        {
                            route === "home" || route === "login" ? (
                                <li>
                                    <Link to="/auth/login" className="hover:text-blue-600" onClick={onAuthClick}>  {token ? "Logout" : "Login"}</Link>
                                </li>) : ""
                        }

                        {
                            route === "result" && (
                                <>
                                    <li>
                                        <Link to="/" onClick={onEndGameClick} className="hover:text-blue-600">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={onAuthClick} className="hover:text-blue-600">Logout</Link>
                                    </li>
                                </>
                            )
                        }

                    </ul>
                </nav>
            </div>
        </header>
    );
};
