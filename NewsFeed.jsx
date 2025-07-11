import React from 'react';
import './NewsFeed.css';
import { useNewsContext } from '../Contexts/context';
import NewsCard from '../Newscard/NewsCard';

function Newsfeed() {
  const { articles, loading, error } = useNewsContext();

  if (loading) return <p className="loading">Loading news...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="news-feed">
      {articles.length === 0 ? (
        <p className="no-news-message">No News found. Please try again later.</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Newsfeed;
