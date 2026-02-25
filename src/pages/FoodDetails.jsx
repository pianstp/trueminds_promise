import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import FooterMain from '../components/FooterMain'
import img1 from '../imgs/image 1.png'
import img2 from '../imgs/image 2.png'
import img3 from '../imgs/image 3.png'

const foodItems = [
  { id: 1, name: 'Jollof Rice', price: 2500, description: 'Delicious Nigerian jollof rice with chicken and plantain', image: img1 },
  { id: 2, name: 'Egusi Soup', price: 3000, description: 'Traditional egusi soup with assorted meat and fish', image: img2 },
  { id: 3, name: 'Pounded Yam', price: 2000, description: 'Smooth pounded yam served with your choice of soup', image: img3 }
]

export default function FoodDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const food = foodItems.find(item => item.id === parseInt(id)) || foodItems[0]

  const handleAddToCart = () => {
    navigate('/customize/6')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <img src={food.image} alt={food.name} className="w-full h-64 object-cover rounded-md" />
        <h1 className="text-2xl font-bold mt-4">{food.name}</h1>
        <p className="text-gray-600 mt-2">{food.description}</p>
        <p className="text-xl font-bold text-orange-600 mt-4">₦{food.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-brand-primary text-text-inverted px-6 py-3 rounded-md hover:bg-[#B45309] transition duration-200 w-full"
        >
          Add to Cart
        </button>
      </main>
      <FooterMain />
    </div>
  )
}
