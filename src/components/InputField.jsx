import React from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'

const useStyles = makeStyles({
  input: {
    color: colors.white
  },
  numberField: {
    borderRadius: '4px',
    width: '40px',
    marginLeft: '25px'
  }
})

export function InputField(props) {
  const classes = useStyles()


  function setInputValue(event) {
    event.persist()
    const inputValue = event.target.valueAsNumber
    if (inputValue > 30) props.setDuration(30)
    else if (inputValue < 5 || !inputValue) props.setDuration(5)
    else props.setDuration(inputValue)
  }
  return (
    <div className={classes.input}>
      <p>Test duration (min):</p>
      <input
        value={props.duration}
        className={classes.numberField} 
        type="number"
        onChange={(event) => setInputValue(event)} />
    </div>
  )
}

export default InputField