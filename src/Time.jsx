import { useEffect, useState } from 'react'

const Time = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date(new Date().getTime() + 5 * 60 * 60 * 1000)

      const hours = currentDate.getUTCHours().toString().padStart(2, '0')
      const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0')
      const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0')

      const formattedTime = `${hours}:${minutes}:${seconds}`

      setCurrentTime(formattedTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2>time in my city:</h2>
      <p>{currentTime}</p>
    </div>
  )
}

export default Time
