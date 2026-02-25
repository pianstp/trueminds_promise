import Hero from '../imgs/b34e6c700df600b228e2ab2504fc9bbf7815c2ed.png';
export default function HeroImage() {
  return (
    <div
      className="relative h-full min-h-screen bg-cover bg-center flex items-center justify-center p-8 md:p-12"
      style={{
        backgroundImage: `url(${Hero})`, 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

     
      <div className="relative z-10 text-center text-text-inverted max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Chuks Kitchen</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
        </p>
      </div>
    </div>
  );
}