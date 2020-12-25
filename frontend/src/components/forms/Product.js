import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const Product = ({ userInfo }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        Name : '',
        Description : ''
    });
    const table = tablePrefabs.Product;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="product">
            <label className="formName">Product</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" />
            </div>
            <div className="block">
                <label className="label" htmlFor="Name">Name</label>
                <input onChange={changeHandler} className="input" name="Name" disabled={!canWrite} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Description">Description</label>
                <input onChange={changeHandler} className="input" name="Description" disabled={!canWrite} />
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
    userInfo: state.userInfo // undefined
})

export default connect(mapStateToProps, null)(Product);