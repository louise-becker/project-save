import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Background,
  ButtonContainer,
  MainContainer,
  StyledButton,
  StyledHeadline,
  StyledInvisibleLink,
  SignUpOrInWrapper,
} from '../components/Styled';
import ProgressBar from '../components/ProgressLine';
import { quiz } from 'reducers/quiz';

const ResultPage = () => {
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
          </StyledHeadline>
          <SignUpOrInWrapper>
            <ButtonContainer style={{ flexDirection: 'column' }}>
              {' '}
              <h4 style={{ color: 'white' }}>
                Do you want to SAVE this time instead?
              </h4>
              <StyledInvisibleLink to="/categories">
                <StyledButton style={{ backgroundColor: '#F9F67F' }}>
                  Yes!
                </StyledButton>
                {/* I want the button to send the current answer array (with all question text and the answer provided)
              to the backend. HOW? */}
              </StyledInvisibleLink>
              <StyledInvisibleLink to="/">
                <StyledButton
                  onClick={() => restartQuiz()}
                  style={{
                    width: 'auto',
                    fontFamily: 'Amatic SC',
                    fontSize: '30px',
                    color: 'black',
                    marginTop: '100px',
                    backgroundColor: '#7FF9B9',
                  }}
                >
                  Restart the quiz
                </StyledButton>
              </StyledInvisibleLink>
            </ButtonContainer>
          </SignUpOrInWrapper>
        </Background>
      </MainContainer>
    </>
  );
};

export default ResultPage;
