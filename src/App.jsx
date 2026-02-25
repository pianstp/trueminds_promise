import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import LoginNew from './pages/LoginNew'
// import Register from './pages/Register' // Removed unused import
import RegisterNew from './pages/RegisterNew'
import RegisterFinal from './pages/RegisterFinal'
import HomeMenu from './pages/HomeMenu'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Customize from './pages/Customize'
import Summary from './pages/Summary'
import Delivery from './pages/Delivery'
import Payment from './pages/Payment'
import OrderComplete from './pages/OrderComplete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<HomeMenu />} />
        {/* <Route path="/food/:id" element={<FoodDetails />} /> */}
        <Route path="/customize/:id" element={<Customize />} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/register" element={<RegisterFinal />} />
        <Route path="/login" element={<LoginNew />} />
        <Route path="/old-home" element={<Layout><Home /></Layout>} />
        <Route path="/old-menu" element={<Layout><Menu /></Layout>} />
        <Route path="/old-login" element={<Login />} />
        <Route path="/old-register" element={<RegisterNew />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
