import './App.css';
import { useEffect, useState } from 'react';
import Ground from './components/ground';
import MainContext from './context/MainContext';
import Head from './components/head';
import Settings from './components/settings';

function App() {
  const [size, setSize] = useState(70);
  const [ground, setGround] = useState([]);
  const [cycle, setCycle] = useState(0)
  const [timer, setTimer] = useState(false);
  const [showSettings, setShowSettings] = useState(false)
  const [color, setColor] = useState('green')
  const [speed, setSpeed] = useState(10)
  const [includeZero, setIncludeZero] = useState(false)
  const [includeOne, setIncludeOne] = useState(false)
  const [includeTwo, setIncludeTwo] = useState(true)
  const [includeThree, setIncludeThree] = useState(true)
  const [includeFour, setIncludeFour] = useState(false)
  const [angle, setAngle] = useState(90)
  const [percent, setPercent] = useState(50)
  const [increment, setIncrement] = useState(-1)
  const [firstColorIndex, setFirstColorIndex] = useState(0)
  const [secondColorIndex, setSecondColorIndex] = useState(1)


  const states = {
    ground, setGround,
    cycle, setCycle,
    timer, setTimer,
    showSettings, setShowSettings,
    size, setSize,
    color, setColor,
    speed, setSpeed,
    includeZero, setIncludeZero,
    includeOne, setIncludeOne,
    includeTwo, setIncludeTwo,
    includeThree, setIncludeThree,
    includeFour, setIncludeFour
  }
  const backgroundColors = ['green', 'red', 'blue', 'yellow', 'orange', 'cyan']

  useEffect(() => {
    setTimeout(() => {
      setAngle(angle + 1);
      setPercent(percent + increment)
      if (angle >= 360) setAngle(0)
      if (percent >= 100) {
        setIncrement(-1)
        setPercent(99)
        secondColorIndex === backgroundColors.length - 1 ? setSecondColorIndex(0) : setSecondColorIndex(secondColorIndex + 1)
      }
      if (percent === -100) {
        setIncrement(3)
        setPercent(-99)
        firstColorIndex === backgroundColors.length - 1 ? setFirstColorIndex(0) : setFirstColorIndex(firstColorIndex + 1)
      }
      clearTimeout();
    }, 100)

  }, [angle]);


  return (
    <div style={{ background: `linear-gradient(${angle}deg, ${backgroundColors[firstColorIndex]} ${percent}%, ${backgroundColors[secondColorIndex]}` }} className="a-center d-flex f-column"  >

      <MainContext.Provider value={states}>
        {showSettings && <Settings />}
        <Head />
        <Ground />
      </MainContext.Provider>
    </div>
  );
}

export default App;
