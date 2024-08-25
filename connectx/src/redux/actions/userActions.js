import axios from 'axios';

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action creators
export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
});

export const fetchUsers = () => async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
        const response = await axios.get('/api/users');
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error fetching users:', error);
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
};

// Thunk for login
export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/login', { email, password });
        const { token, userId } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        dispatch(loginSuccess({ userId, token }));
    } catch (error) {
        console.error('Login failed:', error);
    }
};
