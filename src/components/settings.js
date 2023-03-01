import React, { useContext, useRef } from 'react';
import { useEffect, useState } from 'react';
import MainContext from "../context/MainContext";
import Checkboxes from './checkboxes';
const Settings = () => {

  const { setShowSettings, showSettings, setColor, setSpeed, setSize, ground, setGround, setCycle, setIncludeZero, setIncludeOne, setIncludeTwo, setIncludeThree, setIncludeFour } = useContext(MainContext)
  const speedRef = useRef()
  const sizeRef = useRef()

  const palette = ['green', 'red', 'blue', 'yellow', 'orange', 'cyan']

  const plant = (arr) => {
    const groundCopy = [...ground]
    groundCopy.forEach((e, i) => {
      arr.includes(i) ? e.clicked = 1 : e.clicked = 0
      e.neighbours = 0
    })
    setGround(groundCopy)
    setCycle(0)
  }

  const travelers = () => {
    setSpeed(10)
    setColor('blue')
    setSize(70)
    setIncludeZero(false)
    setIncludeOne(false)
    setIncludeTwo(true)
    setIncludeThree(false)
    setIncludeFour(false)
    // const travelersSet = [11, 12, 31, 32, 50, 53, 191, 192, 1514, 1515, 3039, 3040, 3041, 3180, 3181, 3182, 2455, 2456, 2525, 2526, 3489, 3490, 3559, 3560]
    const travelersSet = [2, 5, 143, 144, 1413, 1414, 1483, 1484, 2242, 2245, 2383, 2384, 3246, 3247, 3343, 3344, 3345, 3482, 3483, 3484]

    plant(travelersSet)
  }

  const spinners = () => {
    setSpeed(10)
    setColor('green')
    setSize(70)
    setIncludeZero(false)
    setIncludeOne(false)
    setIncludeTwo(true)
    setIncludeThree(false)
    setIncludeFour(false)
    const spinnersSet = [432, 501, 455, 524, 480, 549, 1557, 1561, 1628, 1630, 1585, 1589, 1656, 1658, 2903, 2904, 2905, 2906, 3042, 3043, 3044, 3045, 3930, 3932, 4070, 4072, 3978, 3980, 4118, 4120]
    plant(spinnersSet)
  }

  const squares = () => {
    setSpeed(10)
    setColor('red')
    setSize(70)
    setIncludeZero(false)
    setIncludeOne(true)
    setIncludeTwo(false)
    setIncludeThree(false)
    setIncludeFour(false)
    // const squaresSet = [2065]
    const squaresSet = [2414]
    plant(squaresSet)
  }

  const carpet = () => {
    console.log('setting carpet')
    setSpeed(10)
    setColor('orange')
    setSize(70)
    setIncludeZero(false)
    setIncludeOne(false)
    setIncludeTwo(true)
    setIncludeThree(true)
    setIncludeFour(false)
    const carpetSet = [2414, 2415, 2484, 2485]
    plant(carpetSet)
  }



  return (
    <div className='popup-container'>
      <div className='popup'>

        <div className="closeBtn d-flex space-btw">
          <div className='d-flex a-center'><h5>Settings</h5></div>
          <div style={{ cursor: 'pointer', border: '1px solid black', padding: '10px', textDecoration: 'bold' }} onClick={() => setShowSettings(false)}>X</div>
        </div>
        <div className='d-flex f-wrap'>
          {palette.map((x, i) => <div style={{ backgroundColor: x }} onClick={() => setColor(x)} className='box' key={i}>  </div>)}
        </div>

        <button> Kaimynai </button>
        <Checkboxes />

        <button onClick={() => setSpeed(speedRef.current.value)} > Greitis </button>
        <input type={'number'} ref={speedRef} placeholder={10} />
        <button onClick={() => setSize(sizeRef.current.value)} > Dydis  </button>
        <input type={'number'} ref={sizeRef} placeholder={70} />


        <button onClick={() => { setShowSettings(false); console.log('showSettings ===', showSettings); }}> Hide Settings </button>
        <label htmlFor="">Presets</label>
        <button onClick={() => travelers()} > travelers </button>
        <button onClick={() => spinners()} > spinners </button>
        <button onClick={() => squares()} > squares </button>
        <button onClick={() => carpet()} > carpet </button>
      </div >
    </div >

  );
};
export default Settings