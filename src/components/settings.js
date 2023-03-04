import React, { useContext } from 'react';
import MainContext from "../context/MainContext";
import Checkboxes from './checkboxes';
import SizeSlider from './sizeSlider';
import SpeedSlider from './speedSlider';
const Settings = () => {

  const { setShowSettings, color, setColor, setSpeed, setSize, ground, setGround, setCycle, setIncludeZero, setIncludeOne, setIncludeTwo, setIncludeThree, setIncludeFour } = useContext(MainContext)

  const palette = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'indigo']

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
    setSize(50)
    setIncludeZero(false)
    setIncludeOne(false)
    setIncludeTwo(true)
    setIncludeThree(false)
    setIncludeFour(false)
    // sets for size 70
    // const travelersSet = [11, 12, 31, 32, 50, 53, 191, 192, 1514, 1515, 3039, 3040, 3041, 3180, 3181, 3182, 2455, 2456, 2525, 2526, 3489, 3490, 3559, 3560]
    // const travelersSet = [2, 5, 143, 144, 1413, 1414, 1483, 1484, 2242, 2245, 2383, 2384, 3246, 3247, 3343, 3344, 3345, 3482, 3483, 3484]
    const travelersSet = [352, 355, 453, 454, 365, 366, 415, 416, 1252, 1255, 1353, 1354, 1490, 1491, 1492, 1589, 1590, 1591, 1521, 1522,]

    plant(travelersSet)
  }

  const spinners = () => {
    setSpeed(10)
    setColor('green')
    setSize(50)
    setIncludeZero(false)
    setIncludeOne(false)
    setIncludeTwo(true)
    setIncludeThree(false)
    setIncludeFour(false)
    // set for size 70
    // const spinnersSet = [432, 501, 455, 524, 480, 549, 1557, 1561, 1628, 1630, 1585, 1589, 1656, 1658, 2903, 2904, 2905, 2906, 3042, 3043, 3044, 3045, 3930, 3932, 4070, 4072, 3978, 3980, 4118, 4120]
    const spinnersSet = [157, 206, 175, 224, 194, 243, 710, 714, 761, 763, 732, 736, 783, 785, 1220, 1221, 1222, 1223, 1319, 1320, 1321, 1322, 1756, 1758, 1856, 1858, 1788, 1790, 1888, 1890]
    plant(spinnersSet)
  }

  const squares = () => {
    setSpeed(10)
    setColor('red')
    setSize(50)
    setIncludeZero(false)
    setIncludeOne(true)
    setIncludeTwo(false)
    setIncludeThree(false)
    setIncludeFour(false)
    const squaresSet = [1225]
    plant(squaresSet)
  }

  const carpet = () => {
    setSpeed(10)
    setColor('orange')
    setSize(50)
    setIncludeZero(false)
    setIncludeOne(false)
    setIncludeTwo(true)
    setIncludeThree(true)
    setIncludeFour(false)
    const carpetSet = [1225, 1226, 1275, 1276]
    plant(carpetSet)
  }

  return (
    <div className='popup-container'>
      <div className='popup'>
        <header className="popup-header">
          <div className='popup-name'>
            <h5>Settings</h5>
          </div>
          <div style={{ cursor: 'pointer', border: '1px solid black', padding: '10px', textDecoration: 'bold' }} onClick={() => setShowSettings(false)}>X</div>
        </header>
        <div className='popup-controls'>
          <div className='colors-container'>
            {palette.map((x, i) => <div style={{ backgroundColor: x }} onClick={() => setColor(x)} className={`box ${x === color ? 'selected' : ''}`} key={i}>  </div>)}
          </div>
          <label> Number of neighbours affecting </label>
          <Checkboxes />
          <SizeSlider />
          <SpeedSlider />
          <label htmlFor="">Presets</label>
          <div className='presets'>
            <button className='preset' onClick={() => travelers()} > travelers </button>
            <button className='preset' onClick={() => spinners()} > spinners </button>
            <button className='preset' onClick={() => squares()} > squares </button>
            <button className='preset' onClick={() => carpet()} > carpet </button>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Settings