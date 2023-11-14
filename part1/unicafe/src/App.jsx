import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const onGood = () => {
    setGood(good + 1)
  }

  const onNeutral = () => {
    setNeutral(neutral + 1)
  }

  const onBad = () => {
    setBad(bad + 1)
  }

  const Statistics = () => {
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Average: {Math.floor((good + neutral + bad) * 100 / 3) / 100}</p>
        <p>Positive: {Math.floor(good / (good + neutral + bad) * 1000) / 10 + '%'}</p>
      </>
    )
  }

  return (
    <div>
      <h1>Please provide us with your feedback</h1>

      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>

      <h1>Statistics</h1>
      <Statistics />

    </div>
  )
}

export default App