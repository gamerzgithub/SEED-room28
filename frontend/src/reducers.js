import * as constants from './constants';

export const initialUserState = {
    accountKey: null,
    firstName: "",
    lastName: "",
    nric: "",
    address: "",
    phoneNumber: "",
    email: "",
    accountBalance: 0,
    assetBalance: 0
};

export const userReducer = (
    state = initialUserState,
    action
) => {
    switch(action.type) {
        case constants.SIGN_IN_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case 'USER_LOGOUT':
            state = undefined
            return state
        default:
            return state;
    }
}