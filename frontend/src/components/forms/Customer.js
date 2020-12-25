import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const Customers = ({ userInfo }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        FName: '',
        MName: '',
        LName: '',
        Address: '',
        City: '',
        Phone: '',
        DateInSystem: new Date()
    });
    const table = tablePrefabs.Customer;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    console.warn({userInfo});
    return (
        <div className="customers">
            <label className="formName">Customers</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlFor="FName">FName</label>
                <input onChange={changeHandler} className="input" name="FName" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="MName">MName</label>
                <input onChange={changeHandler} className="input" name="MName" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="LName">LName</label>
                <input onChange={changeHandler} className="input" name="LName" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Address">Address</label>
                <input onChange={changeHandler} className="input" name="Address" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="City">City</label>
                <input onChange={changeHandler} className="input" name="City" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Phone">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="DateInSystem">DateInSystem</label>
                <input type="date" disabled onChange={changeHandler} className="input" name="DateInSystem" />
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


export default connect(mapStateToProps, null)(Customers);