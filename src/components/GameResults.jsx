import React from 'react'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles ({
  results: {
    width: '50%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
})

// this is the last amount of code for a JSX functional component. A function that returns a div
export default function GameResults(props) {
  // define variable that refers to classes and assign it to refer to style object above
  const classes = useStyles()
  const displayResult = `Found ${props.hits} of ${props.totalSkips} skips`

  return (
    <div className={classes.results}>
      <div>
        <p>{displayResult}</p>
      </div>
    </div>
  )
}
// try to look examples from other components, 
// try to reason what happens on each line that you are trying to use
// ask _when_ you get stuck ^^
