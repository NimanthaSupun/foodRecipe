import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("Pizza");
  useEffect(()=>{},[])
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
