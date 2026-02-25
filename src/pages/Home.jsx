import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-pageBg">
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-[36px] font-bold text-textDark leading-tight mb-6">
            Delicious Meals, Delivered Fast
          </h1>
          <p className="text-base text-textMuted mb-8 max-w-xl mx-auto">
            Experience authentic flavors from Chuks Kitchen, delivered right to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-orangeMain text-pageBg rounded-button px-8 py-3 text-base font-semibold"
            >
              Order Now
            </Link>
            <Link 
              to="/menu" 
              className="border border-orangeMain text-orangeMain rounded-button px-8 py-3 text-base font-semibold"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-borderLight">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orangeMain rounded-full mx-auto mb-4"></div>
              <h3 className="text-[24px] font-semibold text-textDark mb-2">Fast Delivery</h3>
              <p className="text-[16px] text-textMuted">Get your meals delivered in 30 minutes or less</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orangeMain rounded-full mx-auto mb-4"></div>
              <h3 className="text-[24px] font-semibold text-textDark mb-2">Fresh Ingredients</h3>
              <p className="text-[16px] text-textMuted">We use only the freshest ingredients in every dish</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orangeMain rounded-full mx-auto mb-4"></div>
              <h3 className="text-[24px] font-semibold text-textDark mb-2">Authentic Taste</h3>
              <p className="text-[16px] text-textMuted">Traditional recipes prepared by expert chefs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
