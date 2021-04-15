// constants
import {
    FETCHED_USER,
    REQUESTED_USER,
    REQUESTED_USER_FAILED,
    REQUESTED_USER_SUCCEEDED,
    LOG_OUT_USER
} from "../constants";

// actions
export const fetchedUser = payload => {
    return {
        type: FETCHED_USER,
        payload
    }
}

export const requestUser = () => {
    return {
        type: REQUESTED_USER,
    }
}

export const requestUserSucceeded = payload => {
    return {
        type: REQUESTED_USER_SUCCEEDED,
        payload
    }
}

export const requestUserFailed = () => {
    return {
        type: REQUESTED_USER_FAILED,
    }
}

export const logOutUser = () => {
    return {
        type: LOG_OUT_USER,
    }
}
