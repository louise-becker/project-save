import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// I thought this was the best progressbat ever, so I copied it with some alterations.

const ProgressLine = () => {
  const questions = useSelector((store) => store.quiz.questions);
  const currentQuestionIndex = useSelector(
    (store) => store.quiz.currentQuestionIndex
  );
  const isQuizOver = useSelector((store) => store.quiz.quizOver);

  return (
    <ProgressLineContainer>
      {questions.map((question, index) => {
        return (
          <ProgressLineWrapper key={question.id}>
            <Dot
              style={{
                backgroundColor:
                  currentQuestionIndex >= index ? '#7FF9B9' : '#f0f0f0',
              }}
            ></Dot>
            <Line
              style={{
                backgroundColor:
                  currentQuestionIndex >= index ? '#7FF9B9' : '#f0f0f0',
              }}
            ></Line>
          </ProgressLineWrapper>
        );
      })}

      <IconContainer
        style={{
          backgroundColor: isQuizOver ? '#7FF9B9' : '#f0f0f0',
        }}
      ></IconContainer>
    </ProgressLineContainer>
  );
};

// ------------------------------Styled component ------------------------------------

const ProgressLineWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressLineContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Dot = styled.div`
  position: relative;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  transition: all 500ms ease-in-out;
  @media (min-width: 668px) and (max-width: 1024px) {
    height: 15px;
    width: 15px;
  }
  @media (min-width: 1025px) {
    height: 20px;
    width: 20px;
  }
`;

const Line = styled.div`
  width: 15px;
  height: 3px;
  display: inline-block;
  transition: all 500ms ease-in-out;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 40px;
  }
  @media (min-width: 1025px) {
    width: 80px;
    height: 6px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  height: 20px;
  width: 20px;

  @media (min-width: 668px) and (max-width: 1024px) {
    height: 30px;
    width: 30px;
    font-size: 30px;
  }
  @media (min-width: 1025px) {
    height: 40px;
    width: 40px;
    font-size: 35px;
  }
`;
export default ProgressLine;
