import { Link } from 'react-router-dom'

export default function CartSummary({ items, onUpdateQuantity, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0)

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Your CART</h1>
      
      <div className="space-y-4 mb-6">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4 flex-1">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                {item.sides && item.sides.length > 0 && (
                  <p className="text-sm text-gray-500">
                    With {item.sides.map(s => s.name.toLowerCase()).join(', ')}
                  </p>
                )}
                <p className="text-orange-600 font-bold">₦{item.totalPrice}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 border px-2 py-1 rounded-md">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-red-600 hover:text-red-700">×</button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 mb-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Subtotal</span>
          <span className="text-orange-600">₦{subtotal}</span>
        </div>
      </div>

      <Link to="/menu" className="block text-blue-600 hover:underline mb-4 text-center">
        Add more items from Chuks Kitchen
      </Link>

      <button
        onClick={onCheckout}
        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
      >
        Proceed to Checkout
      </button>
    </div>
  )
}
