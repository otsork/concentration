import React from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'

const useStyles = makeStyles({
  input: {
    color: colors.white,
    marginBottom: '100px',
    textAlign: 'center'
  },
  numberField: {
    borderRadius: '4px',
    marginLeft: '85px',
    marginRight: '85px'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '80px',
    height: '25px',
    fontSize: '16px',
    zIndex: 999,
    borderRadius: '5px',
    backgroundColor: colors.white,
    marginTop: '20px',
    marginLeft: '75px',
    marginRight: '75px'
  }
})

export default function InputField() {
  const classes = useStyles()

return (
  <div className={classes.input}>
    <form>
      <p>Test duration (minutes):</p>
      <input className={classes.numberField} type="number" min="1" max="30" />
      <button className={classes.button}>Set</button>
    </form>
  </div>
  )
}