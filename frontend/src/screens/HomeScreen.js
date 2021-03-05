import React from 'react';
import {NavigationBar} from "../components/NavBar/NavigationBar";
import UserInfo from "../components/UserInfo/UserInfo";

export const HomeScreen = () => {
    return(
        <div style={{width:"100vw", height:"100vh"}}>
            <NavigationBar />
            <UserInfo />
        </div>
    )
}