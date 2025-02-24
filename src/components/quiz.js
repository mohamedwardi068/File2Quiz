import React, { useState } from "react";

const questions = [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: "Paris" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
  { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Osmium", "Oganesson"], correctAnswer: "Oxygen" },
  { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Tolkien", "Rowling"], correctAnswer: "Shakespeare" },
  { question: "What is the boiling point of water in Celsius?", options: ["90", "100", "110", "120"], correctAnswer: "100" },
  { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: "Nile" },
  { question: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: "7" },
  { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
  { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"], correctAnswer: "Da Vinci" },
  { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
  { question: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], correctAnswer: "Tokyo" },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correctAnswer: "Carbon Dioxide" },
  { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Hawking"], correctAnswer: "Einstein" },
  { question: "What is the currency of the United Kingdom?", options: ["Euro", "Dollar", "Pound", "Rupee"], correctAnswer: "Pound" },
  { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: "Pacific" },
  { question: "How many bones are in the human body?", options: ["198", "206", "214", "222"], correctAnswer: "206" },
  { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Elephant", "Lion", "Bear"], correctAnswer: "Lion" },
  { question: "Which language has the most native speakers?", options: ["English", "Spanish", "Mandarin", "Hindi"], correctAnswer: "Mandarin" },
  { question: "What is the tallest mountain in the world?", options: ["K2", "Kilimanjaro", "Everest", "Denali"], correctAnswer: "Everest" },
];

const QUESTIONS_PER_PAGE = 5;

const Quizz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [checked, setChecked] = useState(Array(questions.length).fill(false));
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  const handleSelect = (questionIndex, option) => {
    const globalIndex = startIndex + questionIndex;
    if (checked[globalIndex]) return;

    const newAnswers = [...selectedAnswers];
    newAnswers[globalIndex] = option;
    setSelectedAnswers(newAnswers);

    const newChecked = [...checked];
    newChecked[globalIndex] = true;
    setChecked(newChecked);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Quizz</h1>
      <div className="space-y-6">
        {currentQuestions.map((q, index) => (
          <div key={index} className="p-4 border border-gray-700 rounded-md bg-gray-900">
            <h2 className="text-xl mb-2">{q.question}</h2>
            <div className="space-y-2">
              {q.options.map((option, optIndex) => (
                <label
                  key={optIndex}
                  className={`block p-2 rounded-md cursor-pointer text-white ${
                    checked[startIndex + index]
                      ? option === q.correctAnswer
                        ? "bg-green-600"
                        : option === selectedAnswers[startIndex + index]
                        ? "bg-red-600"
                        : "bg-gray-800"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${startIndex + index}`}
                    value={option}
                    onChange={() => handleSelect(index, option)}
                    disabled={checked[startIndex + index]}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded-md ${currentPage === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-green-500  hover:bg-green-700"}`}
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.floor(questions.length / QUESTIONS_PER_PAGE)))}
          disabled={startIndex + QUESTIONS_PER_PAGE >= questions.length}
          className={`px-4 py-2 rounded-md ${startIndex + QUESTIONS_PER_PAGE >= questions.length ? "bg-gray-500 cursor-not-allowed" : "bg-green-500  hover:bg-green-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quizz;
