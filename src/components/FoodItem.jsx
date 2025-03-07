import React from 'react'

const FoodItem = ({food}) => {
  return (
    <div>
         <h1 key={food.title}>{food.title}</h1>
    </div>
  )
}

export default FoodItem