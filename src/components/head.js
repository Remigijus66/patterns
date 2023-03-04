import React, { useContext } from 'react';
import MainContext from "../context/MainContext";
const Head = () => {

  const { cycle, setCycle, setTimer, timer, ground, setGround, setShowSettings } = useContext(MainContext)

  const reset = () => {
    console.log('reset')
    const groundCopy = [...ground]
    groundCopy.forEach((e) => {
      e.clicked = 0;
      e.neighbours = 0;
    })
    setGround(groundCopy)
    setCycle(0)
  }

  const oneCycle = () => {
    setCycle(cycle + 1)
  }

  const toggleGo = () => {
    timer ? setTimer(false) : setTimer(true)
  }

  return (
    <div className='header-container'>
      <h3>Select few cells and see how the pattern develops </h3>
      <div className='buttons'>
        <button className={`startStopBtn ${timer ? 'start' : 'stop'}`} onClick={toggleGo}> {timer ? 'Stop' : 'Start'} </button>
        <div>
          {!timer && <button onClick={oneCycle}>One Step</button>}
          {!timer && <button onClick={reset} >Reset</button>}
          <button onClick={() => setShowSettings(true)}> Settings </button>
        </div>
      </div>
    </div>
  )
}

export default Head