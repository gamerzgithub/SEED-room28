import React from 'react';
import {Posts} from '../containers/Posts'
import {NavigationBar} from "../components/NavBar/NavigationBar";


export const OrderHistoryScreen = () => {
    return(
        <div style={{width:"100vw", height:"100vh"}}>
            <NavigationBar />
            <Posts />
        </div>
    )
}