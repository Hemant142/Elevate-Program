import React, {  useEffect, useRef, useState } from 'react'

export default function StopWatch() {
    const [time,setTime]=useState(0)
    const [isStarted,setIsStarted]=useState(false)
    const isTime=useRef(false)
    // useEffect(() => {
    //     let intervalId;
    //     if (isStarted) {
    //         intervalId = setInterval(()=>{
    //             setTime(time+1)
    //         },1000)
    //     }
    //     return () => clearInterval(intervalId)
    // }, [isStarted, time])


     useEffect(() => {
       
        if (isStarted) {
      isTime.current=  setTimeout(()=>{
                setTime(time+1)
            },1000)
        }
       
    }, [isStarted, time])

    // console.log(time)
  return (
    <div>
        <h1>StopWatch</h1>
        <div className="stopwatch">
            <div className="stopwatch-display">
                <span>{time}</span>
            </div>
            <div className="stopwatch-controls">
                <button className="start" onClick={() => setIsStarted(true)}>Start</button>
                <button className="stop" onClick={() => {setIsStarted(false); clearTimeout(isTime.current); }}>Stop</button>
                <button className="reset" onClick={() => { setIsStarted(false); setTime(0); }}>Reset</button>
            </div>
    </div>
    </div>
  )
}
