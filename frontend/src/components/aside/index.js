import React from "react"
import Courier from "../forms/Courier"
import CourierInfo from "../forms/CourierInfo"
import Customer from "../forms/Customer"
import Login from "../forms/login"
import Order from "../forms/Order"
import OrderDetails from "../forms/OrderDetails"
import Product from "../forms/Product"
import Stocks from "../forms/Stocks"
import User from "../forms/User"
import { connect } from 'react-redux';
import './index.scss'

const forms = { Courier, Stocks, User, Customer, Product, Order, OrderDetails, CourierInfo, none: () => '' };

const Aside = ({ selectedTable }) =>{

    return (
        <aside className="aside">
            {forms[selectedTable]()}
        </aside>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedTable: state.option === 'About' ? 'none' : state.option
    }
}

export default connect(mapStateToProps, null)(Aside);