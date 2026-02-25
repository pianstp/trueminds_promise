import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] h-20 bg-[#F9FAFB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl text-[#F97316] italic"
          style={{ fontFamily: 'cursive' }}
        >
          Chuks Kitchen
        </Link>

        {/* Desktop Nav - Perfectly Centered */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 items-center">
          <Link to="/" className="text-gray-600 hover:text-orange-500 text-[15px] font-medium">
            Home
          </Link>
          <Link to="/menu" className="text-gray-600 hover:text-orange-500 text-[15px] font-medium">
            Explore
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-orange-500 text-[15px] font-medium">
            Order
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-orange-500 text-[15px] font-medium">
            Account
          </Link>
        </nav>

        {/* Login Button */}
        <div className="ml-auto hidden md:block">
          <Link
            to="/login"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2 rounded-lg text-sm font-semibold transition duration-200"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="ml-auto md:hidden" aria-label="Toggle menu">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="fixed top-20 left-0 right-0 z-[110] bg-white border-t border-gray-100 shadow-md md:hidden flex flex-col px-6 py-4 space-y-3">
            <Link to="/" className="text-gray-600 hover:text-orange-500" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/menu" className="text-gray-600 hover:text-orange-500" onClick={() => setIsOpen(false)}>
              Explore
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-orange-500" onClick={() => setIsOpen(false)}>
              Order
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-orange-500" onClick={() => setIsOpen(false)}>
              Account
            </Link>
            <Link
              to="/login"
              className="bg-[#F97316] text-white px-4 py-2 rounded-lg mt-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
