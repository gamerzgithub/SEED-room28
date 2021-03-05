import React, { Component } from 'react';

import TransHistory from '../components/TransHistory/TransHistory';
//import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
		const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'x-api-key': 'zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr'
			},
			body: JSON.stringify({ accountKey: 'b4c39a64-7369-4784-bdbf-57eb2f7b2213' })
		};
		fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', requestOptions)
			.then(response => response.json())
			.then(data => this.setState({ postId: data.id }));
    }

     render() {
        const { postId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Returned Id: {postId.orderType}
                </div>
            </div>
        );
    }
}

export default Posts;