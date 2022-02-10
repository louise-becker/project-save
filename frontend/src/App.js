import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import StartPage from './pages/StartPage';
import { QuestionPage } from 'pages/QuestionPage';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import CategoryPage from 'pages/CategoryPage';
import SupplierPage from 'pages/SupplierPage';
import ResultPage from 'pages/ResultPage';
// import Suppliers from 'components/not used/SuppliersCardSlider';
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
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/quiz" exact element={<QuestionPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/categories" exact element={<CategoryPage />} />
          <Route path="/suppliers/" element={<SupplierPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
