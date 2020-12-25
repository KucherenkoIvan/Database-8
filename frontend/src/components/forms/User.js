import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const User = ({ userInfo, selectedItem }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        login: '',
        password: '',
        accessLevel: ''
    });

    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }

    const table = tablePrefabs.User;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="user">
            <label className="formName">User</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" value={inputValue.id} />
            </div>
            <div className="block">
                <label className="label" htmlFor="login">login</label>
                <input onChange={changeHandler} className="input" name="login" disabled={!canWrite} value={inputValue.login} />
            </div>
            <div className="block">
                <label className="label" htmlFor="password">password</label>
                <input onChange={changeHandler} className="input" type="password" name="password" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="accessLevel">accessLevel</label>
                <select onChange={changeHandler} className="input" name="accessLevel" disabled={!canWrite} value={inputValue.accessLevel}>
                    <option value="read-only">read-only</option>
                    <option value="read-write">read-write</option>
                    <option value="user-control">user-control</option>
                    <option value="absolute">absolute</option>
                </select>
            </div>
            { canWrite &&
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
            }
        </div>
    );
}
const mapStateToProps= (state) => ({
    userInfo: state.userInfo,
    selectedItem: state.selectedItem,
})

export default connect(mapStateToProps, null)(User);