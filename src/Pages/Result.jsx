import { useQuiz } from "../context/quiz-context";
import { Navbar } from "../components/Navbar/Navbar.jsx";

export const Result = () => {
  const { score } = useQuiz();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center mt-7 bg-blue-800 text-gray-800">
        <div className="bg-blue-950 shadow-md rounded-sm p-4 px-16 text-xl">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Result</h2>

          <span className="text-white">Your score is <strong>{score}</strong></span>
        </div>
      </main>
    </>
  );
};
