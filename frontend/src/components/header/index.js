import React from "react";
import {setOption, logout} from '../../redux/actionCreators';
import {connect} from 'react-redux';
import './index.scss';
import { tablePrefabs } from '../../models/tablePrefabs';
import { accessLevels } from "../../models/accessLevels";

// @tip_redux03_01
// Внимательно посмотри в пропсы компонента. Тут мы принимаем всё, что передавали в map-методах. Если не принять - работать не будет [(c) Ислам]
const Header = ({ setOption, userInfo, logout }) =>{ // В нашем случае userInfo - объект из состояния (если оно поменяется, то и тут поменяется и компонент перерендерится),
                                                     // а setOption и logout - dispatch-функции для изменения состояния. Говорят, чтобы функции работали, их нужно вызывать
    // Вот и всё. В принципе, ты это уже делал, так что разберешься
    // [ты пришел из @tip_redux03 в reducers.js или в index.scss (но это не точно)]
    return (
        <header className="header">
            <img alt="R" className="logo" src="https://cdn.discordapp.com/attachments/612623022884388864/785109194268999700/i4601546127686-removebg-preview.png"></img>
            <select className="input input_w10" defaultValue="About" onChange={(event) => setOption(event.target.value)}>
                <option value="About">About</option>

                {userInfo.token && 
                Object.keys(tablePrefabs).map(key => 
                    tablePrefabs[key].requiredRights.read <= accessLevels[userInfo.accessLevel] &&
                    <option value={key} key={key}>{key}</option>
                )}

            </select>
            <div className="header__right">
            {   userInfo.token &&
                <button className="button" onClick={() => logout()}>Выйти</button>
            }
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


// @tip_redux03
// Тут всё элегантно: 
// Имеется функция connect, которая принимает два метода и компонент
// Методы - mapStateToProps - определяет, какие значения из состояния взять и передать в компонент в качестве пропсов
// mapDispatchToProps - в нашем случае вообще объект. Определяет, какие варианты ебануть dispatch будут доступны в компоненте
// теперь смотри в @tip_redux03_01
export default connect(mapStateToProps, mapDispatchToProps)(Header);