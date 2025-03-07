import React from 'react'

const FoodItem = ({food}) => {
  return (
    <div>
        <img src={food.image} alt="" srcset="" />
         <h1 key={food.title}>{food.title}</h1>
         <button>View Recipe</button>
    </div>
  )
}

export default FoodItem