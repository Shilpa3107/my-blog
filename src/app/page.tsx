// src/app/page.tsx
"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:4000/posts');
      const data = await response.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:4000/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setPosts(posts.filter(post => post.id !== id));
    } else {
      console.error('Failed to delete post');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Blog Posts</h1>
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts available</p>
      ) : (
        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
              <div className="flex justify-between items-center">
                <Link href={`/${post.id}`} className="text-blue-600 hover:underline">View Post</Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
