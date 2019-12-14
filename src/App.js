import React from 'react'
import Example from './components/Example'

function App() {

  const car = { make: 'Saab', model: '9-3' }

  return (
    <div className="App">
      <Example prop1='Render this string' prop2={car}/>
    </div>
  )
}

export default App
