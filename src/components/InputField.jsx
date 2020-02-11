import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { white } from '../constants/colors.js'
import { allowMinMaxNumber } from '../utils/helpers'

const useStyles = makeStyles({
  text: {
    display: 'flex',
    color: white,
    margin: 0,
    cursor: 'pointer'
  },
  inputField: {
    all: 'unset',
    borderRadius: '4px',
    width: '40px',
    marginLeft: '25px',
    color: white
  },
  editable: {
    display: 'flex',
    justifyContent: 'center',
    width: '50px',
    maxWidth: '50px',
    padding: '0 5px',
    fontWeight: 'bold',
    appearance: 'textfield'
  }
})

export function InputField(props) {
  const classes = useStyles()
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    if (editing) document.getElementById('inputField').focus()
  }, [editing])


  function setInputValue(event) {
    event.persist()
    if (event.key === 'Enter' || event.type === 'blur') {
      props.setDuration(allowMinMaxNumber(5, 60, event.target.value))
      setEditing(false)
    }
  }

  function getEditable() {
    if (editing) {
      return (
        <input
          id='inputField'
          type="number"
          defaultValue={props.duration}
          className={`${classes.inputField} ${classes.editable}`}
          onBlur={(event) => setInputValue(event)}
          onKeyDown={(event) => setInputValue(event)} />
      )
    }
    return <div className={`${classes.text} ${classes.editable}`}>{props.duration}</div>
  }

  return (
    <div className={classes.text} onClick={() => setEditing(true)}>
      Test duration: {getEditable()} min
    </div>
  )
}

export default InputField
