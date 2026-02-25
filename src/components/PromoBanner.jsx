import { Link } from 'react-router-dom'
import bgImage from '../imgs/image 10.png'

export default function PromoBanner() {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto aspect-[1440/612] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <h2 className="text-white text-xl font-semibold max-w-md">
          Introducing Our New Menu Additions!
        </h2>
        <Link 
          to="/menu" 
          className="bg-[#D97706] text-white px-5 py-2 rounded-md mt-4 hover:bg-[#B45309] transition inline-block w-fit"
        >
          Order Now
        </Link>
      </div>
    </section>
  )
}
