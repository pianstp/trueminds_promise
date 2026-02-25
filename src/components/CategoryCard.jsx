export default function CategoryCard({ title, image }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden">
      <div className="h-28 w-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl">🍽️</span>
        )}
      </div>
      <div className="py-3 text-center">
        <h3 className="text-sm font-medium text-textDark">{title}</h3>
      </div>
    </div>
  )
}
