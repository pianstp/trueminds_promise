import FoodCard from './FoodCard'
import { foodItems } from '../data/foodData'

export default function FoodGrid({ category }) {
  const items = foodItems[category] || []

  return (
    <div className="py-12 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-text-primary mb-8">{category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
