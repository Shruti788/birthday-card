import { useState } from "react"
import Confetti from "react-confetti"

function FinalSurprise() {

  const [showConfetti, setShowConfetti] = useState(false)

  return (

    <div className="relative min-h-screen bg-linear-to-b from-rose-100 via-pink-50 to-yellow-50 flex items-center justify-center px-6 overflow-hidden">

      {showConfetti && <Confetti />}

      <div className="text-center max-w-4xl">

        <h2 className="text-5xl md:text-7xl font-bold text-rose-500 mb-10">
          One Last Thing... ❤️
        </h2>

        <p className="text-xl md:text-2xl text-neutral-700 leading-10 mb-12">
          No matter where life takes us,
          I’ll always pray for your happiness,
          your peace and your success.
          <br /><br />
          Thank you for existing.
          Thank you for being you.
        </p>

        <button
          onClick={() => setShowConfetti(true)}
          className="bg-rose-400 hover:bg-rose-500 text-white px-10 py-5 rounded-full text-xl shadow-2xl hover:scale-110 transition duration-300"
        >
          Click For Birthday Magic ✨
        </button>

        {showConfetti && (

          <p className="mt-12 text-3xl font-semibold text-rose-500 animate-pulse">
            Happy 24 Birthday Prathu 🎂❤️
          </p>

        )}

      </div>

    </div>
  )
}

export default FinalSurprise