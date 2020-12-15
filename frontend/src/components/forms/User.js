import React, { useState } from "react"

const User = () =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        login: '',
        password: '',
        accessLevel: 'read-only'
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="user">
            <label className="formName">User</label>
            <div className="block">
                <label className="label" htmlfor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlfor="login">login</label>
                <input onChange={changeHandler} className="input" name="login" />
            </div>
            <div className="block">
                <label className="label" htmlfor="password">password</label>
                <input onChange={changeHandler} className="input" name="password" />
            </div>
            <div className="block">
                <label className="label" htmlfor="accessLevel">accessLevel</label>
                <select onChange={changeHandler} className="input" name="accessLevel">
                    <option value="read-only">read-only</option>
                    <option value="read-write">read-write</option>
                    <option value="user-control">user-control</option>
                    <option value="absolute">absolute</option>
                </select>
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default User;