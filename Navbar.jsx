import React, { useState } from 'react';
import './Navbar.css';
import { useNewsContext } from '../Contexts/context';

function Navbar() {
  const categories = ["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState("All");
  const { fetchNews } = useNewsContext();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchNews('', searchTerm.trim()); 
      setActiveCategory(''); 
    }
  };

  const handleCategoryClick = (category) => {
    setSearchTerm('');
    setActiveCategory(category);

    const selectedCategory = category === "All" ? 'general' : category.toLowerCase();

    fetchNews(selectedCategory); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">📰 News App</div>

      <nav className="navbar-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`navbar-category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Navbar;
