import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { API_URL } from '../utils/constants';
import saves from '../reducers/saves';

const Main = () => {
  const savesItems = useSelector((state) => state.quiz.answers);
  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };

    fetch(API_URL('saves'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(saves.actions.setItems(data.response));
          dispatch(saves.actions.setError(null));
        } else {
          dispatch(saves.actions.setItems([]));
          dispatch(saves.actions.setError(data.response));
        }
      });
  }, [accessToken, dispatch]);

  return (
    <div>
      <div>
        <Link to="/login">To '/login' !</Link>
      </div>
      <h1>Saved and Protected Saves:</h1>
      {savesItems.map((item) => (
        <div key={item._id}>{item.message}</div>
      ))}
    </div>
  );
};

export default Main;
