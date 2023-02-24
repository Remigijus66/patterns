import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import MainContext from "../context/MainContext";
const Head = ({ }) => {


  const { cycle, setCycle, setTimer, timer, ground, setGround, showSettings, setShowSettings } = useContext(MainContext)

  const reset = () => {
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

    <div>
      <h3>Select few cells and see how the pattern develop. </h3>
      <button onClick={toggleGo}> {timer ? 'Stop' : 'Start'} </button>
      <button onClick={oneCycle}>One Step</button>
      <button onClick={reset} >Reset</button>
      <button onClick={() => { setShowSettings(true); console.log('showSettings ===', showSettings) }}> Settings </button>
    </div>

  );
};
export default Head