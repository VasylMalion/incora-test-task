// constants
import {
    FETCHED_FEEDS,
    REQUESTED_FEEDS,
    REQUESTED_FEEDS_SUCCEEDED,
    REQUESTED_FEEDS_FAILED,
    REMOVE_FEED,
    ADD_FEED,
    SET_CURRENT_FEED,
    SET_ARTICLE_ID,
} from "../constants";

// actions
export const fetchedFeeds = payload => {
    return {
        type: FETCHED_FEEDS,
        payload
    }
}

export const requestFeeds = () => {
    return {
        type: REQUESTED_FEEDS,
    }
}

export const requestFeedsSucceeded = payload => {
    return {
        type: REQUESTED_FEEDS_SUCCEEDED,
        payload
    }
}

export const requestFeedsFailed = () => {
    return {
        type: REQUESTED_FEEDS_FAILED,
    }
}

export const removeFeed = payload => {
    return {
        type: REMOVE_FEED,
        payload
    }
}

export const addFeed = payload => {
    return {
        type: ADD_FEED,
        payload
    }
}

export const setCurrentFeed = payload => {
    return {
        type: SET_CURRENT_FEED,
        payload
    }
}

export const setCurrentArticle = payload => {
    return {
        type: SET_ARTICLE_ID,
        payload
    }
}

