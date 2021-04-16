// core
import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'

// constants
import {
    FETCHED_DELETE_POST,
    FETCHED_POSTS,
    FETCHED_UPDATE_POST,
    FETCHED_USER
} from "../constants";

// actions
import {
    requestDeletePost,
    requestDeletePostSucceeded,
    requestPosts,
    requestPostsFailed,
    requestPostsSucceeded,
    requestUpdatePost,
    requestUpdatePostSucceeded,
    requestUser,
    requestUserFailed,
    requestUserSucceeded
} from "../actions/userActions";

// sagas
export function* watchFetchUser() {
    yield takeEvery(FETCHED_USER, fetchUserAsync);
}

function* fetchUserAsync(data) {

    const {username, password} = data.payload;

    try {
        yield put(requestUser());
        const user = yield call(() => {
                return axios.get("https://jsonplaceholder.typicode.com/users")
                    .then(data => data && data.data.filter( user => {
                        if (user.username === username && password === "12345"){
                            return user
                        }
                    }))
            }
        );

        if (user.length === 0) {
            throw new Error("User not found");
        }

        yield put(requestUserSucceeded(user));
    } catch (error) {
        yield put(requestUserFailed());
    }
}

// posts
export function* watchFetchUPosts() {
    yield takeEvery(FETCHED_POSTS, fetchPostsAsync);
}

function* fetchPostsAsync(payload) {

    try {
        yield put(requestPosts());
        const posts = yield call(() => {
                return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${payload.payload}`)
                    .then(data => data.data)
            }
        );

        yield put(requestPostsSucceeded(posts));
    } catch (error) {
        yield put(requestPostsFailed());
    }
}

export function* watchFetchDeletePost() {
    yield takeEvery(FETCHED_DELETE_POST, fetchPostDeleteAsync);
}

function* fetchPostDeleteAsync({payload}) {

    try {
        yield put(requestDeletePost());
        yield call(() => axios.delete(`https://jsonplaceholder.typicode.com/posts/${payload}`));
        yield put(requestDeletePostSucceeded(payload));
    }
    catch (error) {
        console.log(error)
    }
}

export function* watchFetchUpdatePost() {
    yield takeEvery(FETCHED_UPDATE_POST, fetchPostUpdateAsync);
}

function* fetchPostUpdateAsync({payload}) {

    try {
        yield put(requestUpdatePost());
        yield call(() => axios.put(`https://jsonplaceholder.typicode.com/posts/${payload.currentPost}`, {
            title: payload.title,
            description: payload.description
        }));
        yield put(requestUpdatePostSucceeded(payload));
    } catch (error) {
        console.log(error)
    }
}