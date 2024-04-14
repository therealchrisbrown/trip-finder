import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, startDate, endDate, budget }); // Call the provided onSearch function with user input
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="origin">Origin:</label>
      <input type="text" id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />

      <label htmlFor="destination">Destination:</label>
      <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />

      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <label htmlFor="budget">Budget:</label>
      <input type="number" id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} />

      <button type="submit">Find Flights</button>
    </form>
  );
};

export default SearchForm;
