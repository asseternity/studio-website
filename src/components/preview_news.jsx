import { useEffect, useState } from 'react';

export default function PreviewNews({ news = [] }) {
  const [lastFiveNews, setLastFiveNews] = useState([]);

  useEffect(() => {
    setLastFiveNews(news.slice(0, 4));
  }, [news]);

  return (
    <div className="preview_news_content">
      <h2>Recent News</h2>
      <div className="preview_news">
        {lastFiveNews.map((newsObject, index) => (
          <div className="news_piece" key={index}>
            <h4>{newsObject.title}</h4>
            <p>{newsObject.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
