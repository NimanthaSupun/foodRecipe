import React, { useEffect, useState } from "react";

const url = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "234b36f81ee74192a8f214293f825bca";



const Search = () => {
  const [query, setQuery] = useState("Pizza");
//   todo: syntax of the useEffect Hook
  useEffect(()=>{

    const fetchFood = async () => {
       const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
       const data = await res.json();
       console.log(data.result);
    }


    fetchFood()
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
