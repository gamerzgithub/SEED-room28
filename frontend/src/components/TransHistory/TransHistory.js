import React, { Component } from 'react';

//import './TransHistory.css';

const TransHistory = ( props ) => {
    return (
        <div>
			<p>The order orderType is {props.orderType}</p>
			<p>The order timestamp is {props.timestamp}</p>
			<p>The order assetAmount is {props.assetAmount}</p>
			<p>The order assetSymbol is {props.assetSymbol}</p>
			<p>The order cashAmount is {props.cashAmount}</p>
			<p>The order transactionId is {props.transactionId}</p>
        </div>
    )
};

export default TransHistory;