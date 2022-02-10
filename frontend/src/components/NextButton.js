import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { ButtonContainer, StyledButton, StyledInvisibleLink } from './Styled';

const NextButton = ({ answers, currentQuestionIndex }) => {
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const questions = useSelector((state) => state.quiz.questions);

  //dispatch next question in the questions array, ie dispatch the redux action "goToNextQuestion" from the quiz reducer.
  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };
  const dispatch = useDispatch();

  if (!quizOver && currentQuestionIndex + 1 === questions.length) {
    return (
      <ButtonContainer>
        <StyledInvisibleLink to="/results">
          <StyledButton
            onClick={() => nextQuestion()}
            style={{
              backgroundColor: '#F9F67F',
              width: 'auto',
            }}
          >
            View Summary
          </StyledButton>
        </StyledInvisibleLink>
      </ButtonContainer>
    );
  }
  return (
    <ButtonContainer>
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
    </ButtonContainer>
  );
};

export default NextButton;
