import React, { useState } from "react"

const OrderDetails = () =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        OrderID : 0,
        LineItem : 0,
        ProductID: 0,
        Qty: 0,
        Price: 0,
        TotalPrice: 0
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="orderDetails">
            <label className="formName">OrderDetails</label>
            <div className="block">
                <label className="label" htmlfor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlfor="OrderID">OrderID</label>
                <input onChange={changeHandler} className="input" name="OrderID" />
            </div>
            <div className="block">
                <label className="label" htmlfor="LineItem">LineItem</label>
                <input onChange={changeHandler} className="input" name="LineItem" />
            </div>
            <div className="block">
                <label className="label" htmlfor="ProductID">ProductID</label>
                <input onChange={changeHandler} className="input" name="ProductID" />
            </div>
            <div className="block">
                <label className="label" htmlfor="Qty">Qty</label>
                <input onChange={changeHandler} className="input" name="Qty" />
            </div>
            <div className="block">
                <label className="label" htmlfor="Price">Price</label>
                <input onChange={changeHandler} className="input" name="Price" />
            </div>
            <div className="block">
                <label className="label" htmlfor="TotalPrice">TotalPrice</label>
                <input onChange={changeHandler} className="input" name="TotalPrice" />
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default OrderDetails;