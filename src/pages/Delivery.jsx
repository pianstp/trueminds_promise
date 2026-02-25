import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import FooterMain from '../components/FooterMain'
import DeliveryForm from '../components/DeliveryForm'

export default function Delivery() {
  const navigate = useNavigate()

  const handleSubmit = (formData) => {
    console.log('Delivery details:', formData)
    navigate('/payment')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Delivery Details</h1>
        <div className="max-w-md mx-auto">
          <DeliveryForm onSubmit={handleSubmit} />
        </div>
      </main>
      <FooterMain />
    </div>
  )
}
