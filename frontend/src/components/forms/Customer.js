import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import { useDataActions } from '../hooks/dataActions.hook';
import '../forms/style.scss';

const Customers = ({ userInfo, selectedItem }) =>{
    const { cancelClickHandler, saveClickHandler, deleteClickHandler }= useDataActions();

    const defaultValue = {
        id: 0,
        FName: '',
        MName: '',
        LName: '',
        Address: '',
        City: '',
        Phone: '',
        DateInSystem: new Date()
    };

    const [inputValue, setInputValue] = useState(defaultValue);
    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }
    const table = tablePrefabs.Customer;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    console.warn({userInfo});
    return (
        <div className="customer">
            <label className="formName">Customer</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" value={inputValue.id} />
            </div>
            <div className="block">
                <label className="label" htmlFor="FName">FName</label>
                <input onChange={changeHandler} className="input" name="FName" disabled={!canWrite} value={inputValue.FName} />
            </div>
            <div className="block">
                <label className="label" htmlFor="MName">MName</label>
                <input onChange={changeHandler} className="input" name="MName" disabled={!canWrite} value={inputValue.MName} />
            </div>
            <div className="block">
                <label className="label" htmlFor="LName">LName</label>
                <input onChange={changeHandler} className="input" name="LName" disabled={!canWrite} value={inputValue.LName} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Address">Address</label>
                <input onChange={changeHandler} className="input" name="Address" disabled={!canWrite} value={inputValue.Address} />
            </div>
            <div className="block">
                <label className="label" htmlFor="City">City</label>
                <input onChange={changeHandler} className="input" name="City" disabled={!canWrite} value={inputValue.City} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Phone">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" disabled={!canWrite} value={inputValue.Phone} />
            </div>
            <div className="block">
                <label className="label" htmlFor="DateInSystem">DateInSystem</label>
                <input type="date" disabled onChange={changeHandler} className="input" name="DateInSystem" value={inputValue.DateInSystem} />
            </div>
            { canWrite &&
            <div className="block block__button">
                <button onClick={() => {saveClickHandler(inputValue)}} className="button button__save">Сохранить</button>
                {selectedItem && (<button onClick={() => {deleteClickHandler(setInputValue, defaultValue)}} className="button button__save">Удалить</button>)}
                <button className="button button__cancel" onClick={() => {cancelClickHandler(setInputValue, defaultValue)}}>Отмена</button>
            </div>
            }
        </div>
    );
}
const mapStateToProps= (state) => ({
    userInfo: state.userInfo,
    selectedItem: state.selectedItem,
})


export default connect(mapStateToProps, null)(Customers);