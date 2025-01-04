import { Outlet, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/sticker-14-removebg-preview.png'
import { useCart } from '../context/CartContext'

function RootLayout() {
  const { cartCount } = useCart()

  return (
    <div className="min-h-screen  bg-[#fff9f1]">
      <header className="sticky top-1 left-0 right-0 z-50 opacity-10%">
        <div className="mx-2.5 my-2.5">
          
          <nav className=" bg-[#fff9f1] rounded-lg flex items-center justify-between px-6 py-2">
            <NavLink to="/" className="logo pt-2.5">
              <img src={logo} alt="logo" className="h-[50px]" />
            </NavLink>
            <div className="menu-list">
              <ul className="flex gap-8 items-center">
                <li>
                  <NavLink 
                    to="/about" 
                    className="text-[#3D553F] hover:font-medium font-adobe"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/events" 
                    className="text-[#3D553F] hover:font-medium font-adobe"
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/shop" 
                    className="text-[#3D553F] hover:font-medium font-adobe"
                  >
                    Shops
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/cart" 
                    className="text-[#3D553F] hover:font-medium ml-4 relative"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartCount}
                      </span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout