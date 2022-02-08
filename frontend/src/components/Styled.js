import styled from 'styled-components';
import imgMobile from '../assets/MobileBG.png';
import imgDesktop from '../assets/DesktopBG.png';
import { Link } from 'react-router-dom';

// --- Only Styled Components ---

export const Background = styled.div`
  background-color: #7f82f9;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (min-width: 768px) {
    min-width: 100vw;
  }
`;

export const BackgroundStart = styled.div`
  background-image: url(${imgMobile});
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (min-width: 768px) {
    min-width: 100vw;
    background-image: url(${imgDesktop});
  }
`;

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7f82f9;
`;

export const ButtonContainer = styled.div`
  margin: 0;
  padding: 0;
  /* width: 100vw;
  height: 100vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
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
  background-color: #f97fbf;
  width: 110px;
  height: 5 0px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: 'Amatic SC', cursive;
  font-size: 50px;
`;

export const StyledButton = styled.button`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:checked  {
    text-decoration: none;
    color: white;
  }
  padding: 10px;
  margin: 10px;
  background-color: #f97fbf;
  width: 70px;
  height: 5 0px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Amatic SC';
  font-size: 50px;
`;

export const StyledAnchor = styled.a`
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
  background-color: #f97fbf;
  width: 110px;
  height: 5 0px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: 'Amatic SC', cursive;
  font-size: 50px;
`;

export const StyledHeader = styled.h1`
  color: white;
  font-family: 'Amatic SC', cursive;
  font-size: 170px;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const StyledQuestionHeader = styled.h1`
  color: black;
  font-family: 'Josefin Slab', serif;
  font-size: 25px;
  font-weight: 100;
  transform: rotate(5deg);
  padding: 10px;
  margin: 30px;
  background-color: #7ff9b9;
  /* width: 70px; */
  /* height: 5 0px; */
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledHeadline = styled.h1`
  color: black;
  font-family: 'Josefin Slab', serif;
  font-size: 25px;
  font-weight: 100;
  transform: rotate(-5deg);
  padding: 10px;
  margin: 30px;
  background-color: #f97fbf;
  /* width: 70px; */
  /* height: 5 0px; */
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLinkLogin = styled(Link)`
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
  font-family: 'Josefin Slab', serif;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  max-width: 500px;
  font-family: 'Josefin Slab', serif;
  font-size: 20px;
  margin-top: 20px;
  .submit-button {
    width: 200px;
    padding: 1em;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #f97fbf;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px 100px 10px 100px;
    font-family: 'Arial ';
    font-family: 'Amatic SC', cursive;
    /* @media (min-width: 768px) {
      width: 20vw;
      margin: 0 auto;
    } */
  }
  .input-field {
    background: #fff;
    color: $input-text-color;
    font: inherit;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 15px;
    outline: 0;
    padding: 15px 12px;
    margin: 20px;
  }
`;

export const SignUpOrInWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  margin-top: 30px;
  max-width: 500px;
  font-family: 'Josefin Slab', serif;
  font-size: 20px;
  /* input[type='radio'] {
    
  } */
`;
