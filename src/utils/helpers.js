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

export const getListOfSkips = (seconds) => {
  const getSkip = () => getRandomInt(15, seconds - 15)
  const numberOfSkips = calculateReasonableAmountOfSkips(seconds)
  const skipsArray = []
  for (let iterator = 0; iterator < numberOfSkips; iterator++) skipsArray.push(getSkip())
  return skipsArray.sort()
}