import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import {login, appendNotification, checkSavedAuth} from '../../redux/actionCreators';

const Login = ({ login, userInfo, appendNotification, checkSavedAuth }) =>{
    const [inputValue, setInputValue] = useState({
        login: '',
        password: ''
    });
    useEffect(
        () => {        
            if (userInfo?.errorMessage) {
                console.log('test')
                appendNotification({
                    type: 'ERROR',
                    title: 'Ошибка авторизации',
                    content: userInfo.errorMessage,
                });
            }
        },
        [userInfo?.errorMessage]
    )
    useEffect(() => {
        checkSavedAuth();
    }, [])
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});};
    if (!userInfo.token) {
        return (
            <div className="login">
                <label className="formName">Sign in</label>
                <div className="block">
                    <label className="label" htmlFor="login">login</label>
                    <input onChange={changeHandler} className="input" name="login" />
                </div>
                <div className="block">
                    <label className="label" htmlFor="password">password</label>
                    <input type="password" onChange={changeHandler} className="input" name="password" />
                </div>
                <div className="block block__button">
                    <button onClick={() => {login(inputValue); console.log(inputValue)}} className="button button__save">Войти</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="login">
                <label className="formName">You signed as <u>{userInfo.login}</u></label>
            </div>
        )
    }
}

const mapDispatchToProps = {
    login,
    appendNotification,
    checkSavedAuth,
};

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);