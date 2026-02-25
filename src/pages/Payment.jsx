import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import FooterMain from '../components/FooterMain'
import PaymentForm from '../components/PaymentForm'

export default function Payment() {
  const navigate = useNavigate()

  const handleSubmit = (paymentData) => {
    console.log('Payment details:', paymentData)
    navigate('/order-complete')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Payment</h1>
        <div className="max-w-md mx-auto">
          <PaymentForm onSubmit={handleSubmit} />
        </div>
      </main>
      <FooterMain />
    </div>
  )
}
