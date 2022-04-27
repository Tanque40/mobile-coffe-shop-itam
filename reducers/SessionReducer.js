import { combineReducers } from 'redux';

const INITIAL_STATE = {
    sessionStarted: false,
    user: '',
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

        default:
            return state;

    }

};

export default combineReducers({
    session: sessionReducer
});
