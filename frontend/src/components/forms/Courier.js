import React, { useState } from "react"
import '../forms/style.scss'

const Courier = () =>{
/*setInputValue({...inputValue, [event.target.name]: event.target.value})*/
    const [inputValue, setInputValue] = useState({
        id: 0,
        FName: '',
        MName: '',
        LName: '',
        Salary: 0,
        PriorSalary: 0
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="courier">
            <label className="formName">Courier</label>
            <div className="block">
                <label className="label" htmlfor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlfor="FName">FName</label>
                <input className="input" name="FName" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label" htmlfor="MName">MName</label>
                <input className="input" name="MName" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label" htmlfor="LName">LName</label>
                <input className="input" name="LName" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label" htmlfor="Salary">Salary</label>
                <input className="input" name="Salary" onChange={changeHandler}></input>
            </div>
            <div className="block">
                <label className="label" htmlfor="PriorSalary">PriorSalary</label>
                <input className="input" name="PriorSalary" onChange={changeHandler}></input>
            </div>

            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Courier;