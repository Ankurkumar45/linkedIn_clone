import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';

function PrivateRoute({ children }) {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><Feed /></PrivateRoute>} />
        <Route path="/create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
