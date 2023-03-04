
import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import MainContext from "../context/MainContext";

const SpeedSlider = () => {

  const { setSpeed, } = useContext(MainContext)
  const [currentValue, setCurrentValue] = useState(3)

  return (
    <div className="slider-box" >
      <label id="speed-label">Speed</label>
      <ReactSlider className="customSlider" trackClassName="customSlider-track" thumbClassName="customSlider-thumb" markClassName="customSlider-mark" marks={[1, 2, 3]} min={1} max={3} step={1} defaultValue={3} value={currentValue} onChange={(value) => { setCurrentValue(value); setSpeed(value === 3 ? 10 : value === 2 ? 300 : 500) }} renderMark={(props) => {
        if (props.key < currentValue) {
          props.className = "customSlider-mark customSlider-mark-before"
        } else if (props.key === currentValue) {
          props.className = "customSlider-mark customSlider-mark-active"
        }
        return <span {...props} />
      }} renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>} />
    </div>
  )
}

export default SpeedSlider
