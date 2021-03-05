import React, {useState} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'rsuite';
import { useHistory } from "react-router-dom";
import "./SignIn.css";




export const SignIn = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // const {userData, setUserData} = useContext(UserContext);

    const history = useHistory();

    // const submitSignIn = async () => {
    //     try{
    //         const res = await fetch("http://localhost:8080/signin", {
    //             method: 'post',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({
    //               username: username,
    //               password: password
    //             })
    //         });
    
    //         const jsonRes = await res.json();
    
    //         await setUserData({
    //             token: jsonRes.token,
    //             user: jsonRes.user
    //         });

    //         console.log(userData.token);
    //         console.log(userData.user);

    //         history.push("/home")
    //     } catch(err) {
    //         console.log(err);
    //     }
        
    // }

    return(
        <div fluid className ="vertical-align">
            <Form>
                <FormGroup>
                <ControlLabel className="controlLabel">Username</ControlLabel>
                <FormControl onChange={value => setUsername(value)} name="username" />
                </FormGroup>
                <FormGroup>
                <ControlLabel className="controlLabel">Password</ControlLabel>
                <FormControl onChange={value => setPassword(value)} name="password" type="password" />
                </FormGroup>
                <FormGroup>
                <ButtonToolbar>
                    <Button className="button" onClick={() =>console.log('hi')} appearance="primary">Login</Button>
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
        
    )
}
