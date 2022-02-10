import React from 'react';

import {
  BackgroundStart,
  MainContainer,
  StyledLink,
  StyledAnchor,
  StyledHeader,
  OptionsContainer,
} from '../components/Styled';

const StartPage = () => {
  return (
    <MainContainer>
      <BackgroundStart>
        <StyledHeader>SAVE</StyledHeader>
        <OptionsContainer>
          <StyledLink to="/quiz">TIME</StyledLink>
          <StyledLink to="/quiz">MONEY</StyledLink>
          <StyledAnchor href="https://www.wwf.org.uk/thingsyoucando">
            PLANET
          </StyledAnchor>
        </OptionsContainer>
      </BackgroundStart>
    </MainContainer>
  );
};

export default StartPage;
