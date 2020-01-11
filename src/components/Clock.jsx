import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'

import { getStepsToBeSkipped } from '../utils/helpers'

const useStyles = makeStyles({
  clockDial: {
    height: '90vh',
    width: '90vh',
    borderRadius: '50%',
    border: '1px solid yellow'
  },
  dot: {
    position: 'absolute',
    top: '0',
    left: '49.5%',
    width: '2vh',
    height: '2vh',
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  dotGreen: {
    backgroundColor: 'green'
  }
})

/*
When ready, refactor so that "timer" and "userShouldReact"
and "skipSteps" states are held in the ManagerContainer
*/

export default function Clock({ setVisualTimer, duration, addHit, addMiss }) {
  const [timer, setTimer] = useState(0)
  const [skipSteps, setSkipSteps] = useState([5, 10, 15, 20, 25, 30, 35, 40, 45])
  const [userShouldReact, setUserShouldReact] = useState(false)
  const classes = useStyles()

  // useEffect(() => setSkipSteps(getStepsToBeSkipped(duration)), [])
  useEffect(() => {
    async function flashReactionWindow() {
      setUserShouldReact(true)
      setTimeout(() => setUserShouldReact(false), 1500)
    }
    function skipStep() {
      setTimer(timer + 2)
      flashReactionWindow()
    }
    function updateTimer() {
      if (skipSteps.includes(timer + 1)) skipStep()
      else setTimer(timer + 1)
    }
    let second = setInterval(() => updateTimer(), 1000)
    return function cleanup() {
      clearInterval(second)
    }
  }, [timer, skipSteps])

  const calcaulateAngle = timer * 6

  setVisualTimer(timer)

  // ADD EVENT LISTENER FOR SPACE KEY AND HANDLE HITS AND MISSES
  return (
    <div style={{ transform: `rotate(${calcaulateAngle}deg)` }} className={classes.clockDial}>
      <div className={`${classes.dot} ${userShouldReact && classes.dotGreen}`} />
    </div>
  )
}
