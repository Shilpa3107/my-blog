// src/components/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md flex flex-col items-center p-4">
      {/* Centered Blog Title */}
      <div className="mb-4">
        <Link href="/" className="text-5xl font-extrabold hover:text-gray-200 transition-colors" id="blogname">
          Blog
        </Link>
      </div>
      {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-2" id="othernav">
        <Link href="/create" className="text-lg hover:text-gray-200 transition-colors">
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default Header;
