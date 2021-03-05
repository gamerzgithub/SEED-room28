import React from 'react';
import { connect } from "react-redux";
import { FlexboxGrid, List } from 'rsuite';
import {Wallet} from '../Wallet/Wallet';
import './UserInfo.css';


const mapStatetoProps = (state) => {
    return {
        userParticulars: state.userReducer
    }
}

const UserInfo = ({userParticulars}) => {
    return(
        <div className="container">
            <div className="user-container">
                <div className="wallet-container">
                    <p style={{fontSize: 20}}>Welcome back, {userParticulars.firstName}</p>
                    <Wallet />
                </div>

            </div>
            <hr className="line"></hr>
            <div className="particulars-container">
                    <List>
                        <List.Item>First name: {userParticulars.firstName}</List.Item>
                        <List.Item>Last name: {userParticulars.lastName}</List.Item>
                        <List.Item>Nric: {userParticulars.nric}</List.Item>
                        <List.Item>Address: {userParticulars.address}</List.Item>
                        <List.Item>Phone number: {userParticulars.phoneNumber}</List.Item>
                        <List.Item>Email: {userParticulars.email}</List.Item>
                    </List>
                </div>
        </div>
        
    )
}


export default connect(mapStatetoProps)(UserInfo);