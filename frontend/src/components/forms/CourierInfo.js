import React, { useState } from "react";
import { connect } from 'react-redux';
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
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="courierInfo">
            <label className="formName">CourierInfo</label>
            <div className="block">
                <label className="label" htmlfor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlfor="CourierID">CourierID</label>
                <input onChange={changeHandler} className="input" name="CourierID" />
            </div>

            <div className="block">
                <label className="label" htmlfor="BirthDate">BirthDate</label>
                <input onChange={changeHandler} type="date" className="input" name="BirthDate" />
            </div>
            <div className="block">
                <label className="label" htmlfor="Address">Address</label>
                <input onChange={changeHandler} className="input" name="Address" />
            </div>
            <div className="block">
                <label className="label" htmlfor="Phone">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" />
            </div>
            {userInfo.accessLevel >= table.requiredRights &&
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