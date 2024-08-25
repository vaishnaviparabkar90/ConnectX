// redux/reducers/userReducer.js

import { LOGIN_SUCCESS, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from '../actions/userActions';

const initialState = {
    userId: null,
    token: null,
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId,
                token: action.payload.token,
            };
           
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
