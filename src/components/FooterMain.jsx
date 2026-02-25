import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#5b3a29] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Chuks Kitchen</h3>
            <p className="text-sm text-gray-300">
              Bringing authentic Nigerian flavors to your table since 1998. Quality meals made with love.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orangeMain transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-orangeMain transition">Menu</Link></li>
              <li><Link to="/about" className="hover:text-orangeMain transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orangeMain transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+234 123 456 7890</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Food Street, Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
        
      
              <ul className="space-y-2 text-sm text-gray-300">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Instagram</li>
              
            </ul>
            
          </div>
        </div>

        <div className="mt-8 pt-6 text-left text-sm text-gray-200">
          © 2024 Chuks Kitchen. All rights reserved.
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition flex items-center justify-center">
        ↑
      </button>
    </footer>
  )
}
