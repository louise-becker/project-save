import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import Start from './components/Start';
import { CurrentQuestion } from 'components/CurrentQuestion';
import Main from './components/Main';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Results from 'components/Results';
// import Suppliers from 'components/Suppliers';

import user from './reducers/user';
import saves from './reducers/saves';
import { quiz } from 'reducers/quiz';

const reducer = combineReducers({
  user: user.reducer,
  saves: saves.reducer,
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/quiz" exact element={<CurrentQuestion />} />
          <Route path="/main" element={<Main />} />
          <Route path="/results" element={<Results />} />
          {/* <Route path="/suppliers" element={<Suppliers />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
