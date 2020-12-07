import React from 'react';
import { tablePrefabs } from './tablePrefabs';
import { connect } from 'react-redux';
import './index.scss';

const Main = ({ selectedTable }) => {
    if (selectedTable === 'About') {
        return (
            <main className="main">
                <h2>About Us</h2>
            </main>
        )
    }
    return (
        <main className="main">
            <table className="table">
                <tr>
                    {tablePrefabs[selectedTable].fields.map(field => (
                        <td>{field}</td>
                    ))}
                </tr>
            </table>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedTable: state.option
    }
}

export default connect(mapStateToProps, null)(Main);