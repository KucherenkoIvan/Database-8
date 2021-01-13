import React from 'react';
import { tablePrefabs } from '../../models/tablePrefabs';
import { connect } from 'react-redux';
import {setItem} from '../../redux/actionCreators';
import './index.scss';

const Main = ({ selectedTable, data, setItem, userInfo }) => {
    if (selectedTable === 'About' ) {
        if (!userInfo.token) {
            return (
                <main className="main">
                    <h2>You must be signed to use our application</h2>
                </main>
            );
        }
        else return (
            <main className="main">
                <h2>Your data will be displayed here</h2>
            </main>
        );
    }
    const availableFields = tablePrefabs[selectedTable].fields;
    return (
        <main className="main">
            <table className="table">
                <thead>
                    <tr>
                        {availableFields.map(field => (
                            <td key={field}>{field}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.model === selectedTable &&
                        data.rows.map(row => 
                            (<tr key={row.id} id={row.id} onClick={(event) => setItem(data.rows.find(rw => rw.id === Number(event.target.id)))}>{Object.keys(row).map(
                                key => availableFields.includes(key) && (<td key={key} id={row.id}>{row[key]}</td>)
                                )}
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedTable: state.option, data: state.data,
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = {
    setItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);