import { useState } from 'react'
import Card from '../../components/UI/Card'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  // handle increase counter button event
  const increaseCounterHandler = event => {
    setCounter(prevCounter => prevCounter + 1)
  }
  // handle reset counter button event
  const resetCounterHandler = event => {
    setCounter(0)
  }

  return (
    <Card style={{textAlign: 'center'}}>
      <h2>{counter}</h2>
      <button className='btn'
        style={{marginRight: 5}}
        onClick={increaseCounterHandler}>
        Increase Counter
      </button>
      <button className='btn' onClick={resetCounterHandler}>
        Reset
      </button>
    </Card>
  )
}

export default Counter
