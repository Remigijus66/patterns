
import React, { useContext } from "react";
import ReactSlider from "react-slider";
import MainContext from "../context/MainContext";

const SizeSlider = () => {

  const { size, setSize, } = useContext(MainContext)

  return (
    <div className="slider-box">
      <label id="size-label">Field size</label>
      <ReactSlider className="customSlider" trackClassName="customSlider-track" thumbClassName="customSlider-thumb" markClassName="customSlider-mark" marks={[10, 30, 50, 70]} min={10} max={70} step={20} defaultValue={70} value={size} ariaLabelledby="size-label" onChange={(value) => setSize(value)} renderMark={(props) => {
        if (props.key < size) {
          props.className = "customSlider-mark customSlider-mark-before"
        } else if (props.key === size) {
          props.className = "customSlider-mark customSlider-mark-active"
        }
        return <span {...props} />
      }} renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>} />
    </div>
  )
}

export default SizeSlider
