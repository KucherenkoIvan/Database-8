import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import { useDataActions } from '../hooks/dataActions.hook';
import '../forms/style.scss';

const Order = ({ userInfo, selectedItem }) =>{
    const { cancelClickHandler, saveClickHandler, deleteClickHandler }= useDataActions();

    const defaultValue = {
        id: 0,
        CustomerID : 0,
        CourierID : 0,
        OrderDate: new Date()
    };

    const [inputValue, setInputValue] = useState(defaultValue);
    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }
    const table = tablePrefabs.Order;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="order">
            <label className="formName">Order</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" value={inputValue.id} />
            </div>
            <div className="block">
                <label className="label" htmlFor="CustomerID">CustomerID</label>
                <input onChange={changeHandler} className="input" name="CustomerID" disabled={!canWrite} value={inputValue.CustomerID} />
            </div>
            <div className="block">
                <label className="label" htmlFor="CourierID">CourierID</label>
                <input onChange={changeHandler} className="input" name="CourierID" disabled={!canWrite} value={inputValue.CourierID} />
            </div>
            <div className="block">
                <label className="label" htmlFor="OrderDate">OrderDate</label>
                <input onChange={changeHandler} type="date" className="input" name="OrderDate" disabled={!canWrite} value={inputValue.OrderDate} />
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

export default connect(mapStateToProps, null)(Order);