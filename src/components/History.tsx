import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const History = () => {
    return (
        <div>
            <h3>History</h3>
            <ul className="history">
                <li>
                    <p>$0.00</p>
                    <Button variant="contained" color="secondary">
                        X
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default History
