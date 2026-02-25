import { Link } from "react-router-dom"

export default function OrderComplete() {
  const orderId = "#123RGR231567Y"

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center max-w-md w-full">
        
        {/* SUCCESS ICON */}
        <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* TITLE */}
        <h1 className="text-lg font-semibold text-gray-900 mb-2">
          Order Placed Successfully!
        </h1>

        {/* SUBTEXT */}
        <p className="text-sm text-gray-600 mb-10">
          Your delicious Chuks Kitchen meal is on its way!
        </p>

        {/* ORDER ID */}
        <p className="text-sm font-semibold text-gray-900 mb-4">
          Order {orderId} Confirmed
        </p>

        {/* TRACK ORDER BUTTON */}
        <Link
          to="/"
          aria-label="Track your order"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium transition mb-4"
        >
          Track Order
        </Link>

        {/* GENERATE RECEIPT (TEXT LINK) */}
        <Link to="/summary" className="text-xs text-gray-400 hover:text-gray-600 transition mb-6">
          View Order Summary
        </Link>

        {/* HELP LINK */}
        <p className="text-xs text-blue-600 hover:underline cursor-pointer">
          Need help with your order?
        </p>
      </div>
    </section>
  )
}
