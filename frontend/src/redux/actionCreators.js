import {SET_TEST, SET_OPTION} from './actions';

export function setTest(payload) {
    return {
        type: SET_TEST,
        payload
    }
}

export function setOption(payload) {
    return {
        type: SET_OPTION,
        payload
    }
}