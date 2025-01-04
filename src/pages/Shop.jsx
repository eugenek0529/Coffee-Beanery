import React from 'react'
import coffeeData from '../data/coffees.json'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'


function Shop() {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const handleProductClick = (coffee) => {
    navigate(`/shop/${coffee.name.toLowerCase().replace(/\s+/g, '-')}`, { 
      state: { coffee } 
    })
  }

  const handleAddToCart = (e, coffee) => {
    e.stopPropagation()
    addToCart(coffee)
  }

  return (
    <div className="container mx-auto">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 py-12 mt-32'>
        {
          coffeeData.coffees.map((coffee) => (
            <div 
              key={coffee.name} 
              onClick={() => handleProductClick(coffee)}
              className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer'
            >
              <div className='flex flex-col items-center p-4'>
                <div className="h-[300px] w-full bg-gray-200 rounded-t-lg">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [{coffee.name}]
                  </div>
                </div>
                <h3 className='font-adobe text-xl text-gray-800 mb-2'>{coffee.name}</h3>
                <p className='font-adobe text-gray-600 mb-2'>{coffee.origin}</p>
                <p className='font-adobe text-gray-900 font-semibold'>${coffee.price}</p>
                <button 
                  onClick={(e) => handleAddToCart(e, coffee)}
                  className='bg-coffee-text text-white px-4 py-2 mt-4 rounded-md hover:opacity-90 cursor-pointer'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Shop