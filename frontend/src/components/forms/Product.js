import React, { useState } from "react"

const Product = () =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        Name : '',
        Description : ''
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="product">
            <label className="formName">Product</label>
            <div className="block">
                <label className="label">id</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label">Name</label>
                <input onChange={changeHandler} className="input" name="Name" />
            </div>
            <div className="block">
                <label className="label">Description</label>
                <input onChange={changeHandler} className="input" name="Description" />
            </div>
            <div className="block block__button">
                <button onClick={() => {console.log(inputValue)}} className="button button__save">Сохранить</button>
                <button className="button button__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Product;