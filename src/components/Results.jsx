import React from 'react'
import { makeStyles } from '@material-ui/styles'
import * as colors from '../constants/colors.js'

const useStyles = makeStyles ({
  results: {
    width: '15vw',
    height: '20vh',
    color: colors.white,
    textAlign: 'center'
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
