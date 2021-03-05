import React, { useState, useEffect } from 'react';
import {store} from '../index';

import TransHistory from '../components/TransHistory/TransHistory';
import './Posts.css';

import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;


export const Posts = () => {

    const[orderHistory, setOrderHistory] = useState([]);
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

        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
            requestOptions
        );

        const jsonRes = await res.json();

        console.log(jsonRes);

        setOrderHistory(jsonRes);


    },[]);


    return(
        <div className="auth-wrapper">     
            <div className="auth-inner">
                <div>
                    <h2 className="th-text">Transaction History</h2>
                    <h3 className="th-text2">As at CURRENTDATE</h3> 
                    <h3 className="th-text3">DOWNLOAD</h3>                    
                </div>

                <Table className ="th-table"
                height={400}
                data={orderHistory}
                onRowClick={data => {
                    console.log(data);
                }}
                >
                    <Column width={70} align="center" fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="transactionId" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Order type</HeaderCell>
                        <Cell dataKey="orderType" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Timestamp</HeaderCell>
                        <Cell rowData={data => Date.parse(data)} dataKey="timestamp" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Asset symbol</HeaderCell>
                        <Cell dataKey="assetSymbol" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Asset amount</HeaderCell>
                        <Cell dataKey="assetAmount" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Asset price ($)</HeaderCell>
                        <Cell dataKey="assetPrice" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Cash amount ($)</HeaderCell>
                        <Cell dataKey="cashAmount" />
                    </Column>
                </Table>
            </div>
        </div>
    )
}