import React, { useState } from "react";
import { connect } from 'react-redux';
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
    const table = tablePrefabs.Customers;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="customers">
            <label className="formName">Customers</label>
            <div className="block">
                <label className="label" htmlfor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlfor="FName">FName</label>
                <input onChange={changeHandler} className="input" name="FName" />
            </div>
            <div className="block">
                <label className="label" htmlfor="MName">MName</label>
                <input onChange={changeHandler} className="input" name="MName" />
            </div>
            <div className="block">
                <label className="label" htmlfor="LName">LName</label>
                <input onChange={changeHandler} className="input" name="LName" />
            </div>
            <div className="block">
                <label className="label" htmlfor="Address">Address</label>
                <input onChange={changeHandler} className="input" name="Address" />
            </div>
            <div className="block">
                <label className="label" htmlfor="City">City</label>
                <input onChange={changeHandler} className="input" name="City" />
            </div>
            <div className="block">
                <label className="label" htmlfor="Phone">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" />
            </div>
            <div className="block">
                <label className="label" htmlfor="DateInSystem">DateInSystem</label>
                <input type="date" disabled onChange={changeHandler} className="input" name="DateInSystem" />
            </div>
            {   userInfo.accessLevel >= table.requiredRights &&
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