import React from 'react';
import {CurrentPricing} from '../components/CurrentPricing/CurrentPricing'
import {NavigationBar} from "../components/NavBar/NavigationBar";


export const CurrentPricingScreen = () => {
    return(
        <div style={{width:"100vw", height:"100vh"}}>
            <NavigationBar />
            <CurrentPricing />
        </div>
    )
}