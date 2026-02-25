import { useState } from "react"

export default function PaymentForm({ onSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [saveCard, setSaveCard] = useState(false)

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handleCardChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      method: paymentMethod,
      saveCard,
      ...cardData,
    })
  }

  return (
    <section className=" min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-[520px] mx-auto">
          <h2 className="text-[22px] font-semibold mb-6">Payment</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Pay With:</p>

              <div className="flex items-center gap-8 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-green-500"
                  />
                  <span>Card</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-gray-400">
                  <input type="radio" name="payment" value="bank" disabled />
                  <span>Bank</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-gray-400">
                  <input type="radio" name="payment" value="transfer" disabled />
                  <span>Transfer</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={cardData.cardNumber}
                onChange={handleCardChange}
                placeholder="1234 5678 9101 1121"
                className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Expiration Date
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  name="expiryDate"
                  value={cardData.expiryDate}
                  onChange={handleCardChange}
                  placeholder="MM/YY"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleCardChange}
                  placeholder="123"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={() => setSaveCard(!saveCard)}
              />
              <span>Save card details</span>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white py-3 rounded-md font-semibold transition duration-200"
            >
              Pay NGN 9,900
            </button>

            <p className="text-[11px] text-gray-400 leading-relaxed">
              Your personal data will be used to process your order, support your
              experience throughout this website, and for other purposes described in
              our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
