const getRandomInt = (minimum, maximum) => {
  const min = Math.ceil(minimum)
  const max = Math.floor(maximum)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getFloatBetween(min, max) {
  return Math.random() * (max - min) + min
}

const getNrOfSkipsPerMinute = (seconds) => {
  const minutes = seconds / 60
  const multiplier = getFloatBetween(0.3, 0.7)
  return Math.floor(minutes * multiplier)
}

const getDifference = (num1, num2) => Math.abs(num1 - num2)
const getSkip = (seconds, arrayOfSkips) =>  {
  const minTimeBetweenSkips = 15
  const newSkip = getRandomInt(minTimeBetweenSkips, (seconds - minTimeBetweenSkips))
  const gapTooSmall = Boolean(arrayOfSkips.filter((skip) => getDifference(skip, newSkip) < minTimeBetweenSkips).length)

  if (arrayOfSkips.length && gapTooSmall) return getSkip(seconds, arrayOfSkips)
  return newSkip
}

export const getListOfSkips = (seconds) => {
  const numberOfSkips = getNrOfSkipsPerMinute(seconds)
  const arrayOfSkips = []
  for (let iterator = 0; iterator < numberOfSkips; iterator++) {
    arrayOfSkips.push(getSkip(seconds, arrayOfSkips))
  }
  return arrayOfSkips.sort((prevNum, num) => prevNum - num)
}

export const allowMinMaxNumber = (min, max, number) => {
  if (number > max) return max
  else if (number < min) return min
  return number
}
