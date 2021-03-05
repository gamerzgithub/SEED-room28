import React, { useState, useEffect } from 'react';
import {store} from '../../index';
import moneyIcon from '../../assets/money.png';
import tokenIcon from '../../assets/token.png';


export const Wallet = () => {
    const [assetBal, setAssetBal] = useState();
    const [cashBal, setCashBal] = useState();
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

        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
            requestOptions
        );

        const jsonRes = await res.json();

        console.log(jsonRes);

        setAssetBal(jsonRes.assetBalance);
        setCashBal(jsonRes.cashBalance);


    })

    return(
        <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
                <img width="64" height="64" src={moneyIcon} alt="money"/>
                <p>Cash balance: {cashBal}</p>

            </div>
            <div style={{display:"flex"}}>
                <img width="64" height="64" src={tokenIcon} alt="token"/>
                <p>Token balance: {assetBal}</p>

            </div>
        </div>
    )

}