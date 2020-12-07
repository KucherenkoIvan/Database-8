import React, { useState } from "react"

const Order = () =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        CustomerID : 0,
        EmployeeID : 0,
        OrderDate: new Date()
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="order">
            <label className="formName">Order</label>
            <div className="block">
                <label className="label">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label">CustomerID</label>
                <input onChange={changeHandler} className="input" name="CustomerID" />
            </div>
            <div className="block">
                <label className="label">EmployeeID</label>
                <input onChange={changeHandler} className="input" name="EmployeeID" />
            </div>
            <div className="block">
                <label className="label">OrderDate</label>
                <input onChange={changeHandler} type="date" className="input" name="OrderDate" />
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Order;