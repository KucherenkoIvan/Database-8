import {SET_OPTION, SET_DATA, SET_AUTH_DATA, SET_ITEM, APPEND_NOTIFICATION, POP_NOTIFICATION, SET_NOTIFICATION_DATA, RESET_ACTIVE_NOTIFICATION} from './actions';
import jwt from 'jsonwebtoken';

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

export function checkSavedAuth() {
    return async dispatch => {
        const savedAuth = JSON.parse(window.localStorage.getItem('authentication'));
        if (savedAuth) {
            try {
                if (jwt.verify(savedAuth.token, 'strong secret')) {
                    dispatch({ type: SET_AUTH_DATA, payload: { ...savedAuth, authorizationStatus: 'signed' } })
                }
            }
            catch(e) {
                console.warn('Authorization token expired');
                window.localStorage.removeItem('authentication');
            }
        }
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
            window.localStorage.setItem('authentication', JSON.stringify({token, userID, accessLevel, login}));
            dispatch({ type: SET_AUTH_DATA, payload: { token, userID, accessLevel, login, authorizationStatus: 'signed' } });
        }
        catch (e) {dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'error', errorMessage: "Сервер недоступен"} }) }
    }
}

export function logout() {
    return async dispatch => {
        dispatch({ type: SET_OPTION, payload: 'About' });
        dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'non-authorized' } });
        window.localStorage.removeItem('authentication');
    } 
}

export function createRow(payload) {
    return async dispatch => {
        try {
            const {modelName, modelData, user} = payload;
            const serverResponse = await fetch(
                `/api/model/${modelName}`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({modelData, user})
                });
            const dataObject = await serverResponse.json();
    
            if (dataObject.error) {
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Ошибка', content: dataObject.error.msg, type: 'ERROR' } });
            } else {
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Добавлено', content: 'В базу данных добавлена 1 строка', type: 'SUCCESS' } });
                loadData(payload.modelName)(dispatch);
            }
        }
        catch (e) {dispatch({ type: APPEND_NOTIFICATION, payload:  { title: 'Ошибка', content: e.message, type: 'ERROR' } }) }
    }
}

export function editRow(payload) {
    return async dispatch => {
        try {
            const {modelName, modelData, user} = payload;
            const serverResponse = await fetch(
                `/api/model/${modelName}`, 
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({modelData, user})
                });
            const dataObject = await serverResponse.json();

            if (dataObject.error) {
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Ошибка', content: dataObject.error.msg, type: 'ERROR' } });
            } else {
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Сохранено', content: 'Затронута 1 строка', type: 'SUCCESS' } });
                loadData(payload.modelName)(dispatch);
            }
        }
        catch (e) {dispatch({ type: APPEND_NOTIFICATION, payload:  { title: 'Ошибка', content: e.message, type: 'ERROR' } }) }
    }
}

export function deleteRow(payload) {
    return async dispatch => {
        try {
            const {modelName, id, user} = payload;
            const serverResponse = await fetch(
                `/api/model/delete/${modelName}`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id, user})
                });
            const dataObject = await serverResponse.json();

            if (dataObject.error) {
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Ошибка', content: dataObject.error.msg, type: 'ERROR' } });
            } else {
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Удалено', content: 'Затронута 1 строка', type: 'SUCCESS' } });
                loadData(payload.modelName)(dispatch);
            }
        }
        catch (e) {dispatch({ type: APPEND_NOTIFICATION, payload:  { title: 'Ошибка', content: e.message, type: 'ERROR' } }) }
    }
}

export function appendNotification(payload) {
    return dispatch => dispatch({type: APPEND_NOTIFICATION, payload});
}

export function popNotification(timeout) {
    return dispatch => {
        setTimeout(() => dispatch({type: POP_NOTIFICATION}), timeout);
    }
}

export function setNotificationData(payload) {
    return dispatch => dispatch({type: SET_NOTIFICATION_DATA, payload});
}

export function resetActiveNotification(timeout) {
    console.log({timeout});
    return dispatch => {
        setTimeout(() => dispatch({type: RESET_ACTIVE_NOTIFICATION}), timeout);
    }
}

export function execQuery(payload) {
    return async dispatch => {
        try {
            const serverResponse = await fetch(
                `/api/sql/${payload}`, 
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            const dataObject = await serverResponse.json();
    
            if (dataObject.error) {
                dispatch({ type: SET_DATA, payload: { model: 'Sql', rows: [dataObject.error.msg] }});
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Ошибка', content: dataObject.error.msg, type: 'ERROR' } });
            } else {
                dispatch({ type: SET_DATA, payload: { model: 'Sql', rows: dataObject.rows }});
                dispatch({ type: APPEND_NOTIFICATION, payload: { title: 'Успешно', content: 'Запрос выполнен', type: 'SUCCESS' } });
            }
        }
        catch (e) {dispatch({ type: APPEND_NOTIFICATION, payload:  { title: 'Ошибка', content: e.message, type: 'ERROR' } }) }
    }
}