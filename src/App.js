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
  const states = {
    ground, setGround,
    cycle, setCycle,
    timer, setTimer,
    showSettings, setShowSettings,
    size, setSize
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
