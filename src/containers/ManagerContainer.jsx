import React, { useState } from 'react'
import Background from '../components/Background'
import Clock from '../components/Clock'
import Menu from '../components/Menu'

export default function ManagerContainer() {
  const [timer, setTimer] = useState(0)

  return (
    <Background>
      <Menu start={() => console.log('start pressed')} stop={() => console.log('stop pressed')} />
      <Clock getTime={(time) => setTimer(time)} />
      <div style={{ position: 'fixed', left: 20, top: 100, color: 'white' }}>{timer}</div>
    </Background>
  )
}
