import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {thunk}from 'redux-thunk'; // Correct import for thunk
import rootReducer from './redux/reducers';
import AppNavbar from './components/AppNavbar';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ChatApp from './components/ChatApp'; // Ensure this path is correct
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ErrorBoundary from './components/ErrorBoundary';

// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    // Access userId from the Redux store
    const userId = useSelector(state => state.user?.userId);

    console.log('App User ID:', userId);

    return (
        // Provider should wrap the Router and all components within
        <Provider store={store}>
            <Router>
            <ErrorBoundary>
                    <AppNavbar />
                    <div className="container mt-4">
                        <Routes>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/" element={<PrivateRoute element={ChatApp} />} />
                        </Routes>
                    </div>
                </ErrorBoundary>
            </Router>
        </Provider>
    );
};

export default App;
