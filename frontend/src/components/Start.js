import React from 'react';

import styled from 'styled-components/macro';
import {
  BackgroundStart,
  MainContainer,
  StyledLink,
  StyledLinkLogin,
  StyledAnchor,
  StyledHeader,
} from './Styled';

const Start = () => {
  return (
    <MainContainer>
      <BackgroundStart>
        <HeaderContainer>
          <StyledLinkLogin to="/login">SIGN-UP/IN</StyledLinkLogin>
        </HeaderContainer>
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

export default Start;

// --- Styled Components ---

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: right;
  font-size: 20px;
  margin: 20px;
  text-decoration: none;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  font-size: 20px;
  text-decoration: none;
`;
