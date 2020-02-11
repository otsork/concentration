import React, { useState } from 'react'
import Background from '../components/Background'
import Clock from '../components/Clock'
import Menu from '../components/Menu'
import Results from '../components/Results'

export default function ManagerContainer() {
  const [testRunning, setTestRunning] = useState(false)
  const [durationInMinutes, setDurationInMinutes] = useState(30)
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

  console.log(durationInMinutes)
  return (
    <Background>
      <Menu
        testRunning={testRunning}
        toggleTestRunning={toggleTestRunning}
        setDurationInMinutes={setDurationInMinutes}
        durationInMinutes={durationInMinutes} />
      {
        testRunning ? 
        <Clock
          durationInSeconds={durationInSeconds}
          setNumberOfSkips={setNumberOfSkips}
          incrementScore={async () => setScore(score + 1)}
          incrementMisses={async () => setMisses(misses + 1)}
          endTest={() => setTestRunning(false)} />
        :
        <Results 
          score={score}
          misses={misses}
          numberOfSkips={numberOfSkips} />
      }
    </Background>
  )
}
