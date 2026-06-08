import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";

function QuizApp() {

  const questions = [
    {
      question: "What is React?",
      options: [
        "Library",
        "Database",
        "Browser",
        "Operating System"
      ],
      answer: "Library"
    },

    {
      question: "Which hook is used for state?",
      options: [
        "useEffect",
        "useState",
        "useMemo",
        "useRef"
      ],
      answer: "useState"
    },

    {
      question: "JavaScript was created in?",
      options: [
        "1995",
        "2000",
        "2005",
        "2010"
      ],
      answer: "1995"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {

    if (
      selectedAnswer ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
  };

  if (currentQuestion >= questions.length) {
    return (
      <Result
        score={score}
        totalQuestions={questions.length}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <Question
      questionData={questions[currentQuestion]}
      selectedAnswer={selectedAnswer}
      handleAnswerChange={handleAnswerChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default QuizApp;