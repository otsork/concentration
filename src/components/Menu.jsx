import React from 'react'

export default function Menu(props) {
  // temporary styles until material-ui/styles is being used
  const temporaryWrapperStyles = {
    display: 'flex',
    position: 'fixed',
    top: '0',
    height: '20px',
    width: '100%',
    justifyContent: 'space-between'
  }

  const tempButtonStyles = {
    display: 'flex',
    width: 100,
    height: 30,
    fontSize: 20,
    zIndex: 999,
    justifyContent: 'center',
    marginTop: '16px'
  }

  function decorator(event, func) {
    event.stopPropagation()
    func()
  }

  return (
    <div style={temporaryWrapperStyles}>
      <button style={tempButtonStyles} onClick={event => decorator(event, props.start)}>Start</button>   
      <button style={tempButtonStyles} onClick={event => decorator(event, props.start)}>Stop</button>
    </div>
  )
}
