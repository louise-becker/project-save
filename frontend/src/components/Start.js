import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: black;
  color: white;
  height: 100 vh;
  .button {
    border-radius: 10%;
    margin: 10px;
  }
`;

const Start = () => {
  return (
    <MainContainer>
      <div>
        <Link to="/login">SIGNUP/SIGNING (To '/login') !</Link>
      </div>
      <h1>Welcome!</h1>
      <h2>Do you want to save TIME, MONEY and/or THE PLANET?</h2>
      <button>
        <Link to="/quiz">To TIME Quiz !</Link>
      </button>
      <button>
        <Link to="/quiz">To MONEY Quiz !</Link>
      </button>
      {/* <button>
        <Link to="/">Save the planet !</Link>
      </button> */}
    </MainContainer>
  );
};

export default Start;
