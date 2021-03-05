import React, {useState} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'rsuite';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../../actions';
import {store} from '../../index';



const mapStatetoProps = (state) => {
    return state;
}

const mapDispatchtoProps = (dispatch) => {
    return {
        submitSignIn: async (us, pw) => {
            const fields = {
                username: us,
                password: pw
            }
            return await dispatch(actions.thunkSignIn(fields));
        }
    }

}



const SignIn = ({submitSignIn}) => { 

    const token = store.getState().userReducer.accountKey;


    const history = useHistory();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const signInAndNavigate = async () => {
        const result = await submitSignIn(username, password);

        if(result) {
            history.push('/home');
        } else {
            alert("error signing in");
        }

    }

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
                    <Button onClick={signInAndNavigate} appearance="primary">Submit</Button>
                    <Button onClick={() => console.log(token)} appearance="default">Cancel</Button>
                </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
        
    )
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SignIn);