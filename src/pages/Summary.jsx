import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import FooterMain from '../components/FooterMain'
import OrderSummary from '../components/OrderSummary'

export default function Summary() {
  const navigate = useNavigate()
  const subtotal = 7500
  const deliveryFee = 500

  const handleCheckout = () => {
    navigate('/delivery')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Order Summary</h1>
        <div className="max-w-md mx-auto">
          <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} />
          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </main>
      <FooterMain />
    </div>
  )
}
