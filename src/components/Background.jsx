import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  background: {
    display: 'flex',
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '40%',
    color: 'white',
    transition: 'transform 100ms', 
    '&:hover': {
      transform: 'scale(1.5)'
    }
  }
})

/*
This is a functional component, it looks a bit different than a class component.

As you can see it is a function that returns JSX (react markup).

Functional component doesn't have a render function, but what the function returns is equivalent
to a render() functions return statement, meaning that anything that it returns will be rendered.
Same rules apply though: JSX can have only one top level element, which in this case is "div" with class "background".
Within the top level element you can define multiple elements or call other components freely.

Also because it is not a class, we dont need to use "this" to access its props.
Props are passed to it as arguments and used similarly as in any other function,
after all, it is just a function
*/
export default function Background(props) {
  const classes = useStyles()
  const { text } = props

  return (
    <div className={classes.background} onClick={props.updateTimer}>
      {props.children}
      <p className={classes.text}>{text}</p>
    </div>
  )
}
