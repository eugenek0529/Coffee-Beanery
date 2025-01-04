import React from 'react'
import mainBg from '../images/main.png'
import CoffeeGrid from '../components/CoffeeGrid'

function Home() {
  return (
    <>
      <div 
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative z-20"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-center text-5xl font-bold font-adobe italic">
            A sip of coffee, a moment to relax,<br/> 
            a lifetime of ideas.
          </h3>
        </div>
      </div>
      <CoffeeGrid />
    </>
  )
}

export default Home