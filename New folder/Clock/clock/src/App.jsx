import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clock-page">
      <div className="clock">
        <p className="greeting">WELCOME TO YOUR</p>

        <h1>Digital Clock</h1>

        <div className="time">
          {time.toLocaleTimeString()}
        </div>

        <p className="date">
          {time.toLocaleDateString(undefined, {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      </div>
    </div>
  )
}

export default App