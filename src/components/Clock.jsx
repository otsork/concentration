import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  clockDial: {
    height: '90vh',
    width: '90vh',
    borderRadius: '50%',
  },
  dot: {
    position: 'absolute',
    top: '0',
    left: '49.5%',
    width: '2vh',
    height: '2vh',
    backgroundColor: 'white',
    borderRadius: '50%',
  }
})

export default function Clock(props) {
  const [timer, setTimer] = useState(0)
  const classes = useStyles()

  useEffect(() => {
    let timerId = setInterval(() => updateTimer(), 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  })

  function updateTimer() {
    setTimer(timer + 1)
  }

  const angle = timer * 6
  function callback(time) {
    props.getTime(time)
  }
  callback(timer)
  return (
    <div style={{ transform: `rotate(${angle}deg)` }} className={classes.clockDial}>
      <div className={classes.dot} />
    </div>
  )
}
