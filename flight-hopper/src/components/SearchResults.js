function SearchResults({ results }) {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          {/* Render the search result */}
        </div>
      ))}
    </div>
  );
}
  
  export default SearchResults;
  