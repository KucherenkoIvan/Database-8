import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';


const CourierInfo = ({ userInfo, selectedItem }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        CourierID: 0,
        BirthDate: new Date(),
        Address: '',
        Phone: ''
        
    });
    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }

    const table = tablePrefabs.CourierInfo;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="courierInfo">
            <label className="formName">CourierInfo</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" value={inputValue.id} />
            </div>
            <div className="block">
                <label className="label" htmlFor="CourierID">CourierID</label>
                <input onChange={changeHandler} className="input" name="CourierID" disabled={!canWrite} value={inputValue.CourierID} />
            </div>

            <div className="block">
                <label className="label" htmlFor="BirthDate">BirthDate</label>
                <input onChange={changeHandler} type="date" className="input" name="BirthDate" disabled={!canWrite} value={inputValue.BirthDate} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Address">Address</label>
                <input onChange={changeHandler} className="input" name="Address" disabled={!canWrite} value={inputValue.Address} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Phone">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" disabled={!canWrite} value={inputValue.Phone} />
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

export default connect(mapStateToProps, null)(CourierInfo);