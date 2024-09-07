// src/app/[id]/page.tsx

"use client"; // Ensure this is a Client Component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Updated import

interface Post {
  id: number;
  title: string;
  content: string;
}

// Define fetchPost as a separate function outside the component
async function fetchPost(id: string, setPost: React.Dispatch<React.SetStateAction<Post | null>>) {
  const response = await fetch(`http://localhost:4000/posts/${id}`);
  if (response.ok) {
    const data = await response.json();
    setPost(data.post);
  } else {
    console.error('Failed to fetch post');
  }
}

export default function PostPage() {
  const { id } = useParams<{ id: string | string[] }>(); // Specify the type of id
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (typeof id === 'string') { // Ensure id is a string
      fetchPost(id, setPost);
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
}
