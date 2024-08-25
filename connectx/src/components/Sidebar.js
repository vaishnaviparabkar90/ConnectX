import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';
import { getAllUsers } from '../redux/selectors/userSelectors';
import './Sidebar.css'; // Add your styles for Sidebar

const Sidebar = ({ onSelectUser }) => {
    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="sidebar">
            {users.map(user => (
                <div key={user._id} onClick={() => onSelectUser(user)}>
                    {user.name}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
