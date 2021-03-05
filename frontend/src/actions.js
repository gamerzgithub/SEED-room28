import * as constants from './constants';

const API_KEY = "zgEJEmVCy818DpV3eCQ5A2h6BwEKCXLTa7bG5AQr";

//action creators

export const signInSucess = (particulars) => {
    return {
        type: constants.SIGN_IN_SUCCESS,
        payload: particulars
    }
}

export const buySellSucess = (particulars) => {
    var payload = {
        assetBalance : particulars.assetBalance,
        cashBalance : particulars.cashBalance
    }
    return {
        type: constants.BUY_SELL_SUCCESS,
        payload: payload
    }
}

export const logout = (particulars) => {
    return {
        type: 'USER_LOGOUT',
        payload: ''
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


export const thunkBuySell = (
    fields
) => async (dispatch) => {
    try{
        if (fields.action == "BUY") {
            var body = JSON.stringify({
                accountKey: fields.token,
                assetAmount : fields.value,
                orderType: "BUY"
            });
        } else {
            var body = JSON.stringify({
                accountKey: fields.token,
                assetAmount : fields.value,
                orderType: "SELL"
            })
        }
        console.log(body)
        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
            },
            body: body
        });

        const jsonRes = await res.json();
        console.log(jsonRes)
        dispatch(buySellSucess(jsonRes));
        return true;

    } catch(err) {
        console.log(err);
        return false;
    }
}


export const thunkLogout = () => async (dispatch) => {
    try{
        dispatch(logout());
        return true;

    } catch(err) {
        console.log(err);
        return false;
    }
}

