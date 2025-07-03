import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { QuestionAndOptions } from "../components/QuestionAndOptions/QuestionAndOptions";
import axios from "axios";
import { useQuiz } from "../context/quiz-context";

export const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const { quizCategory } = useQuiz()
  console.log("==================================");


  console.log(quizCategory, ":: quizcategory");




  useEffect(() => {
    (async () => {
      try {
        const { data: { data } } = await axios.get("https://quizzmaster-backend.onrender.com/quiz",
          {
            headers: { authorization: localStorage.getItem("token") }
          }
        );
        console.log(data, "::data");
        const filteredData = data.filter(({ category }) => category === quizCategory)
        setQuiz(filteredData);
        console.log(filteredData, ":: filtered data");

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
