import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const OrderDetails = ({ userInfo, selectedItem }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        OrderID : 0,
        LineItem : 0,
        ProductID: 0,
        Qty: 0,
        Price: 0,
        TotalPrice: 0
    });
    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }
    const table = tablePrefabs.OrderDetails;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="orderDetails">
            <label className="formName">OrderDetails</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" value={inputValue.id} />
            </div>
            <div className="block">
                <label className="label" htmlFor="OrderID">OrderID</label>
                <input onChange={changeHandler} className="input" name="OrderID" disabled={!canWrite} value={inputValue.OrderID} />
            </div>
            <div className="block">
                <label className="label" htmlFor="LineItem">LineItem</label>
                <input onChange={changeHandler} className="input" name="LineItem" disabled={!canWrite} value={inputValue.LineItem} />
            </div>
            <div className="block">
                <label className="label" htmlFor="ProductID">ProductID</label>
                <input onChange={changeHandler} className="input" name="ProductID" disabled={!canWrite} value={inputValue.LineItem} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Qty">Qty</label>
                <input onChange={changeHandler} className="input" name="Qty" disabled={!canWrite} value={inputValue.Qty} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Price">Price</label>
                <input onChange={changeHandler} className="input" name="Price" disabled={!canWrite} value={inputValue.Price} />
            </div>
            <div className="block">
                <label className="label" htmlFor="TotalPrice">TotalPrice</label>
                <input onChange={changeHandler} className="input" name="TotalPrice" disabled={!canWrite} value={inputValue.TotalPrice} />
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

export default connect(mapStateToProps, null)(OrderDetails);