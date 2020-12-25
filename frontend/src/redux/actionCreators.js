import {SET_OPTION, SET_DATA, SET_AUTH_DATA, SET_ITEM} from './actions';

export function setOption(payload) {
    return dispatch => {
        if (payload !== 'About') {
            dispatch(loadData(payload))
        }
        dispatch({ type: SET_OPTION, payload});
    } 
}

export function setItem(payload) {
    return dispatch => {
        dispatch({ type: SET_ITEM, payload});
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

export function login(payload) {
    return async dispatch => {
        dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'pending' } })
        try {
            const {login, password} = payload;
            const serverResponse = await fetch(
                '/api/auth/login', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        login,
                        password,
                    })
                });
            const {token, userID, accessLevel, error} = await serverResponse.json();
            if (error) {
                return dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'error', errorMessage: error.msg} })
            }
            console.log(token, userID, accessLevel)
            dispatch({ type: SET_AUTH_DATA, payload: { token, userID, accessLevel, login, authorizationStatus: 'signed' } })
        }
        catch (e) {dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'error', errorMessage: "Никто:\nАбсолютно никто:\nСервер: Я упал((9(9(("} }) }
    } 
}

export function logout() {
    return async dispatch => {
        dispatch({ type: SET_OPTION, payload: 'About' });
        dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'non-authorized' } })
    } 
}