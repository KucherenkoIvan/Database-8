import {SET_OPTION, SET_DATA} from './actions';

export function setOption(payload) {
    return dispatch => {
        if (payload !== 'About') {
            dispatch(loadData(payload))
        }
        dispatch({ type: SET_OPTION, payload});
    } 
}

export function loadData(payload) {
    return async dispatch => {
        const serverResponse = await fetch('/api/model/' + payload);
        const rows = await serverResponse.json();
        console.log(rows)
        dispatch({ type: SET_DATA, payload: { model: payload, rows}})
    } 
}