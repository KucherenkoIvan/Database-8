import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';


const CourierInfo = ({ userInfo }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        CourierID: 0,
        BirthDate: new Date(),
        Address: '',
        Phone: ''
        
    });
    const table = tablePrefabs.CourierInfo;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="courierInfo">
            <label className="formName">CourierInfo</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlFor="CourierID">CourierID</label>
                <input onChange={changeHandler} className="input" name="CourierID" disabled={!canWrite} />
            </div>

            <div className="block">
                <label className="label" htmlFor="BirthDate">BirthDate</label>
                <input onChange={changeHandler} type="date" className="input" name="BirthDate" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Address">Address</label>
                <input onChange={changeHandler} className="input" name="Address" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Phone">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" disabled={!canWrite} />
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

export default connect(mapStateToProps, null)(CourierInfo);