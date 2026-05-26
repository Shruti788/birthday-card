function Gallery() {

  const photos = [
    {
      image: "/photos/pic1.jpeg",
      caption: "My favorite person ❤️"
    },
    {
      image: "/photos/pic2.jpeg",
      caption: "You make life softer ✨"
    },
    {
      image: "/photos/pic3.jpeg",
      caption: "Forever my safe place 💖"
    },
  ]

  return (
    <div className="bg-linear-to-b from-rose-50 to-pink-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-500 mb-14">
          Our Little Moments 📸
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {photos.map((photo, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
            >

              <img
                src={photo.image}
                alt="memory"
                className="w-full h-96 object-cover"
              />

              <div className="p-6">

                <p className="text-center text-lg text-neutral-700">
                  {photo.caption}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Gallery