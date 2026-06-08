import React from "react";

function Result({
  score,
  totalQuestions,
  restartQuiz
}) {
  return (
    <div>
      <h2>Quiz Finished!</h2>

      <h3>
        Score: {score}/{totalQuestions}
      </h3>

      <button onClick={restartQuiz}>
        Play Again
      </button>
    </div>
  );
}

export default Result;