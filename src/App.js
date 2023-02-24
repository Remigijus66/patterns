// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Ground from './components/ground';
import MainContext from './context/MainContext';
import Head from './components/head';
import Settings from './components/settings';

function App() {






  // let groundArr = [];
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

  // useEffect(() => { makeField(size) }, []);

  // useEffect(() => ground.forEach((e, i, arr) => {
  //   countNeighbours(arr, i)
  // }), []);

  // useEffect(() => {
  //   if (timer) {
  //     const timer = setTimeout(() => {
  //       setCycle(cycle + 1);
  //       clearTimeout(timer);
  //     }, 50)
  //   }
  //   console.log('cycle', cycle)
  //   liveCycle()
  // }, [cycle, timer]);



  // const makeField = (s) => {
  //   for (let index = 0; index < s ** 2; index++) {
  //     const cell = {
  //       clicked: 0,
  //       neighbours: 0,
  //     }
  //     groundArr.push(cell)
  //   }
  // }


  // const toggleClick = (index) => {
  //   const groundCopy = [...ground];
  //   groundCopy[index].clicked === 1 ? groundCopy[index].clicked = 0 : groundCopy[index].clicked = 1;
  //   setGround(groundCopy)
  // }

  // const setNeighbours = (n, i) => {
  //   const groundCopy = [...ground];
  //   groundCopy[i].neighbours = n;
  //   setGround(groundCopy)
  // }

  // const countNeighbours = (array, index) => {

  //   let neighboursArround = 0;
  //   if (index === 0) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index + 1 || i === index + size || i === index + size + 1)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)
  //     return;
  //   }

  //   if (index === size - 1) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index - 1 || i === index + size || i === index + size - 1)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)

  //     return;
  //   }
  //   if (index === size * size - size) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index + 1 || i === index - size || i === index - size + 1)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)
  //     return;
  //   }
  //   if (index === (size * size) - 1) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index - 1 || i === index - size || i === index - size - 1)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)
  //     return;
  //   }
  //   if (index > 0 && index < (size - 1)) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index + 1 || i === index - 1 || i === index + size || i === index + size + 1 || i === index + size - 1)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)
  //     return;
  //   }

  //   if (index > size * size - size && index < (size * size - 1)) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index + 1 || i === index - 1 || i === index - size || i === index - size + 1 || i === index - size - 1)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)
  //     return;
  //   }
  //   if (index % size === 0 && index < size * size - size && index > 0) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index + size || i === index - size || i === index + 1 || i === index + 1 + size || i === index + 1 - size)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)
  //     return;
  //   }

  //   if ((index + 1) % size === 0 && index < size * size - 1 && index > size - 1) {
  //     neighboursArround = array
  //       .filter((e, i) => i === index + size || i === index - size || i === index - 1 || i === index - 1 + size || i === index - 1 - size)
  //       .reduce((sum, { clicked }) => sum + clicked, 0)
  //     setNeighbours(neighboursArround, index)
  //     return;
  //   }

  //   neighboursArround = array
  //     .filter((e, i) =>
  //       i === index - 1 || i === index - 1 - size || i === index - 1 + size || i === index - size || i === index + size || i === index + 1 || i === index + 1 + size || i === index + 1 - size)
  //     .reduce((sum, { clicked }) => sum + clicked, 0)
  //   setNeighbours(neighboursArround, index)
  //   return;
  // }

  // const recalc = (arr) => {
  //   const arrCopy = []
  //   arr.forEach(e => {
  //     const cell = {
  //       clicked: 0,
  //       neighbours: 0,
  //     }
  //     if (e.neighbours === 2 || e.neighbours === 3 || e.neighbours === 4) cell.clicked = 1
  //     arrCopy.push(cell)
  //     setGround(arrCopy)

  //   })
  // };

  // const liveCycle = () => {
  //   ground.forEach((e, i, arr) => {
  //     countNeighbours(arr, i)
  //   });
  //   recalc(ground)
  // }

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
