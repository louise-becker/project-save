import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import Summary from './Summary';
import ProgressBar from './ProgressBar';
import {
  Background,
  ButtonContainer,
  MainContainer,
  StyledButton,
  StyledQuestionHeader,
} from './Styled';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const ifQuizOver = useSelector((state) => state.quiz.quizOver);
  const ifLastQuestion = useSelector((state) => state.quiz.lastQuestion);

  const dispatch = useDispatch();

  const answers = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  //dispatch the answer value to the answer array, ie dispatch the redux action "submitAnswer" from the quiz reducer.
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  //dispatch next question in the questions array, ie dispatch the redux action "goToNextQuestion" from the quiz reducer.
  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (ifQuizOver) {
    return <Summary />;
  }

  return (
    <MainContainer>
      <Background>
        <ProgressBar></ProgressBar>
        <StyledQuestionHeader>{question.questionText}</StyledQuestionHeader>
        <ButtonContainer>
          {question.options.map((item, index) => (
            <StyledButton
              key={item}
              onClick={() => onAnswerSubmit(question.id, index)}
            >
              {item}h
            </StyledButton>
          ))}
        </ButtonContainer>
        {ifLastQuestion ? (
          <StyledButton
            onClick={() => nextQuestion()}
            style={{
              backgroundColor: '#F9F67F',
              width: 'auto',
            }}
          >
            View Results
          </StyledButton>
        ) : (
          <StyledButton
            disabled={!answers}
            onClick={() => nextQuestion()}
            style={{
              backgroundColor: '#F9F67F',
              width: 'auto',
            }}
          >
            Next question
          </StyledButton>
        )}
      </Background>
    </MainContainer>
  );
};

// dispatch the redux action "restartQuiz" from the quiz reducer.
//  const restartQuiz = () => {
//   dispatch(quiz.actions.restart());
// };

/* <StyledButton
            onClick={() => restartQuiz()}
            style={{
              backgroundColor: '#F9F67F',
              width: 'auto',
            }}
          >
            Or do you want to restart the quiz
          </StyledButton> */
