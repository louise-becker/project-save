import React from 'react';
import { useSelector } from 'react-redux';
import {
  Background,
  ButtonContainer,
  MainContainer,
  StyledButton,
  StyledHeadline,
  StyledLink,
  StyledLinkLogin,
  SignUpOrInWrapper,
} from './Styled';

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const total = answers;
  const sum = total.reduce(function (accumulator, currentValue) {
    return accumulator + +currentValue.answer;
  }, 0);

  return (
    <>
      <MainContainer>
        <Background>
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
              <StyledButton style={{ backgroundColor: '#F9F67F' }}>
                Yes!
              </StyledButton>
              {/* I want the button to send the current answer array (with all question text and the answer provided)
              to the backend. HOW? */}
            </ButtonContainer>
            <StyledLinkLogin to="/login">SIGN-UP/IN</StyledLinkLogin>
            <StyledLink to="/">Or do you want to restart the quiz</StyledLink>;
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
          </SignUpOrInWrapper>
        </Background>
      </MainContainer>
    </>
  );
};

export default Summary;
