import React, { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const { login } = useContext(AuthContext);
    const nav = useNavigate();

    const submit = async e => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/signup', form);
            login(res.data.token, res.data.user);
            nav('/');
        } catch (err) {
            alert(err.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Signup</h2>
                <form onSubmit={submit} className="space-y-4">
                    <input
                        placeholder="Name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        placeholder="Email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        placeholder="Password"
                        value={form.password}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        type="password"
                        required
                        className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}