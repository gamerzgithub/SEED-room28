import React, {useContext, useState} from 'react';
import { Navbar, Nav, Dropdown, Icon, Button } from 'rsuite';
// import UserContext from '../../UserContext';
// import logo from '../../assets/dbs.png';
import './BuyBar.css';
import { useHistory } from "react-router-dom";
import {store} from '../../index';

export const BuyBar = () => {
    const [value, setValue] = useState();
    var accountKey = "b4c39a64-7369-4784-bdbf-57eb2f7b2213";

    const handleSubmit = async() =>{
        var body = {
           "accountKey": "b4c39a64-7369-4784-bdbf-57eb2f7b2213",
            "orderType" : "BUY",
            "assetAmount" : value
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

            })
            .catch(e => {
                console.log(e);
            });
    };

    const history = useHistory();
    

    return(
        <inline className = "buybar">
            <label className = "buy-text" htmlFor="dropdown">Buy</label>
            <select className = "dropdown" name="dropdown" id="dropdown">
                    <option value="TTK">TTK</option>
            </select>
            <label className = 'with-text' htmlFor="formValue">With</label>
        <text className = "value-box" controlId="formValue" input type="" placeholder="1.00" name="value"  required onChange={value => setValue(value)} />
        <button className ="submit-button" variant="primary" type="button" onClick={handleSubmit}>Buy</button>
        </inline>
    )
}