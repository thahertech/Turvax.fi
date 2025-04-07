import { useRouter } from 'next/router';
import React from 'react';

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Article: {slug}</h1>
    </div>
  );
};

export default Article;