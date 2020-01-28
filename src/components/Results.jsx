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

export default function Results(props) {
  const classes = useStyles()

  return (
    <div className={classes.results}>
      <div>
        <p>{`Found ${props.score} of ${props.numberOfSkips} skips`}</p>
        <p>{`Clicked to miss ${props.misses} times`}</p>
      </div>
    </div>
  )
}
