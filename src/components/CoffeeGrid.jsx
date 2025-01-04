import { useRef } from 'react'
import coffeeData from '../data/coffees.json'

function CoffeeGrid() {
  const scrollRef = useRef(null)

  return (
    <div className="w-full overflow-x-hidden py-12 bg-coffee-bg">

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-coffee-text mb-8 font-adobe">
          Our Coffee Selection
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory
            scrollbar-thin scrollbar-thumb-coffee-text scrollbar-track-coffee-bg
            hover:scrollbar-thumb-coffee-text/80"
        >
          {coffeeData.coffees.map((coffee) => (
            <div 
              key={coffee.id}
              className="min-w-[300px] bg-white rounded-lg shadow-md snap-start"
            >
              <div className="h-[200px] w-full bg-gray-200 rounded-t-lg">
               
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Coffee Image]
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-coffee-text">
                  {coffee.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Origin: {coffee.origin}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Taste: {coffee.taste}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-coffee-text font-bold">
                    ${coffee.price}
                  </span>
                  <button className="bg-coffee-text text-white px-4 py-2 rounded-md hover:opacity-90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoffeeGrid 