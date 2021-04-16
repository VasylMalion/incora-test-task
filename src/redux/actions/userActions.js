// constants
import {
    FETCHED_USER,
    REQUESTED_USER,
    REQUESTED_USER_FAILED,
    REQUESTED_USER_SUCCEEDED,
    LOG_OUT_USER,
    FETCHED_POSTS,
    REQUESTED_POSTS,
    REQUESTED_POSTS_SUCCEEDED,
    REQUESTED_POSTS_FAILED,
    REQUESTED_DELETE_POST_SUCCEEDED,
    REQUESTED_DELETE_POST,
    FETCHED_DELETE_POST,
    FETCHED_UPDATE_POST,
    REQUESTED_UPDATE_POST,
    REQUESTED_UPDATE_POST_SUCCEEDED
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

export const fetchedPosts = payload => {
    return {
        type: FETCHED_POSTS,
        payload
    }
}

export const requestPosts = () => {
    return {
        type: REQUESTED_POSTS,
    }
}

export const requestPostsSucceeded = payload => {
    return {
        type: REQUESTED_POSTS_SUCCEEDED,
        payload
    }
}

export const requestPostsFailed = () => {
    return {
        type: REQUESTED_POSTS_FAILED,
    }
}

export const fetchedDeletePost = payload => {
    return {
        type: FETCHED_DELETE_POST,
        payload
    }
}

export const requestDeletePost = () => {
    return {
        type: REQUESTED_DELETE_POST,
    }
}

export const requestDeletePostSucceeded = payload => {
    return {
        type: REQUESTED_DELETE_POST_SUCCEEDED,
        payload
    }
}

export const fetchedUpdatePost = payload => {
    return {
        type: FETCHED_UPDATE_POST,
        payload
    }
}

export const requestUpdatePost = () => {
    return {
        type: REQUESTED_UPDATE_POST,
    }
}

export const requestUpdatePostSucceeded = payload => {
    return {
        type: REQUESTED_UPDATE_POST_SUCCEEDED,
        payload
    }
}