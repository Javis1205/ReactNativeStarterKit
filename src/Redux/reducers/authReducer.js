import {
    CURRENT_USER_LOGIN_FINISH
} from '../actions/types';

const INITIAL = {
    loggedIn: false,
    userdata: null,
};

export default authReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case CURRENT_USER_LOGIN_FINISH:
            return {
                ...state,
                loggedIn: true,
                userdata: action.response.response
            };
        default:
            return state;
    }
};