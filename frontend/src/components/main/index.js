import React from 'react';
import { tablePrefabs } from './tablePrefabs';
import './index.scss';

const Main = () => {
    const selectedTable = 'Courier'; // Replace when Redux will be done

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

export default Main;