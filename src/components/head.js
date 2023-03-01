import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import MainContext from "../context/MainContext";
const Head = () => {

  const { cycle, setCycle, setTimer, timer, ground, setGround, showSettings, setShowSettings, size } = useContext(MainContext)

  const reset = () => {

    for (let row = 0; row < size / 2; row += 1) {
      let upper = size / 2 - row - 1
      let lower = size / 2 + row
      setTimeout(() => {
        for (let column = 0; column < size; column++) {
          ground[upper * size + column].shine = true
          ground[lower * size + column].shine = true
          ground[upper * size + column].clicked = 0
          ground[lower * size + column].clicked = 0
          ground[upper * size + column].neighbours = 0
          ground[lower * size + column].neighbours = 0
        }
      }, row * 60)
      setTimeout(() => {
        for (let column = 0; column < size; column++) {
          ground[upper * size + column].shine = false
          ground[lower * size + column].shine = false
        }
      }, row * 70)

    }

  }


  const oneCycle = () => {
    setCycle(cycle + 1)
  }

  const toggleGo = () => {
    timer ? setTimer(false) : setTimer(true)
  }

  return (

    <div className='header-container'>
      <h3>Select few cells and see how the pattern develop. </h3>
      <div className='buttons'>

        <button className={`startStopBtn ${timer ? 'start' : 'stop'}`} onClick={toggleGo}> {timer ? 'Stop' : 'Start'} </button>
        <div>

          {!timer && <button onClick={oneCycle}>One Step</button>}
          {!timer && <button onClick={reset} >Reset</button>}
          <button onClick={() => setShowSettings(true)}> Settings </button>
        </div>

      </div>
    </div>

  );
};
export default Head