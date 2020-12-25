import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const User = ({ userInfo }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        login: '',
        password: '',
        accessLevel: 'read-only'
    });
    const table = tablePrefabs.User;
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
            {  accessLevels[userInfo.accessLevel] >= table.requiredRights.write &&
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
            }
        </div>
    );
}
const mapStateToProps= (state) => ({
    userInfo: state.userInfo // undefined
})

export default connect(mapStateToProps, null)(User);