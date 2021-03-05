import React, {useState, useContext} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'rsuite';
import './ViewBalance.css';
import { connect } from "react-redux";
import {store} from '../../index';

const API_KEY = "zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr";

export const ViewBalance = () => {

    const [assetBalance, setAssetBalance] = useState(0);
    const [cashBalance, setCashBalance] = useState(0);
    const [accountKey, setAccountKey] = useState(0);

    const token = store.getState().userReducer.accountKey;

    const viewCurrentBalance = async () => {
        try{
            const res = await fetch("https://https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY
                },
                body: JSON.stringify({
                    accountKey: token
                })
            }).then(res => {          
                setAssetBalance(res.assetBalance);
                setCashBalance(res.cashBalance);
                
            });
            console.log('Results: ' + res);      

        } catch(err) {
            console.log(err);
        }
        
    }

    function handleAssetChange(e){
        setAssetBalance(e.target.value);
    }

    function handleCashChange(e){
        setCashBalance(e.target.value);
    }

    return(
        
        <div className="auth-wrapper" style={{ padding: "100px 20px" }} >
            <div className="auth-inner">
                <h2>Welcome Back!</h2>
                <h2>Username </h2>

                <div style={{ padding: "100px 100px" }}>
                    <h4>Your Asset balance | Your Cash balance</h4>
                    <h4>{assetBalance}  | {cashBalance}</h4>
                </div>
                
            </div>
            <button onClick={ viewCurrentBalance() }>
              View Balance          
            </button>

        </div> 
       
    );



}