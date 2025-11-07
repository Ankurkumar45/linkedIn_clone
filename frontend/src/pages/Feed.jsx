import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const load = async () => {
            const res = await api.get('/posts');
            setPosts(res.data);
        };
        load();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feed</h2>

                {/* Create-post box (UI only) */}
                <div className="bg-white rounded-md shadow-sm p-4 mb-6">
                    <textarea
                        rows={3}
                        placeholder="What's on your mind?"
                        className="w-full resize-none border border-gray-200 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <div className="flex justify-end mt-3">
                        <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Post
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {posts.map(p => (
                        <article key={p._id} className="bg-white rounded-md shadow p-4">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                                    {p.user?.name ? p.user.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-semibold text-gray-900">{p.user?.name || 'Unknown'}</h3>
                                        <time className="text-xs text-gray-500">{new Date(p.createdAt).toLocaleString()}</time>
                                    </div>
                                    <p className="mt-2 text-gray-800 whitespace-pre-wrap">{p.text}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}