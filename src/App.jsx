import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

// layouts
import RootLayout from './layouts/RootLayout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Events from './pages/Events'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'


function App() {

  // router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    ), 
    { basename: '/Coffee-Beanery' }
  )

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
