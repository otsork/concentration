import React from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'
import InputField from './InputField'

const styles = makeStyles({
  menuWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '10px',
    left: '10px'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '100px',
    height: '30px',
    fontSize: '20px',
    zIndex: 999,
    borderRadius: '5px',
    backgroundColor: colors.white,
    cursor: 'pointer',
    marginBottom: '20px'
  },
  buttonDark: {
    backgroundColor: colors.black,
    color: colors.darkBlue,
    border: `1px solid ${colors.darkBlue}`,
    '&:focus': {
      outline: 'none'
    }
  }
})

export default function Menu(props) {
  const classes = styles()
  const { testRunning, toggleTestRunning, setDurationInMinutes, durationInMinutes } = props

  return (
    <div className={classes.menuWrapper}>
      <button
        className={`${classes.button} ${testRunning && classes.buttonDark}`} 
        onClick={toggleTestRunning}>
          { testRunning ? 'Stop' : 'Start' }
      </button>
      {!testRunning && <InputField durationInMinutes={durationInMinutes} setDurationInMinutes={setDurationInMinutes} />}
    </div>
  )
}
