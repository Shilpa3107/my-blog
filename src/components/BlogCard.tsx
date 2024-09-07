"use client"; // This enables client-side interactivity

import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  onDelete: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-lg">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{excerpt}</p>
      <button
        onClick={onDelete}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default BlogCard;
