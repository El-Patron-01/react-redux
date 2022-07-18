import React from "react";
import './App.css';
import {useDispatch, useSelector} from 'react-redux'

function App () {
    const dispatch = useDispatch()

    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch({type: 'ADD_CUSTOMER', payload: customer})
    }

    const deleteCustomer = (customer) => {
        dispatch({type: 'DELETE_CUSTOMER', payload: customer.id})
    }
    
    return (
        <div className="app">
            <div style={{fontSize:'3rem', marginBottom: 10}}>{cash}</div>
            <div>
                <a 
                    className="waves-effect waves-light btn button"
                    href="/"
                    onClick={() => addCash(5)}
                    >
                    Put money
                </a>
                <a 
                    className="waves-effect waves-light btn button"
                    href="/"
                    onClick={() => getCash(Number(prompt()))}
                    >
                    Get money
                </a>
                <a 
                    className="waves-effect waves-light btn button"
                    href="/"
                    onClick={() => addCustomer(prompt())}
                    >
                    Add customer
                </a>
                <a 
                    className="waves-effect waves-light btn button"
                    href="/"
                    onClick={() => deleteCustomer()}
                    >
                    Delete customer
                </a>
            </div>
            {customers.length > 0 ? 
            <div>
                {customers.map(customer => 
                    <div onClick={deleteCustomer()} style={{fontSize: '2rem', marginTop:20}}>{customer.name}</div>
                )}
            </div> :
            <div style={{fontSize: '2rem', marginTop:20}}>
                No clients!
            </div>}
        </div>
    )
}

export default App