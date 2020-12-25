import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';


const Courier = ({ userInfo }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        FName: '',
        MName: '',
        LName: '',
        Salary: 0,
        PriorSalary: 0
    });
    const table = tablePrefabs.Courier;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="courier">
            <label className="formName">Courier</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlFor="FName">FName</label>
                <input className="input" name="FName" onChange={changeHandler} disabled={!canWrite}></input>
            </div>
            <div className="block">
                <label className="label" htmlFor="MName">MName</label>
                <input className="input" name="MName" onChange={changeHandler} disabled={!canWrite}></input>
            </div>
            <div className="block">
                <label className="label" htmlFor="LName">LName</label>
                <input className="input" name="LName" onChange={changeHandler} disabled={!canWrite}></input>
            </div>
            <div className="block">
                <label className="label" htmlFor="Salary">Salary</label>
                <input className="input" name="Salary" onChange={changeHandler} disabled={!canWrite}></input>
            </div>
            <div className="block">
                <label className="label" htmlFor="PriorSalary">PriorSalary</label>
                <input className="input" name="PriorSalary" onChange={changeHandler} disabled={!canWrite}></input>
            </div>
            {  canWrite &&
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

export default connect(mapStateToProps, null)(Courier);