import React, { useState } from "react";
import { connect } from 'react-redux';
import { accessLevels } from "../../models/accessLevels";
import { tablePrefabs } from "../../models/tablePrefabs";
import '../forms/style.scss';
import { useDataActions } from "../hooks/dataActions.hook";

const Product = ({ userInfo, selectedItem }) =>{

    const { cancelClickHandler, saveClickHandler, deleteClickHandler }= useDataActions();

    const defaultValue = {
        id: 0,
        Name : '',
        Description : ''
    };
    const [inputValue, setInputValue] = useState(defaultValue);
    if (selectedItem && selectedItem.id !== inputValue.id) {
        setInputValue(selectedItem);
    }
    const table = tablePrefabs.Product;
    const canWrite = accessLevels[userInfo.accessLevel] >= table.requiredRights.write;
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});};
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
                <button onClick={() => {saveClickHandler(inputValue)}} className="button button__save">Сохранить</button>
                {selectedItem && (<button onClick={() => {deleteClickHandler(setInputValue, defaultValue)}} className="button button__save">Удалить</button>)}
                <button className="button button__cancel" onClick={() => {cancelClickHandler(setInputValue, defaultValue)}}>Отмена</button>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Product);