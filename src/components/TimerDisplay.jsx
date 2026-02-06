import React from 'react'

const TimerDisplay = ({time}) => {
  return (
    <div>
      <p className='seconds'>
        {time}
        
      </p>
    </div>
  )
}

export default TimerDisplay