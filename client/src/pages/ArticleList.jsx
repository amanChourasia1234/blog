import React from 'react';
import { ArticleContent } from '.';
import { Articles } from '../components';
const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900" />
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={ArticleContent} />
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
