import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FooterMain from '../components/FooterMain'
import Hero from '../imgs/b34e6c700df600b228e2ab2504fc9bbf7815c2ed.png'

export default function RegisterFinal() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[300px] md:min-h-screen flex items-center justify-center p-8 bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-orange-500/40"></div>
          <div className="relative z-10 text-center text-white max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chuks Kitchen</h1>
            <p className="text-sm md:text-base leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        <div className="bg-gray-50 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <p className="text-orange-500 italic text-sm mb-1">Chuks Kitchen</p>
              <h2 className="text-lg font-semibold text-gray-800">Create Your Account</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs text-gray-600 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706]"
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-xs text-gray-600 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-7 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              <div className="relative">
                <label htmlFor="confirmPassword" className="block text-xs text-gray-600 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-[#D97706]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-7 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-2 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the{' '}
                  <button type="button" className="text-orange-500 hover:underline">
                    Terms & Conditions
                  </button>
                  {' '}and{' '}
                  <button type="button" className="text-orange-500 hover:underline">
                    Privacy Policy
                  </button>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D97706] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#B45309] transition duration-200"
              >
                Continue
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <button className="w-full border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm text-gray-700">Continue with Google</span>
                </button>

                <button className="w-full border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-sm text-gray-700">Continue with Apple</span>
                </button>
              </div>
            </div>

            <p className="text-center mt-6 text-xs text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-orange-500 hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  )
}
