import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (formData) => {
    try {
      const response = await fetch('/search_flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching flight options:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;