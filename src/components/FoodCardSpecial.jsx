import { useNavigate } from "react-router-dom"

export default function FoodCardSpecial({ name, description, price, image }) {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    navigate("/customize/6")
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <div className="h-44 w-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-lg font-semibold text-orange-700">No image</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-[#D97706] font-bold">NGN {price}</p>
          <button
            className="bg-[#D97706] text-white px-4 py-2 rounded-md hover:bg-[#B45309] hover:scale-105 transition duration-200"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
