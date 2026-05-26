function Hero() {

  const hearts = ["💖", "💕", "💗", "💘", "💝"]

  return (
    <div className="relative overflow-hidden min-h-screen bg-linear-to-b from-pink-100 via-yellow-50 to-rose-100 flex items-center justify-center px-6">

      {/* Floating Hearts */}

      {hearts.map((heart, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-bounce opacity-70"
          style={{
            left: `${index * 20}%`,
            top: `${index * 15}%`,
          }}
        >
          {heart}
        </div>
      ))}

      {/* Main Content */}

      <div className="text-center relative z-10">

        <h1 className="text-5xl md:text-7xl font-bold text-rose-500 mb-6">
          Happy Birthday Prathu ❤️
        </h1>

        <p className="text-lg md:text-2xl text-neutral-700 max-w-2xl">
          A tiny little website made with love, emotions and code ✨
        </p>

        <button className="mt-8 bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-lg shadow-lg transition duration-300 hover:scale-105">
          Open Your Surprise 🎁
        </button>

      </div>

    </div>
  )
}

export default Hero