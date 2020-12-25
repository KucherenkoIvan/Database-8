import React from "react";
import {setOption, logout} from '../../redux/actionCreators';
import {connect} from 'react-redux';
import './index.scss';
import { tablePrefabs } from '../../models/tablePrefabs';
import { accessLevels } from "../../models/accessLevels";

const Header = ({ setOption, userInfo, logout }) =>{

    return (
        <header className="header">
            <img alt="R" className="logo" src="https://cdn.discordapp.com/attachments/612623022884388864/785109194268999700/i4601546127686-removebg-preview.png"></img>
            <select className="input input_w10" defaultValue="About" onChange={(event) => setOption(event.target.value)}>
                <option value="About">About</option>

                {userInfo.authorizationStatus !== 'non-authorized' && 
                Object.keys(tablePrefabs).map(key => 
                    tablePrefabs[key].requiredRights.read <= accessLevels[userInfo.accessLevel] &&
                    <option value={key} key={key}>{key}</option>
                )}

            </select>
            <div className="header__right">
                <button className="button">Настройки</button>
                <button className="button" onClick={() => logout()}>Выйти</button>
            </div>
        </header>
    );
}

const mapDispatchToProps = {
    setOption,
    logout,
}
const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);