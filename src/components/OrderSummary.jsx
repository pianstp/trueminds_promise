import { useState } from "react"

export default function OrderSummary({
  subtotal = 9200,
  deliveryFee = 500,
  serviceFee = 200,
  tax = 0,
  onCheckout,
}) {
  const [mode, setMode] = useState("delivery")
  const total = subtotal + deliveryFee + serviceFee + tax

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-[420px] w-full">
      <h2 className="text-[20px] font-semibold mb-4">Order Summary</h2>

      <div className="mb-5">
        <label htmlFor="promoCode" className="text-sm font-medium text-gray-600 mb-2 block">
          Add a Promo Code
        </label>

        <div className="flex gap-2">
          <input
            id="promoCode"
            type="text"
            placeholder="Enter code here"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-md text-sm font-medium">
            Login
          </button>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>NGN {subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>NGN {deliveryFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>NGN {serviceFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>{tax === 0 ? "NGN 0" : `NGN ${tax.toLocaleString()}`}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t">
        <span className="font-semibold text-[16px]">Total</span>
        <span className="font-bold text-[18px]">NGN {total.toLocaleString()}</span>
      </div>

      <div className="flex mt-5 rounded-md overflow-hidden border">
        <button
          onClick={() => setMode("delivery")}
          className={`flex-1 py-2 text-sm font-medium ${
            mode === "delivery" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          Delivery
        </button>

        <button
          onClick={() => setMode("pickup")}
          className={`flex-1 py-2 text-sm font-medium ${
            mode === "pickup" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          Pick up
        </button>
      </div>

      <div className="mt-5">
        <label htmlFor="restaurantInstructions" className="text-sm font-medium text-gray-600 mb-2 block">
          Special Instructions for Restaurant
        </label>

        <textarea
          id="restaurantInstructions"
          rows={3}
          placeholder="E.g. no onion, less spice"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none resize-none focus:border-orange-500"
        />
      </div>

      <button
        onClick={onCheckout}
        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
      >
        Proceed to Checkout
      </button>
    </div>
  )
}
