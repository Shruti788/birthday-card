function LoveLetter() {
  return (

    <div className="relative py-24 px-6 bg-linear-to-b from-pink-100 via-rose-50 to-yellow-50 overflow-hidden">

      {/* Background Blur Circles */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>

      {/* Main Card */}

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="backdrop-blur-lg bg-white/40 border border-white/50 shadow-2xl rounded-[40px] p-10 md:p-16">

          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-500 mb-10">
            A Letter For You 💌
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-9 text-neutral-700">

            <p>
              Dear Handsome,
            </p>

            <p>
              Maybe this is just a tiny little website for the you…
              but for me, it holds so many emotions.
            </p>

            <p>
              Thank you for being part of my life.
              Thank you for the laughs, the comfort,
              the chaos, the memories and every little moment in between.
            </p>

            <p>
              No matter how hard life gets sometimes,
              one thing stays constant 
              I genuinely care about you with all my heart.
            </p>

            <p>
              I hope this birthday brings you happiness,
              peace, success and everything your heart wishes for.
            </p>

            <p>
              And I hope whenever you look back at this website someday,
              you remember how deeply loved you are ❤️
            </p>

            <p className="pt-6 text-right font-semibold text-rose-500">
              —  Your little princess ❤️
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default LoveLetter