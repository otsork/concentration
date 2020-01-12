import React from 'react'
import { makeStyles } from '@material-ui/styles'

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
    backgroundColor: 'black',
    color: '#1F2633',
    border: '1px solid #1F2633',
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
