import {combineReducers} from 'redux';
import {SET_TEST, SET_OPTION} from './actions';

const testReducer = (state = {obj: { }}, action) => {
    switch(action.type) {
        case SET_TEST: return {...state, ...action.payload};
        default: return state;
    }
}

const optionReducer = (state = 'about_us', action) => {
    switch (action.type) {
        case SET_OPTION: return {...state, option: action.payload}
        default: return state;
    }
}


export const rootReducer = combineReducers({test: testReducer, option: optionReducer});