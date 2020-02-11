import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'
import { useOneSecondInterval } from '../utils/hooks'

import { getListOfSkips } from '../utils/helpers'

const REACTION_TIME = 1300

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingTop: '50px'
  },
  clockDial: {
    height: '90vh',
    width: '90vh',
  },
  dot: {
    position: 'absolute',
    top: '0',
    left: '49.5%',
    width: '2vh',
    height: '2vh',
    backgroundColor: colors.white,
    borderRadius: '50%',
  },
})

export default function Clock(props) {
  const classes = useStyles()
  const {
    durationInSeconds,
    setNumberOfSkips,
    incrementScore,
    incrementMisses,
    endTest
  } = props

  const [timer, setTimer] = useState(0)
  const [listOfSkips, setListOfSkips] = useState([5, 10, 15, 20, 25])
  const [clickingDisabled, setClickingDisabled] = useState(false)
  const [userShouldReact, setUserShouldReact] = useState(false)

  if (timer >= durationInSeconds) endTest()

  useEffect(() => {
    const skips = getListOfSkips(durationInSeconds)
    setListOfSkips(skips)
    setNumberOfSkips(skips.length)
  }, [durationInSeconds, setNumberOfSkips])

  useOneSecondInterval(() => {
    updateTimer()
  }, 1000)
  
  function updateTimer() {
    if (listOfSkips.includes(timer + 1)) skip()
    else setTimer(timer + 1)
  }

  function skip() {
    setTimer(timer => timer + 2)
    flashReactionWindow()
  }

  function flashReactionWindow() {
    setUserShouldReact(true)
    setTimeout(() => setUserShouldReact(false), REACTION_TIME)
  }

  function handleClick() {
    if (!userShouldReact) incrementMisses()
    else {
      incrementScore()
      setClickingDisabled(true)
      setTimeout(() => setClickingDisabled(false), REACTION_TIME)
    }
  }

  const angle = timer * 6
  return (
    <div className={classes.wrapper} onClick={clickingDisabled ? undefined : handleClick}>
      <div
        style={{ transform: `rotate(${angle}deg)` }}
        className={classes.clockDial}>
        <div className={classes.dot} />
      </div>
    </div>
  )
}
