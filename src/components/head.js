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
  }

  const oneCycle = () => {
    setCycle(cycle + 1)
  }

  // const makeGo = () => {
  //   setTimer(true)
  // }
  // const makeStop = () => {
  //   setTimer(false)
  // }
  const toggleGo = () => {
    timer ? setTimer(false) : setTimer(true)
  }

  // const showSettings = () => {
  //   return
  // }


  return (

    <div>
      <h2>Neighborhood evolution</h2>
      <p>Select few cells and see development. </p>

      <button onClick={toggleGo}> {timer ? 'Stop' : 'Start'} </button>
      {/* <button onClick={makeGo}> Start </button>
      <button onClick={makeStop}> Stop </button> */}
      <button onClick={oneCycle}>One Cycle</button>
      <button onClick={reset} >Reset </button>
      <button onClick={() => setShowSettings(true)}> Settings </button>
    </div>

  );
};
export default Head