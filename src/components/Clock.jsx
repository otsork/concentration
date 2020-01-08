import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  clockDial: {
    height: '90vh',
    width: '90vh',
    border: '2px solid yellow',
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
  const classes = useStyles()
  const { angle } = props

  return (
    <div style={{ transform: `rotate(${angle}deg)` }} className={classes.clockDial}>
      <div className={classes.dot} />
    </div>
  )
}
