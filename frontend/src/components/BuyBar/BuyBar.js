import React, {useCallback, useContext, useState} from 'react';
import { Navbar, Nav, Dropdown, Icon, Button } from 'rsuite';
// import UserContext from '../../UserContext';
// import logo from '../../assets/dbs.png';
import './BuyBar.css';
import { useHistory } from "react-router-dom";
import {store} from '../../index';
import { connect } from "react-redux";
import * as actions from '../../actions';

const mapStatetoProps = (state) => {
    return state;
}

const mapDispatchtoProps = (dispatch) => {
    return {
        submitBuy: async (token, val) => {
            const fields = {
                token: token,
                value: val,
                action :"BUY"
            }
            return await dispatch(actions.thunkBuySell(fields));
        }
    }

}

const BuyBar = ({submitBuy}) => {
    const [value, setValue] = useState();
    const token = "b4c39a64-7369-4784-bdbf-57eb2f7b2213";
    //const [cashBalance, setCashBalance] = useState(0);
    //const [accountKey, setAccountKey] = useState(0);
    //const token = store.getState().userReducer.accountKey

    const handleSubmit = async() =>{
        console.log(value);
        const result = await submitBuy(token, parseFloat(value));
    }

    

/*     const handleSubmit = async() =>{
        var body = {
           "accountKey": token,
            "orderType" : "BUY",
            "assetAmount" : parseFloat(value)
        }
        fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr'
            },
            body: JSON.stringify(body)
          }).then(response => response.json())
            .then(result => {
                console.log(result)
                localStorage.setItem("assetBalance", result.assetBalance);
                localStorage.setItem("cashBalance", result.cashBalance);
                setCashBalance(result.cashBalance);
            })
            .catch(e => {
                console.log(e);
            });
    }; */
    

    return(
        <div className= "wrapper">
            <div className = "buybar">
            <label className = "buy-text" htmlFor="dropdown">Buy</label>
                <select className = "dropdown" name="dropdown" id="dropdown">
                        <option value="TTK">TTK</option>
                </select>
            <label className = 'with-text' htmlFor="formValue">Units:</label>
            <input className = "value-box" type="number" step="0.01" name="value" onChange={event => setValue(event.target.value)} />
            <button className ="submit-button" onClick={handleSubmit}>Buy</button>
            </div>
        </div>
    )
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BuyBar);
