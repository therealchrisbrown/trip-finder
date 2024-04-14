import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleSearch = async (formData) => {
    // Replace with a function call to your back-end to search flights
    // This function should take user input (formData) as argument
    // and return the flight search results
  
    // Example placeholder (replace with actual functionality)
    const response = await fetch('http://your-backend-server/search-flights', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setSearchResults(data);
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;