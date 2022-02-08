import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { API_URL } from '../utils/constants';
import user from '../reducers/user';
import {
  BackgroundStart,
  InputWrapper,
  MainContainer,
  SignUpOrInWrapper,
  StyledLinkLogin,
} from './Styled';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('signup');

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    };

    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId));
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
          });
        }
      });
  };

  return (
    <>
      <MainContainer>
        <BackgroundStart>
          <div>
            <StyledLinkLogin to="/">{'<- Back to the Quiz'}</StyledLinkLogin>
          </div>
          <SignUpOrInWrapper>
            <label htmlFor="signup">Signup</label>
            <input
              id="signup"
              type="radio"
              checked={mode === 'signup'}
              onChange={() => setMode('signup')}
            />
            <label htmlFor="signin">Signin</label>
            <input
              id="signin"
              type="radio"
              checked={mode === 'signin'}
              onChange={() => setMode('signin')}
            />
          </SignUpOrInWrapper>
          <InputWrapper>
            <form onSubmit={onFormSubmit}>
              <label htmlFor="username">Username</label>
              <br></br>
              <input
                className="input-field"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br></br>
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                className="input-field"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </InputWrapper>
        </BackgroundStart>
      </MainContainer>
    </>
  );
};

export default Login;
