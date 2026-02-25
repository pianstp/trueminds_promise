export default function FoodCard({ name, description, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
      <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden">
        {image && <img src={image} alt={name} className="w-full h-full object-cover" />}
      </div>
      <div className="p-4 relative">
        <h3 className="text-lg font-bold text-textDark mb-2">{name}</h3>
        <p className="text-sm text-textMuted mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <span className="text-xl font-bold text-orangeMain">NGN {price}</span>
            <span className="inline-flex items-center justify-center">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#D97706" />
                <path d="M10 6v8M6 10h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
