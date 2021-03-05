import React from 'react';
import { connect } from "react-redux";
import { FlexboxGrid, List } from 'rsuite';
import {Wallet} from '../Wallet/Wallet';



const mapStatetoProps = (state) => {
    return {
        userParticulars: state.userReducer
    }
}


const UserInfo = ({userParticulars}) => {
    return(
        <div style={{width:"100vw", display:"flex", justifyContent:"center"}}>
            <div style={{width: "80vw", height: "50vh", backgroundColor: "white", borderRadius: 2, display:"flex", alignItems:"center", justifyContent:"center"}} className="user-container">
                <div className="wallet-container">
                    <p style={{fontSize: 20}}>Welcome back, {userParticulars.firstName}</p>
                    <Wallet />
                </div>
                <div className="particulars-container">
                    <List bordered>
                        <List.Item>First name: {userParticulars.firstName}</List.Item>
                        <List.Item>Last name: {userParticulars.lastName}</List.Item>
                        <List.Item>Nric: {userParticulars.nric}</List.Item>
                        <List.Item>Address: {userParticulars.address}</List.Item>
                        <List.Item>Phone number: {userParticulars.phoneNumber}</List.Item>
                        <List.Item>Email: {userParticulars.email}</List.Item>
                    </List>
                </div>

            </div>
        </div>
        
    )
}


export default connect(mapStatetoProps)(UserInfo);