export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-orange-600 font-bold">₦{item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 border px-2 py-1 rounded-md">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
        </div>
        <button onClick={() => onRemove(item.id)} className="text-red-600 hover:text-red-700">Remove</button>
      </div>
    </div>
  )
}
