import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";


const NewsContext = createContext();
export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const API_KEY = "4b7fd93eb2a84428b328f71822060509";
  const BASE_URL = "https://newsapi.org/v2";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async (category = '', query = '') => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          apiKey: API_KEY,
          country: 'us',
          category: category || undefined,
          q: query || undefined,
         pageSize: 100,
        },
      });

      console.log( response.data.articles);
        setArticles(response.data.articles);
    } catch (err) {
      setError("Could not fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ articles, loading, error, fetchNews }}>
      {children}
    </NewsContext.Provider>
  );
};
