import React, { useContext, useRef } from 'react';
import { useEffect, useState } from 'react';
import MainContext from "../context/MainContext";
import Checkboxes from './checkboxes';
const Settings = () => {

  const { setShowSettings, showSettings, setColor, setSpeed, setSize } = useContext(MainContext)
  const speedRef = useRef()
  const sizeRef = useRef()


  const palette = ['green', 'red', 'blue', 'yellow', 'orange', 'cyan']



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
      </div >
    </div >

  );
};
export default Settings