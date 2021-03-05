import React, {useState, useContext} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'rsuite';
import './ViewBalance.css';

export const ViewBalance = () => {

    const [assetBalance, setAssetBalance] = useState(0);
    const [cashBalance, setCashBalance] = useState(0);
    const [accountKey, setAccountKey] = useState(0);

    const submitSignIn = async () => {
        try{
            const res = await fetch("https://https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  accountKey: accountKey
                })
            }).then(res => {          
                //localStorage.setItem('token', res.data.token);
                setAssetBalance(res.assetBalance);
                setCashBalance(res.cashBalance);
                
            });
            console.log('Results: ' + res);      

        } catch(err) {
            console.log(err);
        }
        
    }

    return(
        
        <div className="auth-wrapper" style={{ padding: "100px 20px" }} >
            <div className="auth-inner">
                <h2>Welcome Back!</h2>
                <h2>Username </h2>

                <div style={{ width: "300px" }}>
                    <h4>Your Asset balance Your Cash balance</h4>
                    <h4>Your {assetBalance} {cashBalance}</h4>
                </div>
                
            </div>

            
            

        </div> 
        /*{props.username}*/
        /*
        <div fluid style={{justifyContent:"center", alignSelf:"center", display:"flex"}}>
        <Form style={{width:"50%"}}>
            <FormGroup>
            <ControlLabel style={{color: 'white'}}>Username</ControlLabel>
            <FormControl name="username" />
            </FormGroup>
            <FormGroup>
            <ControlLabel style={{color: 'white'}}>Password</ControlLabel>
            <FormControl name="password" type="password" />
            </FormGroup>
            <FormGroup>
            <ButtonToolbar>
                <Button onClick={() =>console.log('hi')} appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
            </ButtonToolbar>
            </FormGroup>
        </Form>
        </div>
        */
    );



}