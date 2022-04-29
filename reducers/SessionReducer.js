import { combineReducers } from 'redux';

import { logInApi } from '../api/ApiConnection';

const INITIAL_STATE = {
    sessionStarted: false,
    userSes: '',
    auth_token: '',
    pedido: [],
    cuenta: 0,
};

const sessionReducer = ( state = INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case 'ADD_FOOD_TO_CART':
            newState = {
                ...state,
                pedido: [...pedido, action.payload],
            };
            return newState;

        case 'LOG_IN':
            const data = logInApi(
                action.payload.user, 
                action.payload.password
            );
            var newState = {
                ...state,
                data_result: data,
            }
            return newState;


        default:
            return state;

    }

};

export default combineReducers({
    session: sessionReducer
});
