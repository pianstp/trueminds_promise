import Header from '../components/Header'
// import CategorySidebar from '../components/CategorySidebar'
import FoodCard from '../components/FoodCard'
import FooterMain from '../components/FooterMain'
import { foodData } from '../data/foodData'
import bgImage from '../imgs/image 11.png'

export default function HomeMenu() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative w-full max-w-[1440px] mx-auto aspect-[1440/612] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Chuks Kitchen</h1>
          <p className="text-xl">Nigerian Home Cooking Since 1998</p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Menu Categories Title and Buttons */}
            <div className="md:col-span-4 space-y-12">
              <div className="w-full">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Menu Categories</h2>

                {/* Categories Container */}
                <div className="flex flex-col gap-2 mt-5 mb-8 bg-white p-6 rounded-xl shadow-md w-[100%]">
                  {/* Active Category */}
                  <button
                    className="px-4 py-3 rounded-lg font-semibold w-full text-left 
                 bg-orange-500 text-white transition"
                  >
                    Popular
                  </button>

                  {/* Other Categories */}
                  <button className="px-4 py-3 rounded-lg font-semibold w-full text-left 
                       text-gray-800 hover:bg-gray-100 transition">
                    Jollof Rice &amp; Entrees
                  </button>

                  <button className="px-4 py-3 rounded-lg font-semibold w-full text-left 
                       text-gray-800 hover:bg-gray-100 transition">
                    Swallow &amp; Soups
                  </button>

                  <button className="px-4 py-3 rounded-lg font-semibold w-full text-left 
                       text-gray-800 hover:bg-gray-100 transition">
                    Grills &amp; Sides
                  </button>

                  <button className="px-4 py-3 rounded-lg font-semibold w-full text-left 
                       text-gray-800 hover:bg-gray-100 transition">
                    Beverages
                  </button>

                  <button className="px-4 py-3 rounded-lg font-semibold w-full text-left 
                       text-gray-800 hover:bg-gray-100 transition">
                    Desserts
                  </button>
                </div>
              </div>

              {/* Popular */}
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">Popular</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodData.popular.map((item) => (
                    <FoodCard key={item.id} {...item} />
                  ))}
                </div>
              </div>

              {/* Jollof Rice & Entrees */}
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">Jollof Rice & Entrees</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodData.jollofRice.map((item) => (
                    <FoodCard key={item.id} {...item} />
                  ))}
                </div>
              </div>

              {/* Swallow & Soups */}
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">Swallow & Soups</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodData.swallowSoups.map((item) => (
                    <FoodCard key={item.id} {...item} />
                  ))}
                </div>
              </div>

              {/* Grills & Sides */}
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">Grills & Sides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodData.grillsSides.map((item) => (
                    <FoodCard key={item.id} {...item} />
                  ))}
                </div>
              </div>

              {/* Beverages */}
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">Beverages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodData.beverages.map((item) => (
                    <FoodCard key={item.id} {...item} />
                  ))}
                </div>
              </div>

              {/* Desserts */}
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">Desserts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodData.desserts.map((item) => (
                    <FoodCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterMain />
    </div>
  )
}
