import { useState } from "react"

export default function DeliveryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    address: "Home: 123 Main Street, Victoria Island, Lagos\nApt 4B, Opposite Mega Plaza",
    deliveryTime: "ASAP (30-35 min)",
    instructions: "",
    phone: "+234 801 234 5678",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <section className=" min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-[520px] mx-auto">
          <h2 className="text-[22px] font-semibold mb-6">Delivery Details</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">Address</p>

              <div className="border rounded-md px-4 py-3 text-sm text-gray-700 flex justify-between items-start">
                <p className="whitespace-pre-line leading-relaxed">{formData.address}</p>

                <button type="button" className="text-orange-500 text-sm font-medium ml-4">
                  Change Address
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Time
              </label>

              <input
                id="deliveryTime"
                type="text"
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Instructions (Optional)
              </label>

              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                placeholder="E.g. leave at the front door, knock twice"
                rows={3}
                className="w-full border rounded-md px-4 py-3 text-sm resize-none focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
