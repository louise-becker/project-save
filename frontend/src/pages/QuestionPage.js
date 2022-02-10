import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import ProgressLine from '../components/ProgressLine';
import {
  Background,
  ButtonContainer,
  MainContainer,
  StyledButton,
  StyledQuestionHeader,
} from '../components/Styled';
import NextButton from '../components/NextButton';

export const QuestionPage = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const currentQuestionIndex = useSelector(
    (store) => store.quiz.currentQuestionIndex
  );

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

  return (
    <MainContainer>
      <Background>
        <ProgressLine></ProgressLine>
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
        <NextButton
          answers={answers}
          currentQuestionIndex={currentQuestionIndex}
        />
      </Background>
    </MainContainer>
  );
};
