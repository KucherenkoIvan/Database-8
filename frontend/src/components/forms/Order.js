import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const Order = ({ userInfo }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        CustomerID : 0,
        EmployeeID : 0,
        OrderDate: new Date()
    });
    const table = tablePrefabs.Order;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="order">
            <label className="formName">Order</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlFor="CustomerID">CustomerID</label>
                <input onChange={changeHandler} className="input" name="CustomerID" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="EmployeeID">EmployeeID</label>
                <input onChange={changeHandler} className="input" name="EmployeeID" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="OrderDate">OrderDate</label>
                <input onChange={changeHandler} type="date" className="input" name="OrderDate" disabled={!canWrite} />
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
    userInfo: state.userInfo // undefined
})

export default connect(mapStateToProps, null)(Order);