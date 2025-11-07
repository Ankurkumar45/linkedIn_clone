import React, { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const { login } = useContext(AuthContext);
    const nav = useNavigate();

    const submit = async e => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', form);
            login(res.data.token, res.data.user);
            nav('/');
        } catch (err) {
            alert(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="mt-1 text-center text-2xl font-semibold text-gray-900">Sign in to your account</h2>

                <form onSubmit={submit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            placeholder="Email address"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                            placeholder="Password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}