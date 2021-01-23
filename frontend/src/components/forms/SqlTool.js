import React, { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { execQuery } from '../../redux/actionCreators';
import '../forms/style.scss';

const Product = ({}) =>{
    const defaultValue = {query: ''};
    const [inputValue, setInputValue] = useState(defaultValue);
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});};
    const dispatch = useDispatch();
    const queryClickHandler = () => {
        console.log(inputValue)
        execQuery(inputValue.query)(dispatch);
    };
    return (
        <div className="product">
            <label className="formName">Sql Toll</label>
            <div className="block">
                <label className="label" htmlFor="Query">Query</label>
                <input className="input" name="query" onChange={changeHandler} value={inputValue.query} />
            </div>
            <div className="block block__button">
                <button onClick={queryClickHandler} className="button button__save">Execute</button>
            </div>
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