import React from 'react';
import {BuyBar} from '../components/BuyBar/BuyBar';
import {NavigationBar} from "../components/NavBar/NavigationBar";

export const BuyScreen = () => {
    return(
        <div>
            <NavigationBar/>
            <BuyBar/>
        </div>
    )
}