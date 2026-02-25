import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import FooterMain from '../components/FooterMain'
import OrderSummary from '../components/OrderSummary'

export default function Summary() {
  const navigate = useNavigate()
  const subtotal = 7500
  const deliveryFee = 500

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Order Summary</h1>
        <div className="max-w-md mx-auto">
          <OrderSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            onCheckout={() => navigate('/delivery')}
          />
        </div>
      </main>
      <FooterMain />
    </div>
  )
}
