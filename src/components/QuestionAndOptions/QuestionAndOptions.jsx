export const QuestionAndOptions = ({ quizData }) => {

    const [currentQuiz] = quizData

    const { title, quizz } = currentQuiz

    return (
        <div className="bg-blue-950 text-white p-5 px-14 rounded-2xl max-w-xl shadow-lg mt-3">
            <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-xl font-bold mx-auto text-center">{title }</span>
            </div>
            <div className="flex justify-between">
                <span className="">Question 1/10</span>
                <span className="">Score:</span>
            </div>
            <p className="mb-3 font-normal">
                What is the capital of France?
            </p>
            <div className="grid gap-2">
                <button className="w-full px-4 py-2 border-none rounded-4xl focus:outline-none  mx-auto text-center  bg-blue-900 hover:bg-blue-800">
                    Paris
                </button>
                <button className="w-full px-4 py-2 border-none rounded-4xl focus:outline-none  mx-auto text-center  bg-blue-900 hover:bg-blue-800">
                    Paris
                </button> <button className="w-full px-4 py-2 border-none rounded-4xl focus:outline-none  mx-auto text-center  bg-blue-900 hover:bg-blue-800">
                    Paris
                </button> <button className="w-full px-4 py-2 border-none rounded-4xl focus:outline-none  mx-auto text-center  bg-blue-900 hover:bg-blue-800">
                    Paris
                </button>

            </div>
            <div className="flex mt-4">
                <button className="px-4 py-1 mx-2 hover:bg-blue-900 focus:outline-none">
                    Quit
                </button>
                <button className="px-4 py-1 bg-blue-900 hover:bg-blue-800">
                    Next Question
                </button>
            </div>
        </div>

    )
}