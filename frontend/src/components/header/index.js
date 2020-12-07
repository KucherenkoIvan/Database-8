import React from "react";
import {setOption} from '../../redux/actionCreators';
import {connect} from 'react-redux';
import './index.scss';

const Header = ({ setOption }) =>{

    return (
        <header className="header">
            <img alt="R" className="logo" src="https://cdn.discordapp.com/attachments/612623022884388864/785109194268999700/i4601546127686-removebg-preview.png"></img>
            <select className="select" defaultValue="About" onChange={(event) => setOption(event.target.value)}>
                <option value="About">О нас</option>
                <option value="Customer">Customers</option>
                <option value="Courier">Courier</option>
                <option value="CourierInfo">CourierInfo</option>
                <option value="Product">Products</option>
                <option value="Stocks">Stocks</option>
                <option value="Order">Orders</option>
                <option value="OrderDetails">OrderDetails</option>
            </select>
            <div className="header__right">
                <button className="button">Настройки</button>
                <button className="button">Выйти</button>
            </div>
        </header>
    );
}

const mapDispatchToProps = {
    setOption
}

export default connect(null, mapDispatchToProps)(Header);