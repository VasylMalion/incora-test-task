// constants
import {
    LOG_OUT_USER,
    REQUESTED_USER,
    REQUESTED_USER_FAILED,
    REQUESTED_USER_SUCCEEDED
} from "../constants";

const initialState = {
    user: null,
    isAuth: false,
    loading: false,
    error: false,
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case REQUESTED_USER:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case REQUESTED_USER_SUCCEEDED:
            return {
                user: action.payload[0],
                isAuth: true,
                loading: false,
                error: false,
            }

        case REQUESTED_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case LOG_OUT_USER:
            return {
                ...state,
                isAuth: false
            }

        default:
            return state;
    }
}