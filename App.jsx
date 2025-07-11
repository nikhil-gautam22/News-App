import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { NewsProvider } from './Contexts/context';
import NewsFeed from "./NewsFeed/Newsfeed";

function App() {
  return (
    <NewsProvider>
      <div className='app'>
        <Navbar />
        <NewsFeed />
      </div>
    </NewsProvider>
  );
}

export default App;
