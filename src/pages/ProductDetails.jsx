import { useLocation, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductDetails() {
  const { state } = useLocation()
  const { name } = useParams()
  const coffee = state?.coffee
  const { addToCart } = useCart()

  if (!coffee) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart(coffee)
    
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full">
                 <div className="h-[500px] w-full bg-gray-200 rounded-t-lg">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      [{coffee.name}]
                    </div>
                  </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-adobe text-3xl text-gray-800 mb-4">{coffee.name}</h1>
            <p className="font-adobe text-gray-600 mb-2">{coffee.origin}</p>
            <p className="font-adobe text-2xl text-gray-900 font-semibold mb-4">${coffee.price}</p>
            <p className="font-adobe text-gray-700 mb-6">{coffee.description}</p>
            <button 
              onClick={handleAddToCart}
              className="bg-coffee-text text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-adobe"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
