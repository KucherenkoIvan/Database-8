import {SET_OPTION} from './actions';

export function setOption(payload) {
    return {
        type: SET_OPTION,
        payload
    }
}