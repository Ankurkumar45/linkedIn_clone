import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const [text, setText] = useState('');
    const nav = useNavigate();

    const submit = async e => {
        e.preventDefault();
        try {
            await api.post('/posts', { text });
            nav('/');
        } catch (err) {
            alert('Error creating post');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Post</h2>
                <form onSubmit={submit} className="space-y-4">
                    <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                        rows={4}
                        placeholder="What's on your mind?"
                        className="w-full resize-none border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
}