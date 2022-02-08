import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Background,
  ButtonContainer,
  MainContainer,
  StyledButton,
  StyledHeadline,
  StyledLink,
  StyledInvisibleLink,
  SignUpOrInWrapper,
} from './Styled';
import ProgressBar from './ProgressBar';
import { quiz } from 'reducers/quiz';

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const total = answers;
  const sum = total.reduce(function (accumulator, currentValue) {
    return accumulator + +currentValue.answer;
  }, 0);

  const dispatch = useDispatch();

  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <>
      <MainContainer>
        <Background>
          <ProgressBar></ProgressBar>
          <StyledHeadline style={{ display: 'flex', fontSize: '30px' }}>
            Your spend {sum} hours per week on things.
            {/* 
            <div>
            --- questionId and actual answer 
              {answers.map((answer) => (
                <p key={answer.questionId}>
                  {answer.questionId}.{' '}
                  {answer.answer} 
                </p>
              ))}
            </div> */}
          </StyledHeadline>
          <SignUpOrInWrapper>
            <ButtonContainer>
              {' '}
              <h4 style={{ color: 'white' }}>
                Do you want to see your results again?
              </h4>
              <StyledInvisibleLink to="/login">
                <StyledButton style={{ backgroundColor: '#F9F67F' }}>
                  Yes!
                </StyledButton>
                {/* I want the button to send the current answer array (with all question text and the answer provided)
              to the backend. HOW? */}
              </StyledInvisibleLink>
            </ButtonContainer>
            <StyledLink
              to="/suppliers"
              style={{
                backgroundColor: '#7FF9B9',
                width: 'auto',
                fontFamily: 'Josefin Slab',
                fontSize: '20px',
                color: 'black',
              }}
            >
              Press here if you want to SAVE this time instead?
            </StyledLink>
            {/* <h4 style={{ color: 'white', display: 'block' }}>Or</h4> */}
            <StyledInvisibleLink to="/">
              <StyledButton
                onClick={() => restartQuiz()}
                style={{
                  width: 'auto',
                  fontFamily: 'Amatic SC',
                  fontSize: '30px',
                  color: 'black',
                  marginTop: '60px',
                }}
              >
                Restart the quiz
              </StyledButton>
            </StyledInvisibleLink>
          </SignUpOrInWrapper>
        </Background>
      </MainContainer>
    </>
  );
};

export default Summary;
