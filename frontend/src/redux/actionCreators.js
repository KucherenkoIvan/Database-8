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

// @example_reducer02
// Ты только не пугайся, ок?
// Да, тут много кода, но я все объясню
// Пошли в код функции
export function login(payload) {
    // Для начала проясним, что именно эту функцию ты будешь вызывать в компоненте, подключая ее с помощью mapDispatchToProps, но всему свое время =)
    return async dispatch => {
        // Ага, функция, которая возвращает функцию. Кажется, кто-то обещал, что будет просто? И кто вообще такой этот ваш dispatch?
        // Всё ок, это самый сложный момент, но ты осилишь его, я знаю
        // Не будем вдаваться в подробности про замыкания [Тебе, на самом деле, лучше бы вдаться. На собеседованиях спрашивают всегда. Да и для понимания полезно]
        // Скажу только, что так надо, а ты не поверишь мне на слово и сам все загуглишь и поймешь. [Кого я обманываю?(]
        // На данном этапе ты можешь просто принять такую структуру как данность и делать так же
        // Теперь про dispatch
        // Диспатч это функция, которая говорит редаксу, что пришло время обновить состояние
        // Именно после вызова функции диспатч вызывается редьюсер и состояние изменяется
        // Так стоп. Но ведь мы тут как раз для изменения состояния объект собираем. Зачем нам диспатч?

        // А вот например. Для работы с асинхронным кодом
        dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'pending' } }) // Тут мы говорим, что у нас началась авторизация пользователя. И посмотри на аргументы у dispatch. Да, да, там как раз объект action 
        try {
            const {login, password} = payload; // Кстати говоря, payload тоже не берется из воздуха. Мы передали ее в эту функцию из компонента
            const serverResponse = await fetch( // Тут вот всякие запросики, это нам не оч интересно
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
            const {token, userID, accessLevel, error} = await serverResponse.json(); // Это мы тоже скипнем
            if (error) {
                // Если в коде выше была ошибка, сообщение о ней окажется записанным в состоянии. Спасибо, dispatch
                return dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'error', errorMessage: error.msg} })
            }
            console.log(token, userID, accessLevel)
            window.localStorage.setItem('authentication', JSON.stringify({token, userID, accessLevel, login}));
            dispatch({ type: SET_AUTH_DATA, payload: { token, userID, accessLevel, login, authorizationStatus: 'signed' } }); // А вот тут мы определяем действия при успешной авторизации
        }
        catch (e) {dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'error', errorMessage: "Сервер недоступен"} }) } // ))0)0))0))0))0))
    }
}
// Так вот, функции вроде той, что описана выше называются action creators. Да, потому что они нужны для создания объектов action
// В этом файле есть примеры попроще, полистай
// [мы пришли из reducers.js @example_reducer02]

export function logout() {
    return async dispatch => {
        dispatch({ type: SET_OPTION, payload: 'About' });
        dispatch({ type: SET_AUTH_DATA, payload: { authorizationStatus: 'non-authorized' } });
        window.localStorage.removeItem('authentication');
    } 
}

// @todo_action-creator00
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