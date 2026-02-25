import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FooterMain from '../components/FooterMain'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow grid md:grid-cols-2">
        <div className="hidden md:flex relative bg-gradient-to-br from-orangeMain to-orange-600 items-center justify-center p-12">
          <div className="absolute inset-0 bg-orangeMain opacity-85"></div>
          <div className="relative z-10 text-white text-center max-w-lg">
            <h1 className="text-5xl font-bold mb-6">Chuks Kitchen</h1>
            <p className="text-lg leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        <div className="bg-gray-100 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'cursive' }}>Chuks Kitchen</h2>
            <h3 className="text-xl font-semibold text-center text-textDark mb-6">Create Your Account</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textDark mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-borderLight rounded-md focus:ring-2 focus:ring-orangeMain focus:border-transparent" placeholder="Enter your email" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-textDark mb-1">Phone number</label>
                <input type="tel" className="w-full px-4 py-2 border border-borderLight rounded-md focus:ring-2 focus:ring-orangeMain focus:border-transparent" placeholder="Enter your phone number" />
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-textDark mb-1">Password</label>
                <input type={showPassword ? 'text' : 'password'} className="w-full px-4 py-2 border border-borderLight rounded-md focus:ring-2 focus:ring-orangeMain focus:border-transparent" placeholder="Create password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-textMuted">
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              <div className="relative">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-textDark mb-1">Confirm password</label>
                <input type={showConfirmPassword ? 'text' : 'password'} className="w-full px-4 py-2 border border-borderLight rounded-md focus:ring-2 focus:ring-orangeMain focus:border-transparent" placeholder="Confirm password" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-9 text-textMuted">
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span className="text-sm text-textMuted">
                  I agree to the <button type="button" className="text-orangeMain">Terms & Conditions</button> and <button type="button" className="text-orangeMain">Privacy Policy</button>
                </span>
              </div>

              <button type="submit" className="w-full bg-orangeMain text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                Continue
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-borderLight"></div>
              <span className="px-4 text-sm text-textMuted">Or continue with</span>
              <div className="flex-1 border-t border-borderLight"></div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 py-2 border border-borderLight rounded-md hover:bg-gray-50 transition">
                <span>🔍</span>
                <span className="font-medium">Continue with Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-2 border border-borderLight rounded-md hover:bg-gray-50 transition">
                <span>🍎</span>
                <span className="font-medium">Continue with Apple</span>
              </button>
            </div>

            <p className="text-center mt-6 text-sm text-textMuted">
              Already have an account? <Link to="/login" className="text-orangeMain font-semibold">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  )
}
