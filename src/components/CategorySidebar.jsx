export default function CategorySidebar({ activeCategory, onCategoryChange }) {
  const categories = [
    'Popular',
    'Jollof Rice & Entrees',
    'Swallow & Soups',
    'Grills & Sides',
    'Beverages',
    'Desserts'
  ]

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-textDark mb-4">Menu Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeCategory === category
                  ? 'bg-orangeMain text-white font-semibold'
                  : 'text-textDark hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
