import React from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'
import ManagerContainer from '../containers/ManagerContainer.jsx'

const useStyles = makeStyles({
  input: {
    color: colors.white,
    marginBottom: "15vh"
  },
  numberField: {
    borderRadius: "4px",
    marginLeft: "3vw"
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
    marginTop: "2vh",
    marginLeft: "2.5vw"
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