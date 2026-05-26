function Reasons() {

  const reasons = [
    "Your smile makes everything feel okay ❤️",
    "You always manage to make me laugh 😭",
    "You feel like home to me ✨",
    "Your existence makes life softer 💖",
    "I love how caring you are 🫶",
    "Even your stupidity is adorable 😌",
  ]

  return (

    <div className="bg-linear-to-b from-yellow-50 to-pink-100 py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-500 mb-16">
          Reasons I Love You 💕
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:scale-105 transition duration-300"
            >

              <div className="text-5xl mb-6">
                💖
              </div>

              <p className="text-lg text-neutral-700 leading-8">
                {reason}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Reasons