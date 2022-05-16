import {combineReducers} from 'redux';

import {LogInAPI} from '../api/ApiConnection';

const INITIAL_STATE = {
  sessionStarted: false,
  user: {
    token: '',
  },
  pedido: {},
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
      const data = LogInAPI(action.payload.user, action.payload.password);
      newState = {
        sessionStarted: true,
        user: data,
        pedido: state.pedido,
        cuenta: state.cuenta,
      };
      // console.log(data);
      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  session: sessionReducer,
});
