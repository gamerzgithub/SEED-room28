import * as constants from './constants';

const API_KEY = "zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr";

//action creators

export const signInSucess = (particulars) => {
    return {
        type: constants.SIGN_IN_SUCCESS,
        payload: particulars
    }
}



//thunks

export const thunkSignIn = (
    signInFields
) => async (dispatch) => {
    try{
        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
            },
            body: JSON.stringify({
              username: signInFields.username,
              password: signInFields.password
            })
        });

        const jsonRes = await res.json();

        dispatch(signInSucess(jsonRes));
        return true;

    } catch(err) {
        console.log(err);
        return false;
    }
}