import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

import { quiz } from '../reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  //dispatch next question in the questions array, ie dispatch the redux action "goToNextQuestion" from the quiz reducer.
  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  // const restartQuiz = () => {
  //   dispatch(quiz.actions.restart());
  // };

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => (
        <button key={item} onClick={() => onAnswerSubmit(question.id, index)}>
          {item}
        </button>
      ))}
      <button onClick={() => nextQuestion()}>Next question</button>;
      {/* if (state.currentQuestionIndex + 1 === state.questions.length){
      return
      <Link to="/">
        <button onClick={restartQuiz}>Restart the quiz</button>
      </Link>;
} */}
    </div>
  );
};
