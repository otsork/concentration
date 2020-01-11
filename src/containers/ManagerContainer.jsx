import React, { useState } from 'react'
import Background from '../components/Background'
import Clock from '../components/Clock'
import Menu from '../components/Menu'


export default function ManagerContainer() {
  const [count, setCount] = useState(0)

  const angle = count * 6
  return (
    <div>
      <Background text='text, just to show how props work in functional components' updateTimer={() => setCount(count + 1)}>
      <Clock angle={angle} />
      </Background>
    </div>
  )
}
