import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { useDataActions } from "../hooks/dataActions.hook";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const Stocks = ({ userInfo, selectedItem }) =>{
    const { cancelClickHandler, saveClickHandler, deleteClickHandler }= useDataActions();
    const defaultValue = {
        id: 0,
        ProductID: 0,
        Qty: 0
    };
    const [inputValue, setInputValue] = useState(defaultValue);
    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }
    const table = tablePrefabs.Stocks;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="stocks">
            <label className="formName">Stocks</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" value={inputValue.id} />
            </div>
            <div className="block">
                <label className="label" htmlFor="ProductID">ProductID</label>
                <input onChange={changeHandler} className="input" name="ProductID" disabled={!canWrite} value={inputValue.ProductID} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Qty">Qty</label>
                <input onChange={changeHandler} className="input" name="Qty" disabled={!canWrite} value={inputValue.Qty} />
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


export default connect(mapStateToProps, null)(Stocks);