import React, { useState } from "react"



const CourierInfo = () =>{
/*setInputValue({...inputValue, [event.target.name]: event.target.value})*/
    const [inputValue, setInputValue] = useState({
        id: 0,
        FName: "",
        MName: "",
        LName: "",
        Salary: 0,
        PriorSalary: 0
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="courierInfo">
            <label className="formName">CourierInfo</label>
            <div className="block">
                <label className="label">ID</label>
                <input onChange={changeHandler} className="input" name="id" />
            </div>
            <div className="block">
                <label className="label">FName</label>
                <input className="input" name="FName" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label">MName</label>
                <input className="input" name="MName" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label">LName</label>
                <input className="input" name="LName" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label">Salary</label>
                <input className="input" name="Salary" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label">PriorSalary</label>
                <input className="input" name="PriorSalary" onChange={changeHandler}></input>
            </div>

            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default CourierInfo;