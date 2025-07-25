import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar/Navbar";
import { QuizCard } from "../components/QuizCard/QuizCard";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          "https://quizzmaster-backend.onrender.com/categories"
        );
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Fragment>
      <Navbar route="home" />
      <main className=" bg-blue-800 min-h-screen p-4 flex flex-col items-center gap-4">
        {categories.map((category) => (
          <QuizCard key={category.id} quizCategory={category} />
        ))}
      </main>
    </Fragment>
  );
};
