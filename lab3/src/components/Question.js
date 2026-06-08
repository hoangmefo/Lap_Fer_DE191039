import React from "react";

function Question({
  questionData,
  selectedAnswer,
  handleAnswerChange,
  handleSubmit
}) {
  return (
    <div>
      <h2>{questionData.question}</h2>

      {questionData.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="answer"
            checked={selectedAnswer === option}
            onChange={() => handleAnswerChange(option)}
          />
          {option}
        </div>
      ))}

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Question;