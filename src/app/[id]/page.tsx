import React from 'react';

export default function ViewPost({ params }: { params: { id: string } }) {
  // For now, hardcode a sample post
  const post = {
    title: 'Sample Post Title',
    content: 'This is the full content of the sample post.',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
