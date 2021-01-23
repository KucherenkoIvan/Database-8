import {combineReducers} from 'redux';
import {APPEND_NOTIFICATION, POP_NOTIFICATION, SET_AUTH_DATA, SET_DATA, SET_ITEM, SET_NOTIFICATION_DATA, SET_OPTION, RESET_ACTIVE_NOTIFICATION, NOTIFICATION_TEST} from './actions';

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

// @example_reducer00

const userInfoReducer = (state = {authorizationStatus: 'non-authorized'}, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: return action.payload
        default: return state;
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

const notificationReducer = (state = { queue: [], wpm: 120, activeNotification: null}, action) => {
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
        case RESET_ACTIVE_NOTIFICATION: return {...state, activeNotification: null};
        case NOTIFICATION_TEST: {
            const prefabs = [
                {
                    title: 'Error', // це заголовок
                    content: 'Error example', // это текст уведомления
                    type: 'error'
                },
                {
                    title: 'Regular',
                    content: 'Notification'
                },
                {
                    title: 'Success',
                    type: 'success',
                    content: 'Success example'
                },
                {
                    title: 'Experimental',
                    type: 'exp',
                    content: 'Experimental notification'
                }
            ];
            return {
                ...state,
                queue: prefabs,
            };
        };
        default: return state;
    }
}


export const rootReducer = combineReducers(
    {
        option: optionReducer,
        data: dataReducer,
        userInfo: userInfoReducer,
        selectedItem: itemReducer,
        notificationInfo: notificationReducer
    });
