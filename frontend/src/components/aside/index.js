import React from "react";
import Courier from "../forms/Courier";
import CourierInfo from "../forms/CourierInfo";
import Customer from "../forms/Customer";
import Login from "../forms/Login";
import Order from "../forms/Order";
import OrderDetails from "../forms/OrderDetails";
import Product from "../forms/Product";
import Stocks from "../forms/Stocks";
import User from "../forms/User";
import { connect } from 'react-redux';
import NotificationController from '../notification';
import './index.scss';

const Aside = ({ selectedTable }) =>{

    let form = '';
    switch (selectedTable) {
        case 'Courier': form = (<Courier/>); break;
        case 'Stocks': form = (<Stocks/>); break;
        case 'User': form = (<User/>); break;
        case 'Customer': form = (<Customer/>); break;
        case 'Product': form = (<Product/>); break;
        case 'Order': form = (<Order/>); break;
        case 'OrderDetails': form = (<OrderDetails/>); break;
        case 'CourierInfo': form = (<CourierInfo/>); break;
        case 'About': form = (<Login/>); break;
        default: break;
    }
    return (
        <aside className="aside">
            { form }
            <NotificationController />
        </aside>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedTable: state.option
    }
}

export default connect(mapStateToProps, null)(Aside);
