import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Navbar() {
    const { user, logout } = React.useContext(AuthContext);
    return (
        <nav style={{ display: 'flex', gap: 16, padding: 12, borderBottom: '1px solid #ddd' }}>
            <Link to="/">Feed</Link>
            {user && <Link to="/create">Create Post</Link>}
            <div style={{ marginLeft: 'auto' }}>
                {user ? (
                    <>
                        <span style={{ marginRight: 12 }}>Hi, {user.name}</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
}