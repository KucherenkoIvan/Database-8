import React from "react";
import {setOption} from '../../redux/actionCreators';
import {connect} from 'react-redux';
import './index.scss';
import { tablePrefabs } from '../../models/tablePrefabs';

const Header = ({ setOption }) =>{

    return (
        <header className="header">
            <img alt="R" className="logo" src="https://cdn.discordapp.com/attachments/612623022884388864/785109194268999700/i4601546127686-removebg-preview.png"></img>
            <select className="input input_w10" defaultValue="About" onChange={(event) => setOption(event.target.value)}>
                <option value="About">About</option>
                {Object.keys(tablePrefabs).map(key => <option value={key} key={key}>{key}</option>)}
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