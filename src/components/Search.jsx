import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("Pizza");
//   todo: syntax of the useEffect Hook
  useEffect(()=>{
    const demo = ()=>{
        console.log("demo function executed");
    }
  },[])
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
