import { menuItems } from '../data/menuData'

export default function Menu() {
  return (
    <div className="bg-pageBg py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-bold text-textDark leading-tight mb-4">Our Menu</h1>
          <p className="text-[16px] text-textMuted">
            Explore our delicious selection of authentic dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-cardBg rounded-card shadow-sm p-5"
            >
              <div className="h-48 bg-borderLight rounded-card mb-4"></div>
              
              <div className="space-y-3">
                <h3 className="text-[24px] font-semibold text-textDark">
                  {item.name}
                </h3>
                <p className="text-[16px] text-textMuted">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[24px] font-bold text-orangeMain">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="bg-orangeMain text-pageBg px-8 py-3 rounded-button text-base font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
