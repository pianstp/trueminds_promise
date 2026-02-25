import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cartItems as initialCartItems } from "../data/menuData"
import CartItem from "../components/CartItem"

export default function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState(initialCartItems)

  const handleUpdateQuantity = (id, qty) => {
    if (qty < 1) return
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    )
  }

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const deliveryFee = 500
  const total = subtotal + deliveryFee

  return (
    <section className="bg-[#f7f7f7] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-[32px] font-semibold mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* LEFT - CART ITEMS */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}

            <button className="text-orange-500 text-sm mt-3">
              + Add more items from Chuks Kitchen
            </button>
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <label htmlFor="cartPromoCode" className="text-sm text-gray-500 mb-1 block">
              Add a Promo Code
            </label>
            <input
              id="cartPromoCode"
              type="text"
              placeholder="Enter code here"
              className="w-full border rounded-md px-3 py-2 mb-5 outline-none focus:border-orange-400"
            />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>NGN {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span>NGN {deliveryFee.toLocaleString()}</span>
              </div>

              <div className="flex justify-between font-semibold pt-3 border-t">
                <span>Total</span>
                <span className="text-orange-500">
                  NGN {total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate("/summary")}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
