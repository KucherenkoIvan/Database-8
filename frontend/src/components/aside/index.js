import React from "react"
import Courier from "../forms/Courier"
import CourierInfo from "../forms/CourierInfo"
import Customers from "../forms/Customer"
import Order from "../forms/Order"
import OrderDetails from "../forms/OrderDetails"
import Product from "../forms/Product"
import Stocks from "../forms/Stocks"
import User from "../forms/User"
import './index.scss'


const Aside = () =>{

    return (
        <aside className="aside">
            <User/>
        </aside>
    );
}

export default Aside;