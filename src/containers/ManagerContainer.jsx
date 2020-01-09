import React, { useState } from 'react'
import Background from '../components/Background'
import Clock from '../components/Clock'
import Menu from '../components/Menu'

export default function ManagerContainer() {
  const [count, setCount] = useState(0)

  const angle = count * 6

  function updateTimer() {
    setCount(count + 1)
  }

  return (
    <Background updateTimer={updateTimer}>
      <Menu start={() => console.log('start pressed')} stop={() => console.log('stop pressed')}/>
      <Clock angle={angle} />
    </Background>
  )
}