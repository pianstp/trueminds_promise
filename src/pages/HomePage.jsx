import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import CategoryCard from '../components/CategoryCard'
import FoodCardSpecial from '../components/FoodCardSpecial'
import PromoBanner from '../components/PromoBanner'
import FooterMain from '../components/FooterMain'
import { categories, chefSpecials } from '../data/homeData'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SearchBar />

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to="/menu">
                <CategoryCard title={category.title} image={category.image} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">Chef&apos;s Specials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefSpecials.map((special) => (
              <FoodCardSpecial key={special.id} {...special} />
            ))}
          </div>
        </div>
      </section>

      <PromoBanner />
      <FooterMain />
    </div>
  )
}
