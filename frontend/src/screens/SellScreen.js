import React from 'react';
import SellBar from '../components/SellBar/SellBar';
import {NavigationBar} from "../components/NavBar/NavigationBar";

export const SellScreen = () => {
    const textStyle1 = {
        color: "white",    
        fontFamily: "Arial",
        fontSize: "45px"
    };

    const textStyle2 = {
        color: "white",
        fontFamily: "Arial",
        fontSize: "20px",
    };
    return(
        <div>
            <NavigationBar/>
            <div style={{ font:"20px", padding: "130px" }}>
                <label style={textStyle1} >
                    The Best Trading Web In Singapore
                </label>
            </div>
            <div style={{ padding: "-5px" }}>
                <label style={textStyle2} >
                    Industry leading security and strong support team
                </label>
            </div>
            <SellBar/>
        </div>
    )
}