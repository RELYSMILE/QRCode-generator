import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import QRcode from './components/QRcode'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)
  const intervalRef = useRef(null);

  const startCount = () => {
    if(intervalRef.current) return
    intervalRef.current = setInterval(() =>{
      setCount(prev => prev + 1)
    }, 10)
  }
  const ReverseCount = () => {
    if(intervalRef.current) return
    intervalRef.current = setInterval(() =>{
      setCount(prev => prev - 1)

      if(count <=1 || intervalRef.current <=1){
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setCount(0)
    }
    }, 10)

    if(intervalRef.current <=1){
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setCount(0)
    }
  }
  const pauseCount = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const stopCount = () => {
    pauseCount()
    setCount(0)
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem 0', gap: '2rem'}}>
    <div className='board'>
      <h1 >MBI</h1>
      <div className='time-board'>
        <h1 className='miliSeconds'>{count}</h1>
        <h1 className='Seconds'>{secondCount}</h1>
      </div>
    </div>
      <div className='btn'>
        <button className='btn-start' onClick={startCount}>Start</button>
        <button className='btn-pause' onClick={pauseCount}>Pause</button>
        <button className='btn-reverse' onClick={ReverseCount}>Reverse</button>
        <button className='btn-stop' onClick={stopCount}>Stop</button>
      </div>
      <Header />
      <QRcode />
    </div>
  )
}

export default App
