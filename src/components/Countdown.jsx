import { useEffect, useState } from "react"

function Countdown() {

const birthdayDate = new Date("May 27, 2026 00:00:00 EDT").getTime()

  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime()

      const distance = birthdayDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      )

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      )

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      )

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      })

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <div className="bg-white py-20 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-rose-500 mb-10">
          Countdown To Your Day 🎂
        </h2>

        <p className="text-lg text-neutral-700 mb-8">
          Syracuse Time: {
          new Date().toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
          }
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-pink-100 rounded-3xl p-6 shadow-lg">
            <h3 className="text-5xl font-bold text-rose-500">
              {timeLeft.days}
            </h3>
            <p className="mt-2 text-neutral-700">
              Days
            </p>
          </div>

          <div className="bg-yellow-100 rounded-3xl p-6 shadow-lg">
            <h3 className="text-5xl font-bold text-rose-500">
              {timeLeft.hours}
            </h3>
            <p className="mt-2 text-neutral-700">
              Hours
            </p>
          </div>

          <div className="bg-rose-100 rounded-3xl p-6 shadow-lg">
            <h3 className="text-5xl font-bold text-rose-500">
              {timeLeft.minutes}
            </h3>
            <p className="mt-2 text-neutral-700">
              Minutes
            </p>
          </div>

          <div className="bg-orange-100 rounded-3xl p-6 shadow-lg">
            <h3 className="text-5xl font-bold text-rose-500">
              {timeLeft.seconds}
            </h3>
            <p className="mt-2 text-neutral-700">
              Seconds
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Countdown