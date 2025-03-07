import { useState } from 'react'
import Search from './components/Search'

function App() {
  const [foodData, setFoodData] = useState([])

  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      {foodData.map((food) => (
        <h1 key={food.title}>{food.title}</h1>
      ))}
    </div>
  )
}

export default App
