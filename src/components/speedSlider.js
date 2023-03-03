
import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import MainContext from "../context/MainContext";

// to instal: npm i react-slider
// https://zillow.github.io/react-slider/

const SpeedSlider = () => {

  const { speed, setSpeed, } = useContext(MainContext)
  const [currentValue, setCurrentValue] = useState(3);
  // setSpeed(value === 3 ? 10 : value === 2 ? 100 : 300);
  return (
    <div> Speed
      {/* <p>Field size</p> */}
      <ReactSlider className="customSlider" trackClassName="customSlider-track" thumbClassName="customSlider-thumb" markClassName="customSlider-mark" marks={[1, 2, 3]} min={1} max={3} step={1} defaultValue={3} value={currentValue} onChange={(value) => { setCurrentValue(value); setSpeed(value === 3 ? 10 : value === 2 ? 300 : 500) }} renderMark={(props) => {
        if (props.key < currentValue) {
          props.className = "customSlider-mark customSlider-mark-before";
        } else if (props.key === currentValue) {
          props.className = "customSlider-mark customSlider-mark-active";
        }
        return <span {...props} />;
      }} />
    </div>
  );
};

export default SpeedSlider;
