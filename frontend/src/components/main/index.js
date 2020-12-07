import React from 'react';
import { tablePrefabs } from './tablePrefabs';
import { connect } from 'react-redux';
import './index.scss';

const Main = ({ selectedTable, data }) => {
    if (selectedTable === 'About') {
        return (
            <main className="main">
                <h2>About Us</h2>
            </main>
        )
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
                            (<tr key={row.id}>{Object.keys(row).map(
                                key => availableFields.includes(key) && (<td key={key}>{row[key]}</td>)
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
        selectedTable: state.option, data: state.data
    }
}

export default connect(mapStateToProps, null)(Main);