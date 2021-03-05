import React, { useState, useEffect } from 'react';

//import './CurrentPricing.css';

import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;


export const CurrentPricing = () => {

    const[currentPricing, setOrderHistory] = useState([]);

    useEffect(async () => {
        const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'x-api-key': 'zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr'
			}
        };

        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current",
            requestOptions
        );

        const jsonRes = await res.json();

        console.log(jsonRes);

        setOrderHistory(jsonRes);


    })


    return(
        <div>
            <Table
            height={400}
            data={currentPricing}
            onRowClick={data => {
                console.log(data);
            }}
            >
                <Column width={70} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="price" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Order type</HeaderCell>
                    <Cell dataKey="assetSymbol" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Timestamp</HeaderCell>
                    <Cell rowData={data => Date.parse(data)} dataKey="timestamp" />
                </Column>

            </Table>
        </div>
    )
}