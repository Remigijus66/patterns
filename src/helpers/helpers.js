const reset = () => {
  const groundCopy = [...ground]
  groundCopy.forEach((e) => {
    e.clicked = 0;
    e.neighbours = 0;
  })
  setGround(groundCopy)
  setCycle(0)
}

