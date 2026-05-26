import { useRef, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa"

function MusicPlayer() {

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (

    <div className="fixed bottom-6 right-6 z-50">

      <audio ref={audioRef} loop>
        <source src="/music/song.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-rose-400 hover:bg-rose-500 text-white p-5 rounded-full shadow-2xl text-2xl transition duration-300 hover:scale-110"
      >

        {isPlaying ? <FaPause /> : <FaPlay />}

      </button>

    </div>
  )
}

export default MusicPlayer