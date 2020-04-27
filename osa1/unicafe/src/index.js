import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsLine = ({text, value}) => {
  let prosMer = ""
  let numero = "" + value
  numero = numero.slice(0,4)
  if(text === "positive"){prosMer = "%"}
  return (<tr><td>{text}</td><td>{numero}{prosMer}</td></tr>)
}

const Statistics = ({good, neutral, bad}) =>{
  let amount = good + neutral + bad
  if(amount === 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  let avg = (good - bad) / amount
  let positive = good / amount * 100
  return(
    <div>
      <h1>statistics</h1>
      <StatisticsLine text = "good " value = {good}/>
      <StatisticsLine text = "neutral " value = {neutral}/>
      <StatisticsLine text = "bad " value = {bad}/>
      <StatisticsLine text = "average " value = {avg}/>
      <StatisticsLine text = "positive " value = {positive}/>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good = {good} neutral = {neutral} 
      bad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)