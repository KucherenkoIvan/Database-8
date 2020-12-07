import React, { useState } from "react"

const Customers = () =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        FName: '',
        MName: '',
        LName: '',
        Address: '',
        City: '',
        Phone: '',
        DateInSystem: new Date()
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="customers">
            <label className="formName">Customers</label>
            <div className="block">
                <label className="label">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label">FName</label>
                <input onChange={changeHandler} className="input" name="FName" />
            </div>
            <div className="block">
                <label className="label">MName</label>
                <input onChange={changeHandler} className="input" name="MName" />
            </div>
            <div className="block">
                <label className="label">LName</label>
                <input onChange={changeHandler} className="input" name="LName" />
            </div>
            <div className="block">
                <label className="label">Address</label>
                <input onChange={changeHandler} className="input" name="Address" />
            </div>
            <div className="block">
                <label className="label">City</label>
                <input onChange={changeHandler} className="input" name="City" />
            </div>
            <div className="block">
                <label className="label">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" />
            </div>
            <div className="block">
                <label className="label">DateInSystem</label>
                <input type="date" disabled onChange={changeHandler} className="input" name="DateInSystem" />
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Customers;