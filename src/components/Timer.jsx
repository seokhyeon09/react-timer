import React, { useRef, useState } from 'react'
import TimerDisplay from './TimerDisplay'
import Button from './Button'
import './Timer.css'

const Timer = () => {

  const [time, setTime]=useState(0)
  //상태: 초기화, 실행중, 일시정지
  const [status, setStatus]=useState('초기화')
  const intervalRef = useRef(null)

  const formatTime=(time)=>{
    const minutes=Math.floor(time/60)
    const seconds=time % 60
    //두자리 표시, 공백이있을경우 디폴드값을 0으로 
    return `${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`
  }
  const startTimer=()=>{
    if(status!=='실행중'){
      setStatus('실행중')
      intervalRef.current=setInterval(()=>{
        setTime(prevTime=>prevTime+1)
      },1000)
    }
  }
  const pauseTimer = () =>{
    if(status ==='실행중'){
      clearInterval(intervalRef.current)
      setStatus('일시 정지')
    }
  }
  const resetTimer = () =>{
      clearInterval(intervalRef.current)
      setTime(0)
      setStatus('초기화')
  }

  const buttons = [
    {className:'start', value:'시작', onClick:startTimer},
    {className:'pause', value:'일시 정지', onClick:pauseTimer},
    {className:'reset', value:'초기화', onClick:resetTimer},
  ]
  return (
    <div className='timer-container'>
        <TimerDisplay time={formatTime(time)} />
        {buttons.map((button, i)=>(
          <Button key={i} {...button  }/>
        ))}
        <p className='status'>상태 : {status}</p>
    </div>
  )
}

export default Timer