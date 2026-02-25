import { useState } from "react"

const proteins = [
  { id: 1, name: "Fried Chicken", price: 0 },
  { id: 2, name: "Grilled Fish", price: 400 },
  { id: 3, name: "Beef", price: 400 },
]

const sides = [
  { id: 1, name: "Fried Plantain", price: 400 },
  { id: 2, name: "Coleslaw", price: 400 },
  { id: 3, name: "Extra Pepper Sauce", price: 400 },
]

export default function FoodCustomization({ food, onAddToCart }) {
  const [selectedProtein, setSelectedProtein] = useState(proteins[0].id)
  const [selectedSides, setSelectedSides] = useState([])
  const [instructions, setInstructions] = useState("")

  const handleSideToggle = (sideId) => {
    setSelectedSides((prev) =>
      prev.includes(sideId) ? prev.filter((id) => id !== sideId) : [...prev, sideId]
    )
  }

  const calculateTotal = () => {
    const proteinPrice = proteins.find((p) => p.id === selectedProtein)?.price || 0
    const sidesPrice = selectedSides.reduce((sum, sideId) => {
      return sum + (sides.find((s) => s.id === sideId)?.price || 0)
    }, 0)
    return food.price + proteinPrice + sidesPrice
  }

  const handleAddToCart = () => {
    const protein = proteins.find((p) => p.id === selectedProtein)
    const selectedSidesData = sides.filter((s) => selectedSides.includes(s.id))
    onAddToCart({
      ...food,
      protein,
      sides: selectedSidesData,
      instructions,
      totalPrice: calculateTotal(),
    })
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-2">{food.name}</h1>
      <p className="text-orange-600 font-bold mb-4">NGN {calculateTotal()}</p>
      <p className="text-gray-600 mb-6">{food.description}</p>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Choose Your Protein</h2>
        {proteins.map((protein) => (
          <label
            key={protein.id}
            className="flex items-center space-x-2 mb-2 border px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="radio"
              name="protein"
              value={protein.id}
              checked={selectedProtein === protein.id}
              onChange={() => setSelectedProtein(protein.id)}
              className="w-4 h-4"
            />
            <span>{protein.name}</span>
            {protein.price > 0 && <span className="text-gray-500">( + NGN {protein.price} )</span>}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Choose Extra Sides (Optional)</h2>
        {sides.map((side) => (
          <label key={side.id} className="flex items-center space-x-2 mb-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedSides.includes(side.id)}
              onChange={() => handleSideToggle(side.id)}
              className="w-4 h-4"
            />
            <span>{side.name}</span>
            <span className="text-gray-500">( + NGN {side.price} )</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Special Instructions</h2>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="E.g. no onions, little spice"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  )
}
