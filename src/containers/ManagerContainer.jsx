import React, { useState } from 'react'
import Background from '../components/Background'
import Clock from '../components/Clock'
import Menu from '../components/Menu'
import GameResults from '../components/GameResults'

export default function ManagerContainer() {
  const [gameInProgress, setGameInProgress] = useState(false)
  const [duration, setDuration] = useState(1) // game duration in minutes
  const [hits, setHits] = useState(0)
  const [misses, setMisses] = useState(0)

  const durationInSeconds = duration * 60

  function startGame() {
    setGameInProgress(true)
    setHits(0)
    setMisses(0)
  }
  function stopGame() {
    setGameInProgress(false)
  }
  function toggleGame() {
    return gameInProgress ? stopGame() : startGame()
  }

  return (
    <Background>
      <Menu
        gameInProgress={gameInProgress}
        toggleGame={toggleGame} />
      { gameInProgress &&
        <Clock
          endGame={() => setGameInProgress(false)}
          gameInProgress={gameInProgress}
          duration={durationInSeconds}
          addHit={() => setHits(hits + 1)}
          addMiss={() => setMisses(misses + 1)}/>
      }
      { !gameInProgress &&
        <GameResults
          hits={hits}
          misses={misses} />
      }
      <div style={{ position: 'fixed', left: 20, bottom: 40, color: '#1F2633' }}>{ 'hits ' + hits }</div>
      <div style={{ position: 'fixed', left: 20, bottom: 20, color: '#1F2633' }}>{ 'misses ' + misses }</div>
    </Background>
  )
}
