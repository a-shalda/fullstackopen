import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total}) => {

  if (good + neutral + bad === 0) return 'No feedback given'
  else return (
    <>
      <StatisticLine 
        title='Good'
        value={good}
      />
      <StatisticLine 
        title='Neutral'
        value={neutral}
      />
      <StatisticLine 
        title='Bad'
        value={bad}
      />
      <StatisticLine 
        title='Total'
        value={total}
      />
      <StatisticLine 
        title='Average'
        value={Math.floor((good - bad) * 100 / total) / 100}
      />
      <StatisticLine 
        title='Positive'
        value={Math.floor(good / (good + neutral + bad) * 1000) / 10 + '%'}
      />
    </>
  )
}

const StatisticLine = ({ title, value}) => {
  return <p>{title}: {value}</p>
}

const Button = ({ title, handleClick}) => {
  return <button onClick={handleClick}>{title}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGood = () => setGood(good + 1)
  const onNeutral = () => setNeutral(neutral + 1)
  const onBad = () => setBad(bad + 1)

  let total = good + neutral + bad

  return (
    <div>
      <h1>Please provide us with your feedback</h1>

      <Button 
        title='Good'
        handleClick={onGood}
      />

      <Button 
        title='Neutral'
        handleClick={onNeutral}
      />

      <Button 
        title='Bad'
        handleClick={onBad}
      />

      <h1>Statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />

    </div>
  )
}

export default App