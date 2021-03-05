import React, {useState, useContext} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'rsuite';
import { useHistory } from "react-router-dom";





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
        <div fluid style={{justifyContent:"center", alignSelf:"center", display:"flex"}}>
            <Form style={{width:"50%"}}>
                <FormGroup>
                <ControlLabel style={{color: 'white'}}>Username</ControlLabel>
                <FormControl onChange={value => setUsername(value)} name="username" />
                </FormGroup>
                <FormGroup>
                <ControlLabel style={{color: 'white'}}>Password</ControlLabel>
                <FormControl onChange={value => setPassword(value)} name="password" type="password" />
                </FormGroup>
                <FormGroup>
                <ButtonToolbar>
                    <Button onClick={() =>console.log('hi')} appearance="primary">Submit</Button>
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
        
    )
}