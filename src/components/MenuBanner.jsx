export default function MenuBanner() {
  return (
    <div className="relative h-64 md:h-80 bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-text-inverted px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Chuks Kitchen</h1>
        <p className="text-lg md:text-xl">Authentic Nigerian Cuisine</p>
      </div>
    </div>
  )
}
