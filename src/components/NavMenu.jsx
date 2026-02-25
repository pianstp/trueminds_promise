import { categories } from '../data/foodData'

export default function NavMenu({ activeCategory, onCategoryChange }) {
  return (
    <nav className="bg-text-inverted border-b border-border-light sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex overflow-x-auto py-4 gap-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg font-semibold transition ${
                activeCategory === category
                  ? 'bg-brand-primary text-text-inverted'
                  : 'text-text-primary hover:bg-brand-surface'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
