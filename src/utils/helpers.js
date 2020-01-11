const getRandomInt = (minimum, maximum) => {
  const min = Math.ceil(minimum)
  const max = Math.floor(maximum)
  return Math.floor(Math.random() * (max - min + 1)) + min
}



const calculateReasonableAmountOfSkips = (seconds) => {
  function getRangeFromHalfToFull() {
    return Math.random() * (1 - 0.5) + 0.5  // get random float between 0.5 - 1
  }
  return Math.floor(seconds / 60 * getRangeFromHalfToFull())
}

export const getStepsToBeSkipped = (seconds) => {
  console.log('seconds: ', seconds)
  const numberOfSkips = calculateReasonableAmountOfSkips(seconds)
  console.log('#ofSkips: ', numberOfSkips)
  const getSkip = () => getRandomInt(30, seconds - 30)
  console.log('1 getSkip function: ', getSkip())
  const skipsArray = []
  for (let iter = 0; iter < numberOfSkips; iter++) skipsArray.push(getSkip())
  console.log('skipsArray: ', skipsArray.sort())
  return skipsArray.sort()
}