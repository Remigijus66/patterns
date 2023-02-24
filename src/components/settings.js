import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import MainContext from "../context/MainContext";
const Settings = () => {

  const { setShowSettings } = useContext(MainContext)


  return (
    <div className='popup-container'>
      <div className='popup'>

        <div className="closeBtn d-flex space-btw">
          <div className='d-flex a-center'><h5>Place your bids</h5></div>
          <div style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }} onClick={() => setShowSettings(false)}>X</div>
        </div>

        <button> Spalvos </button>
        <button> Kaimynai </button>

        <button onClick={() => setShowSettings(false)}> Hide Settings </button>
      </div >
    </div >

  );
};
export default Settings