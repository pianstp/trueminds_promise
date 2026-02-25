import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="min-h-screen bg-pageBg flex items-center justify-center py-12 px-4">
      <div className="w-96 bg-cardBg rounded-card shadow-sm p-6">
        <h2 className="text-[36px] font-bold text-textDark leading-tight mb-8 text-center">Create Account</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="fullname" className="block text-[14px] text-textDark mb-2 font-semibold">
              Full Name
            </label>
            <input
              id="fullname" 
              type="text" 
              className="w-full px-4 py-3 border border-borderLight rounded-input text-base"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-[14px] text-textDark mb-2 font-semibold">
              Email
            </label>
            <input
              id="email" 
              type="email" 
              className="w-full px-4 py-3 border border-borderLight rounded-input text-[16px]"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-[14px] text-textDark mb-2 font-semibold">
              Password
            </label>
            <input
              id="password" 
              type="password" 
              className="w-full px-[16px] py-[12px] border border-borderLight rounded-input text-[16px]"
              placeholder="Create a password"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-orangeMain text-pageBg py-3 rounded-button text-base font-semibold"
          >
            Register
          </button>
        </form>
        
        <p className="text-center mt-6 text-[14px] text-textMuted">
          Already have an account?{' '}
          <Link to="/login" className="text-orangeMain font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
