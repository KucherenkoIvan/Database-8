import React, { useState } from "react"
import '../forms/style.scss'


const CourierInfo = () =>{

    const [inputValue, setInputValue] = useState({
        id: 0,
        CourierID: 0,
        BirthDate: new Date(),
        Address: '',
        Phone: ''
        
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="courierInfo">
            <label className="formName">CourierInfo</label>
            <div className="block">
                <label className="label">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label">CourierID</label>
                <input onChange={changeHandler} className="input" name="CourierID" />
            </div>

            <div className="block">
                <label className="label">BirthDate</label>
                <input onChange={changeHandler} type="date" className="input" name="BirthDate" />
            </div>
            <div className="block">
                <label className="label">Address</label>
                <input onChange={changeHandler} className="input" name="Address" />
            </div>
            <div className="block">
                <label className="label">Phone</label>
                <input onChange={changeHandler} className="input" name="Phone" />
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default CourierInfo;