import { useState } from 'react'
import Search from './components/Search'

function App() {
  const [foodData, setFoodData] = useState([])

  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData}/>
    </div>
  )
}

export default App
