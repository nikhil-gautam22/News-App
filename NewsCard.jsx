import React from 'react';
import './Newscard.css';

function NewsCard({ article }) {
  return (
    <div className='news-card'>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt="news" className='news-image' />
      ) : (
        <div className='image-placeholder'>No Image</div>
      )}

      <div className='news-content'>
        <h3>{article.title || "No Title Available"}</h3>
        <p>{article.description || "No description available."}</p>
        
        {article.publishedAt && (
          <p className="news-date">
            {new Date(article.publishedAt).toLocaleString()}
          </p>
        )}
        
        <a href={article.url} target='_blank' rel='noopener noreferrer'>
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
