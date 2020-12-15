import React, { useState } from "react"

const Stocks = () =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        ProductID: 0,
        Qty: 0
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="stocks">
            <label className="formName">Stocks</label>
            <div className="block">
                <label className="label" htmlfor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlfor="ProductID">ProductID</label>
                <input onChange={changeHandler} className="input" name="ProductID" />
            </div>
            <div className="block">
                <label className="label" htmlfor="Qty">Qty</label>
                <input onChange={changeHandler} className="input" name="Qty" />
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Stocks;