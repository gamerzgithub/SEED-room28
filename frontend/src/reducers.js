import * as constants from './constants';

export const initialUserState = {
    accountKey: null,
    firstName: "",
    lastName: "",
    nric: "",
    address: "",
    phoneNumber: "",
    email: ""
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

        default:
            return state;
    }
}