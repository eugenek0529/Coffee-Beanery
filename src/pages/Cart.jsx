import { useCart } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-adobe text-2xl text-gray-800 mb-4">Your cart is empty</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-adobe text-3xl text-gray-800 mb-8">Shopping Cart</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {cartItems.map((item) => (
            <div 
              key={item.name}
              className="flex items-center py-4 border-b last:border-b-0"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-md mr-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-adobe text-xl text-gray-800">{item.name}</h3>
                <p className="font-adobe text-gray-600">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => updateQuantity(item.name, Math.max(0, item.quantity - 1))}
                  className="p-1 hover:text-coffee-text"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="font-adobe w-8 text-center">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  className="p-1 hover:text-coffee-text"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              <div className="w-24 text-right font-adobe">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button 
                onClick={() => removeFromCart(item.name)}
                className="ml-6 text-red-500 hover:text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}

          <div className="mt-8 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-adobe text-xl text-gray-800">Total:</span>
              <span className="font-adobe text-2xl text-gray-900">${calculateTotal().toFixed(2)}</span>
            </div>
            
            <button className="w-full mt-6 bg-coffee-text text-white py-3 rounded-md hover:opacity-90 transition-opacity font-adobe">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart 