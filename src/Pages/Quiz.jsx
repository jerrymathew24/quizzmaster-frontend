import { useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { QuestionAndOptions } from "../components/QuestionAndOptions/QuestionAndOptions";
import axios from "axios";
import { useQuiz } from "../context/quiz-context";

export const Quiz = () => {
  const { quizCategory, quiz, quizDispatch } = useQuiz()


  useEffect(() => {
    (async () => {
      try {
        const { data: { data } } = await axios.get("https://quizzmaster-backend.onrender.com/quiz",
          {
            headers: { authorization: localStorage.getItem("token") }
          }
        );
        const filteredData = data.filter(({ category }) => category === quizCategory)
        if (filteredData && filteredData.length > 0) {
          quizDispatch({
            type: "SET_QUIZ",
            payload: filteredData
          })
          localStorage.setItem("quiz", JSON.stringify(filteredData))
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [quizCategory]);

  return (
    <>
      <Navbar route="quiz" />
      <main className="w-fit mx-auto">
        {
          quiz && quiz.length > 0 && <QuestionAndOptions quizData={quiz} />
        }
      </main>
    </>
  );
};
