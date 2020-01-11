import React, { useState } from 'react'
import Background from '../components/Background'
import Clock from '../components/Clock'
import Menu from '../components/Menu'

export default function ManagerContainer() {
  const [visualTimer, setVisualTimer] = useState(0)
  const [gameInProgress, setGameInProgress] = useState(false)
  const [duration, setDuration] = useState(5) // game duration in minutes
  const [hits, setHits] = useState(0)
  const [misses, setMisses] = useState(0)

  const durationInSeconds = duration * 60

  if (visualTimer === durationInSeconds) setGameInProgress(false)

  return (
    <Background>
      <Menu
        gameInProgress={gameInProgress}
        toggleGame={() => setGameInProgress(!gameInProgress)} />
      { gameInProgress &&
        <Clock
          duration={durationInSeconds}
          setVisualTimer={(time) => setVisualTimer(time)}
          addHit={() => setHits(hits + 1)}
          addMiss={() => setMisses(misses + 1)}/>
      }

      <div style={{ position: 'fixed', left: 20, top: 100, color: 'white' }}>{ visualTimer }</div>
    </Background>
  )
}
