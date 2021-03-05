import React, { useState, useEffect } from 'react';

import TransHistory from '../components/TransHistory/TransHistory';
//import './Posts.css';


export const Posts = () => {

    const[orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'x-api-key': 'zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr'
			},
			body: JSON.stringify({ accountKey: 'b4c39a64-7369-4784-bdbf-57eb2f7b2213' })
        };

        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
            requestOptions
        );

        const jsonRes = await res.json();

        console.log(jsonRes);


    })


    return(
        <div>
"
        </div>
    )
}