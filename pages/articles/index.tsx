import Link from 'next/link';
import React from 'react';

const Articles = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        <li><Link href="/articles/first-article">First Article</Link></li>
        <li><Link href="/articles/second-article">Second Article</Link></li>
      </ul>
    </div>
  );
};

export default Articles;