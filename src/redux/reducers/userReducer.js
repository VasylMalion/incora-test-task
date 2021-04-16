// constants
import {
    LOG_OUT_USER,
    REQUESTED_DELETE_POST_SUCCEEDED,
    REQUESTED_POSTS,
    REQUESTED_POSTS_FAILED,
    REQUESTED_POSTS_SUCCEEDED,
    REQUESTED_UPDATE_POST_SUCCEEDED,
    REQUESTED_USER,
    REQUESTED_USER_FAILED,
    REQUESTED_USER_SUCCEEDED
} from "../constants";
import {requestDeletePostSucceeded} from "../actions/userActions";

const initialState = {
    user: null,
    isAuth: false,
    posts: [],
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

        case REQUESTED_POSTS:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case REQUESTED_POSTS_SUCCEEDED:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false,
            }

        case REQUESTED_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case REQUESTED_DELETE_POST_SUCCEEDED:

            const idPost = state.posts.findIndex(item => item.id === action.payload);

            const newPosts = [
                ...state.posts.slice(0, idPost),
                ...state.posts.slice(idPost + 1)
            ]

            return {
                ...state,
                posts: newPosts
            }

        case REQUESTED_UPDATE_POST_SUCCEEDED:

            const {title, description, userId, currentPost} = action.payload;
            const idUpdatedPost = state.posts.findIndex(item => item.id === currentPost);

            const updatedPosts = [
                ...state.posts.slice(0, idUpdatedPost),
                {
                    userId,
                    id: currentPost,
                    title,
                    body: description
                },
                ...state.posts.slice(idUpdatedPost + 1)
            ]

            return {
                ...state,
                posts: updatedPosts
            }
        default:
            return state;
    }
}