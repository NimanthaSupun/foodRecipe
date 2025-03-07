import React from 'react'
import styles from './FoodItem.module.css'

const FoodItem = ({food}) => {
  return (
    <div>
        <img src={food.image} alt="" srcset="" />
         <h1>{food.title}</h1>
         <button>View Recipe</button>
    </div>
  )
}

export default FoodItem