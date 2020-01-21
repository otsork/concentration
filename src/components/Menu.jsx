import React from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'

const styles = makeStyles({
  menuWrapper: {
    display: 'flex',
    position: 'fixed',
    top: '0',
    height: '20px',
    width: '100%',
    justifyContent: 'space-between'
  },
  button: {
    display: 'flex',
    width: 100,
    height: 30,
    fontSize: 20,
    zIndex: 999,
    justifyContent: 'center',
    marginTop: '16px',
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

export default function Menu({ gameInProgress, toggleGame }) {
  const classes = styles()

  return (
    <div className={classes.menuWrapper}>
      <button className={`${classes.button} ${gameInProgress && classes.buttonDark}`} onClick={toggleGame}>{ gameInProgress ? 'Stop' : 'Start' }</button>
    </div>
  )
}
