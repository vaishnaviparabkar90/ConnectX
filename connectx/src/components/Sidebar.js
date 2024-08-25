import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';
import { getAllUsers } from '../redux/selectors/userSelectors'; // Updated import
import './Sidebar.css';

const Sidebar = ({ onSelectUser, currentUser }) => {
    const dispatch = useDispatch();
    const users = useSelector(getAllUsers); // Updated selector

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="sidebar card shadow-sm rounded-3">
            <div className="card-header bg-primary text-white rounded-top">
                Users
            </div>
            <ul className="list-group list-group-flush">
                {Array.isArray(users) && users.length > 0 ? (
                    users.filter(user => user._id !== currentUser?._id).map(user => (
                        <li
                            key={user._id}
                            onClick={() => onSelectUser(user)}
                            className="list-group-item list-group-item-action"
                        >
                            {user.name}
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No users available</li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
