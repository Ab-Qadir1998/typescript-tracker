import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const AddTransaction = () => {
    return (
        <div>
            <h3>Add Transaction</h3>

            <form className="add-transaction" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Expense Title" className="input"/>
                <TextField id="standard-basic" label="Expense Amount" className="input"/>
                <Button variant="contained" color="primary">
                    Add Transaction
                </Button>
            </form>
        </div>
    )
}

export default AddTransaction
