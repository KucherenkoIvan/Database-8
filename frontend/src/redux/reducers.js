import {combineReducers} from 'redux';
import {APPEND_NOTIFICATION, POP_NOTIFICATION, SET_AUTH_DATA, SET_DATA, SET_ITEM, SET_NOTIFICATION_DATA, SET_OPTION, SET_SHOWING_STATE, TOGGLE_NOTIFICATION_STATUS} from './actions';

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

const notificationReducer = (state = { queue: [], wpm: 120, isShowing: false, activeNotification: null}, action) => {
    switch (action.type) {
        case APPEND_NOTIFICATION: {
            const queue = [...state.queue];
            queue.push(action.payload);
            return {...state, queue};
        }
        case POP_NOTIFICATION: {
            const queue = [...state.queue];
            const activeNotification = queue.shift();
            return {...state, queue, activeNotification};
        }
        case SET_NOTIFICATION_DATA: return {...state, ...action.payload};
        case SET_SHOWING_STATE: return {...state, isShowing: action.payload}
        default: return state;
    }
}

export const rootReducer = combineReducers({option: optionReducer, data: dataReducer, userInfo: userInfoReducer, selectedItem: itemReducer, notificationInfo: notificationReducer});