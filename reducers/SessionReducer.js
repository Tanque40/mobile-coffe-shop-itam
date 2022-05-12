import {combineReducers} from 'redux';

import {LogInApi} from '../api/ApiFunctions';

const INITIAL_STATE = {
  sessionStarted: false,
  userSes: '',
  auth_token: '',
  pedido: [],
  cuenta: 0,
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  let newState = {};
  switch (action.type) {
    case 'ADD_FOOD_TO_CART':
      newState = {
        ...state,
        pedido: [...state.pedido, action.payload],
      };
      return newState;

    case 'LOG_IN':
      // const data = LogInApi(action.payload.user, action.payload.password);
      fetch('https://coffeshopitam.herokuapp.com/api/v1/users/sign_in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: action.payload.user,
          password: action.payload.password,
        }),
      })
        .then(data => {
          console.log('wuuu');
          console.log(data);
          newState = {
            data_result: data,
          };
          return data.json();
        })
        .then(json => {
          console.log(json.user.token);
        })
        .catch(err => {
          console.error('buu', err);
        });
      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  session: sessionReducer,
});
