import React, { useEffect, useState } from "react";

const url = "https://api.spoonacular.com/recipes/complexSearch"

const Search = () => {
  const [query, setQuery] = useState("Pizza");
//   todo: syntax of the useEffect Hook
  useEffect(()=>{
    const fetchFood = ()=>{
        console.log("demo function executed");
    }
  },[query])
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
