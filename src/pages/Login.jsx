import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen bg-pageBg flex items-center justify-center py-12 px-4">
      <div className="w-96 bg-cardBg rounded-card shadow-sm p-6">
        <h2 className="text-[36px] font-bold text-textDark leading-tight mb-8 text-center">Welcome Back</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-[14px] text-textDark mb-2 font-semibold">
              Email
            </label>
            <input
              id="email" 
              type="email" 
              className="w-full px-4 py-3 border border-borderLight rounded-input text-base"
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
              className="w-full px-4 py-3 border border-borderLight rounded-input text-[16px]"
              placeholder="Enter your password"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-orangeMain text-pageBg py-3 rounded-button text-base font-semibold"
          >
            Login
          </button>
        </form>
        
        <p className="text-center mt-6 text-[14px] text-textMuted">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-orangeMain font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
