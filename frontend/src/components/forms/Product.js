import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { createRow, setItem } from '../../redux/actionCreators'
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';

const Product = ({ userInfo, createRow, selectedItem, setItem }) =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        Name : '',
        Description : ''
    });
    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }
    const table = tablePrefabs.Product;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});};
    const saveClickHandler = () => {
        if (selectedItem) {
            // update row
        } else {
            createRow({ modelData: inputValue, modelName: 'Product' });
        }
    };
    const cancelClickHandler = () => {
        setItem(null);
    };
    return (
        <div className="product">
            <label className="formName">Product</label>
            <div className="block">
                <label className="label" htmlFor="id">ID</label>
                <input disabled className="input" name="id" value={inputValue.id} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Name">Name</label>
                <input onChange={changeHandler} className="input" name="Name" disabled={!canWrite} value={inputValue.Name} />
            </div>
            <div className="block">
                <label className="label" htmlFor="Description">Description</label>
                <input onChange={changeHandler} className="input" name="Description" disabled={!canWrite} value={inputValue.Description} />
            </div>
            { canWrite &&
            <div className="block block__button">
                <button onClick={saveClickHandler} className="button button__save">Сохранить</button>
                <button className="button button__cancel" onClick={cancelClickHandler}>Отмена</button>
            </div>
            }
        </div>
    );
}
const mapStateToProps= (state) => ({
    userInfo: state.userInfo,
    selectedItem: state.selectedItem,
})

const mapDispatchToProps = {
    createRow,
    setItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);