import { useEffect, useRef } from 'react'

// uninterrupted interval, updating state does not reset the interval
export function useOneSecondInterval(callback) {
  const savedCallback = useRef()
  savedCallback.current = callback

  useEffect(() => {
    const tick = () => savedCallback.current()
    let oneSecond = setInterval(tick, 1000)
    return () => clearInterval(oneSecond)
  }, [])
}
