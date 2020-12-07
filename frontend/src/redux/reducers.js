import {combineReducers} from 'redux';
import {SET_OPTION} from './actions';

const optionReducer = (state = 'About', action) => {
    switch (action.type) {
        case SET_OPTION: return action.payload
        default: return state;
    }
}


export const rootReducer = combineReducers({option: optionReducer});