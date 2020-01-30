import React, { useState, useCallback } from 'react'
import Background from '../components/Background'
import Clock from '../components/Clock'
import Menu from '../components/Menu'
import Results from '../components/Results'
import InputField from '../components/InputField'

export default function ManagerContainer() {
  const [testRunning, setTestRunning] = useState(false)
  const [durationInMinutes, setDurationInMinutes] = useState(1) // game durationInMinutes in minutes
  const [score, setScore] = useState(0)
  const [misses, setMisses] = useState(0)
  const [numberOfSkips, setNumberOfSkips] = useState(0) 

  const durationInSeconds = durationInMinutes * 60

  function startTest() {
    setTestRunning(true)
    setScore(0)
    setMisses(0)
  }
  function stopTest() {
    setTestRunning(false)
  }
  function toggleTestRunning() {
    return testRunning ? stopTest() : startTest()
  }

  return (
    <Background>
      <Menu
        testRunning={testRunning}
        toggleTestRunning={toggleTestRunning} />
      {
        testRunning ? 
        <Clock
          durationInSeconds={durationInSeconds}
          setNumberOfSkips={setNumberOfSkips}
          incrementScore={async () => setScore(score + 1)}
          incrementMisses={async () => setMisses(misses + 1)}
          endTest={() => setTestRunning(false)} />
          :
        <div>
          <InputField />  
          <Results 
            score={score}
            misses={misses}
            numberOfSkips={numberOfSkips} />
        </div>
      }
      <div style={{ position: 'fixed', left: 20, bottom: 40, color: '#1F2633' }}>{ 'score ' + score }</div>
      <div style={{ position: 'fixed', left: 20, bottom: 20, color: '#1F2633' }}>{ 'misses ' + misses }</div>
    </Background>
  )
}
