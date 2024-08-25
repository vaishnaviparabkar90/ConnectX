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

export const fetchUsers = () => async dispatch => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/login', { email, password });
        const user = response.data;
        const { token, userId } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        return user; // Return the user object
    } catch (error) {
        console.error('Login failed:', error);
    }
};