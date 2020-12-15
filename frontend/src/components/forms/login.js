import React, { useState } from "react"

const Login = () =>{
    const [inputValue, setInputValue] = useState({
        login: '',
        password: ''
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="login">
            <label className="formName">User</label>
            <div className="block">
                <label className="label">login</label>
                <input onChange={changeHandler} className="input" name="login" />
            </div>
            <div className="block">
                <label className="label">password</label>
                <input onChange={changeHandler} className="input" name="password" />
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Войти</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Login;