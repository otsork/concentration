import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'

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
  dotGreen: {
    backgroundColor: colors.green
  }
})

export default function Clock(props) {
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
  const classes = useStyles()

  useEffect(() => {
    const skips = getListOfSkips(durationInSeconds)
    setListOfSkips(skips)
    setNumberOfSkips(skips.length)
  }, [durationInSeconds, setNumberOfSkips])

  useEffect(() => {
    if (timer >= durationInSeconds) endTest()
    async function flashReactionWindow() {
      setUserShouldReact(true)
      setTimeout(() => setUserShouldReact(false), REACTION_TIME)
    }
    function skip() {
      setTimer(timer + 2)
      flashReactionWindow()
    }
    function updateTimer() {
      if (listOfSkips.includes(timer + 1)) skip()
      else setTimer(timer + 1)
    }
    const second = setInterval(() => updateTimer(), 1000)
    return function cleanup() {
      clearInterval(second)
    }
  }, [timer, listOfSkips, endTest, durationInSeconds])

  function handleClick() {
    if (userShouldReact) incrementScore()
    else incrementMisses()
      
    setClickingDisabled(true)
    setTimeout(() => setClickingDisabled(false), REACTION_TIME)
  }

  const angle = timer * 6
  return (
    <div className={classes.wrapper} onClick={clickingDisabled ? undefined : handleClick}>
      <div
        style={{ transform: `rotate(${angle}deg)` }}
        className={classes.clockDial}>
        <div className={`${classes.dot} ${userShouldReact && classes.dotGreen}`} />
      </div>
    </div>
  )
}
