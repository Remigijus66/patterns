import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import MainContext from "../context/MainContext";


const Ground = () => {
  const { ground, setGround, size, cycle, setCycle, timer, color, speed, includeZero,
    includeOne,
    includeTwo,
    includeThree,
    includeFour, } = useContext(MainContext)

  useEffect(() => {
    makeField(size)
  }, [size]);

  useEffect(() => {
    if (timer) {
      const timer = setTimeout(() => {
        setCycle(cycle + 1);
        clearTimeout(timer);
      }, speed)
    }
    console.log('cycle', cycle)
    liveCycle()
  }, [cycle, timer]);


  const makeField = (s) => {
    let groundArr = []
    for (let index = 0; index < s ** 2; index++) {
      const cell = {
        clicked: 0,
        neighbours: 0,
      }
      groundArr.push(cell)
    }
    setGround(groundArr)
  }

  const setNeighbours = (n, i) => {
    const groundCopy = [...ground];
    groundCopy[i].neighbours = n;
    setGround(groundCopy)
  }

  const countNeighbours = (array, index) => {

    let neighboursArround = 0;
    if (index === 0) {
      neighboursArround = array
        .filter((e, i) => i === index + 1 || i === index + size || i === index + size + 1)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)
      return;
    }

    if (index === size - 1) {
      neighboursArround = array
        .filter((e, i) => i === index - 1 || i === index + size || i === index + size - 1)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)

      return;
    }
    if (index === size * size - size) {
      neighboursArround = array
        .filter((e, i) => i === index + 1 || i === index - size || i === index - size + 1)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)
      return;
    }
    if (index === (size * size) - 1) {
      neighboursArround = array
        .filter((e, i) => i === index - 1 || i === index - size || i === index - size - 1)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)
      return;
    }
    if (index > 0 && index < (size - 1)) {
      neighboursArround = array
        .filter((e, i) => i === index + 1 || i === index - 1 || i === index + size || i === index + size + 1 || i === index + size - 1)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)
      return;
    }

    if (index > size * size - size && index < (size * size - 1)) {
      neighboursArround = array
        .filter((e, i) => i === index + 1 || i === index - 1 || i === index - size || i === index - size + 1 || i === index - size - 1)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)
      return;
    }
    if (index % size === 0 && index < size * size - size && index > 0) {
      neighboursArround = array
        .filter((e, i) => i === index + size || i === index - size || i === index + 1 || i === index + 1 + size || i === index + 1 - size)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)
      return;
    }

    if ((index + 1) % size === 0 && index < size * size - 1 && index > size - 1) {
      neighboursArround = array
        .filter((e, i) => i === index + size || i === index - size || i === index - 1 || i === index - 1 + size || i === index - 1 - size)
        .reduce((sum, { clicked }) => sum + clicked, 0)
      setNeighbours(neighboursArround, index)
      return;
    }

    neighboursArround = array
      .filter((e, i) =>
        i === index - 1 || i === index - 1 - size || i === index - 1 + size || i === index - size || i === index + size || i === index + 1 || i === index + 1 + size || i === index + 1 - size)
      .reduce((sum, { clicked }) => sum + clicked, 0)
    setNeighbours(neighboursArround, index)
    return;
  }

  const recalc = (arr) => {
    const arrCopy = []
    arr.forEach(e => {
      const cell = {
        clicked: 0,
        neighbours: 0,
      }
      if ((e.neighbours === 0 && includeZero) || (e.neighbours === 1 && includeOne) || (e.neighbours === 2 && includeTwo) || (e.neighbours === 3 && includeThree) || (e.neighbours === 4 && includeFour)) cell.clicked = 1
      arrCopy.push(cell)
      setGround(arrCopy)

    })

  };

  const liveCycle = () => {
    ground.forEach((e, i, arr) => {
      countNeighbours(arr, i)
    });
    recalc(ground)
  }

  const toggleClick = (index) => {
    const groundCopy = [...ground];
    groundCopy[index].clicked === 1 ? groundCopy[index].clicked = 0 : groundCopy[index].clicked = 1;
    setGround(groundCopy)
  }


  return (
    <div className='j-center d-flex'>

      <div className='container d-flex f-wrap' style={{
        width: `${size * 10}px`, height: `${size * 10}px`
      }} >

        {
          ground.map((x, i) => <div
            className='cell' key={i}
            onClick={() => toggleClick(i)} style={{ backgroundColor: ` ${x.clicked === 1 ? color : ""}` }}> {x.neighbours}
          </div>)
        }


      </div >
    </div>

  );
};
export default Ground