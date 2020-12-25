import {combineReducers} from 'redux';
import {SET_AUTH_DATA, SET_DATA, SET_ITEM, SET_OPTION} from './actions';

const optionReducer = (state = 'About', action) => {
    switch (action.type) {
        case SET_OPTION: return action.payload
        default: return state;
    }
}

const dataReducer = (state = {model: '', rows: []}, action) => {
    switch (action.type) {
        case SET_DATA: return action.payload
        default: return state
    }
}

const userInfoReducer = (state = {authorizationStatus: 'non-authorized'}, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: return action.payload
        default: return state
    }
}

const itemReducer = (state = null, action) => {
    switch (action.type) {
        case SET_ITEM: {
            return action.payload;
        }
        default: return state;
    }
}

export const rootReducer = combineReducers({option: optionReducer, data: dataReducer, userInfo: userInfoReducer, selectedItem: itemReducer});