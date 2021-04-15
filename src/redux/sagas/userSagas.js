// core
import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'

// constants
import {FETCHED_USER} from "../constants";

// actions
import {
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
            throw new Error("User not found")
        }

        yield put(requestUserSucceeded(user));
    } catch (error) {
        yield put(requestUserFailed());
    }
}