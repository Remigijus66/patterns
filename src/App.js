import './App.css';
import { useState } from 'react';
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
  return (
    <div className="a-center d-flex f-column">
      <MainContext.Provider value={states}>
        {showSettings && <Settings />}
        <Head />
        <Ground />
      </MainContext.Provider>
    </div>
  );
}

export default App;
