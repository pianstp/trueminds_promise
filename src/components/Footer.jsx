import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brownFooter py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-pageBg">
          <div>
            <h3 className="text-[20px] font-bold mb-4">About</h3>
            <p className="text-[14px]">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[14px] hover:text-orangeMain">Home</Link></li>
              <li><Link to="/menu" className="text-[14px] hover:text-orangeMain">Explore</Link></li>
              <li><Link to="/cart" className="text-[14px] hover:text-orangeMain">My Order</Link></li>
              <li><Link to="/login" className="text-[14px] hover:text-orangeMain">Account</Link></li>
              <li><button className="text-[14px] hover:text-orangeMain">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-[14px]">
              <li>+234 123 456 7890</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Food Street, Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pageBg border-opacity-20 mt-8 pt-6 text-center">
          <p className="text-[14px] text-pageBg">
            © Chuks Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
