// core
import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'

// constants
import {FETCHED_FEEDS} from "../constants";

// actions
import {
    requestFeeds,
    requestFeedsSucceeded,
    requestFeedsFailed,
} from "../actions/feedsActions";

// sagas
export function* watchFetchFeeds() {
    yield takeEvery(FETCHED_FEEDS, fetchFeedsAsync);
}

function* fetchFeedsAsync() {
    try {
        yield put(requestFeeds());
        const data = yield call(async () => {
            return await Promise.all([
                (await axios.get('https://www.nasa.gov/rss/dyn/breaking_news.rss')).data,
                (await axios.get('https://www.reddit.com/.rss')).data,
                (await axios.get('https://www.mobileworldlive.com/latest-stories/feed')).data
            ])
        });
        yield put(requestFeedsSucceeded(data));
    } catch (error) {
        yield put(requestFeedsFailed());
    }
}