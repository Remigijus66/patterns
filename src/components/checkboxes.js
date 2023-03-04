import React, { useContext } from 'react';
import MainContext from "../context/MainContext";

const Checkboxes = () => {
  const { includeZero, setIncludeZero, includeOne, setIncludeOne, includeTwo, setIncludeTwo, includeThree, setIncludeThree, includeFour, setIncludeFour } = useContext(MainContext)

  const zero = () => {
    setIncludeZero(!includeZero)
  }

  const one = () => {
    setIncludeOne(!includeOne)
  }

  const two = () => {
    setIncludeTwo(!includeTwo)
  }

  const three = () => {
    setIncludeThree(!includeThree)
  }

  const four = () => {
    setIncludeFour(!includeFour)
  }

  return (
    <div className='checkboxes'>
      <Checkbox
        label="0"
        value={includeZero}
        onChange={zero}
      />
      <Checkbox
        label="1"
        value={includeOne}
        onChange={one}
      />
      <Checkbox
        label="2"
        value={includeTwo}
        onChange={two}
      />
      <Checkbox
        label="3"
        value={includeThree}
        onChange={three}
      />
      <Checkbox
        label="4"
        value={includeFour}
        onChange={four}
      />
    </div>
  )
}

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
}

export default Checkboxes