import { useRouter } from 'next/router';
import React from 'react';

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Article: {slug}</h1>
      <p>Here will be the content of the article with the slug "{slug}".</p>
    </div>
  );
};

export default Article;