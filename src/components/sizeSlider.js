
import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import MainContext from "../context/MainContext";

// to instal: npm i react-slider
// https://zillow.github.io/react-slider/

const SizeSlider = () => {

  const { size, setSize, } = useContext(MainContext)

  // const [currentValue, setCurrentValue] = useState(0);

  return (
    <div> Field size
      {/* <p>Field size</p> */}
      <ReactSlider className="customSlider" trackClassName="customSlider-track" thumbClassName="customSlider-thumb" markClassName="customSlider-mark" marks={[10, 30, 50, 70]} min={10} max={70} step={20} defaultValue={70} value={size} onChange={(value) => setSize(value)} renderMark={(props) => {
        if (props.key < size) {
          props.className = "customSlider-mark customSlider-mark-before";
        } else if (props.key === size) {
          props.className = "customSlider-mark customSlider-mark-active";
        }
        return <span {...props} />;
      }} />
    </div>
  );
};

export default SizeSlider;
