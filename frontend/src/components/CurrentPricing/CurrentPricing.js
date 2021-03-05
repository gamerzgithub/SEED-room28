import React, { useState, useEffect } from 'react';
import {store} from '../../index';
import tokenIcon from '../../assets/token.png';
import moment from 'moment';

 

//import './CurrentPricing.css';




export const CurrentPricing = () => {

    const[currentPricing, setCurrentPricing] = useState({});
    const token = store.getState().userReducer.accountKey;


    useEffect(async () => {
        const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'x-api-key': 'zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr'
			},
            body: JSON.stringify({ accountKey: token })
        };

        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current",
            requestOptions
        );

        const jsonRes = await res.json();

        console.log(jsonRes);

        setCurrentPricing(jsonRes);


    })


    return(
        <div style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center", backgroundColor:"white", width:"50%"}}>
                <img width="64" height="64" src={tokenIcon} alt="token"/>
                <p>Asset symbol: {currentPricing.assetSymbol}</p>
                <p>Current price: {currentPricing.price}</p>
                <p>As of: {moment.unix(currentPricing.timestamp).format("MM/DD/YYYY")}</p>
            </div>
        </div>
    )
}