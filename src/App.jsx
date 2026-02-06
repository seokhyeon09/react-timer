import { useState } from 'react'
import './App.css'
import Timer from "./components/Timer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='game-container'>
        <div className='tit-wrap'>
          <h1>타이머 앱</h1>
          {<img src="./../../public/icon-timer.png" alt="타이머" className='img'/>}
        </div>
        <Timer />

      </div>
    </div>
  )
}

export default App
