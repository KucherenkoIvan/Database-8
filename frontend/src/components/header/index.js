import React from "react";
import {connect} from 'react-redux';
import './index.scss';

const Header = () =>{

    return (
        <header className="header">
            <img alt="R" className="logo" src="https://cdn.discordapp.com/attachments/612623022884388864/785109194268999700/i4601546127686-removebg-preview.png"></img>
            <select className="select" defaultValue="About">
                <option value="About">О нас</option>
                <option value="Customers">Customers</option>
                <option value="Courier">Courier</option>
                <option value="CourierInfo">CourierInfo</option>
                <option value="Products">Products</option>
                <option value="Stocks">Stocks</option>
                <option value="Orders">Orders</option>
                <option value="OrderDetails">OrderDetails</option>
            </select>
            <div className="header__right">
                <button className="button">Настройки</button>
                <button className="button">Выйти</button>
            </div>
        </header>
    );
}

export default connect()(Header);