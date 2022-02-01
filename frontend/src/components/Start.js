import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import imgMobile from '../assets/Mobile -Background.png';
import imgDesktop from '../assets/Desktop - Background.png';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Josefin Slab', serif;
`;

const Background = styled.div`
  background-image: url(${imgMobile});
  z-index: -1;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    min-width: 100vw;
    background-image: url(${imgDesktop});
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: right;
  font-size: 20px;
  margin: 20px;
  text-decoration: none;
`;

const StyledHeader = styled.h1`
  color: white;
  font-family: 'Amatic SC', cursive;
  font-size: 130px;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: space-between; */
  color: white;
  font-size: 20px;

  text-decoration: none;
  /* .button {
    border-radius: 10%;
    margin: 10px;
  } */
`;

const StyledLinkLogin = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
  padding: 10px;
  margin: 10px;
  /* background-color: #454343;

  width: 70px;
  height: 5 0px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
  padding: 10px;
  margin: 10px;
  background-color: #454343;

  width: 70px;
  height: 5 0px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
  padding: 10px;
  margin: 10px;
  background-color: #454343;
  width: 70px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Start = () => {
  return (
    <MainContainer>
      <Background>
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
      </Background>
    </MainContainer>
  );
};

export default Start;
