import { Link } from 'react-router-dom'
import bgImage from '../imgs/b34e6c700df600b228e2ab2504fc9bbf7815c2ed.png'

export default function Hero() {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto min-h-[420px] sm:min-h-[500px] md:min-h-0 md:aspect-[1440/612] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-1xl font-bold text-white leading-tight py-8">
          The Heart of Nigerian Home Cooking
        </h1>
        <p className="text-gray-200 mt-3 max-w-xl">
          Experience authentic flavors crafted with tradition and love.
        </p>
        <Link 
          to="/menu" 
          className="bg-[#D97706] text-white px-6 py-3 rounded-md mt-5 hover:bg-[#B45309] hover:scale-105 transition duration-200 inline-block w-fit"
        >
          Explore Menu
        </Link>
      </div>
    </section>
  )
}
