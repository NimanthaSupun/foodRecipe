import React, { useEffect, useState } from "react"
import styles from './Search.module.css'

const url = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "234b36f81ee74192a8f214293f825bca";



const Search = ({foodData, setFoodData}) => {
  const [query, setQuery] = useState("Pizza");
//   todo: syntax of the useEffect Hook
  useEffect(()=>{

    const fetchFood = async () => {
       const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
       const data = await res.json();
       console.log(data.results);
       setFoodData(data.results)
    }


    fetchFood()
  },[query])
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
