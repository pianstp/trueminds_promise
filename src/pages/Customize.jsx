import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import FooterMain from "../components/FooterMain"
import FoodCustomization from "../components/FoodCustomization"

import img1 from "../imgs/image 1.png"
import img2 from "../imgs/image 2.png"

const foods = [
  {
    id: 1,
    name: "Jollof Rice with Fried Chicken",
    price: 3200,
    description:
      "Delicious Nigerian jollof rice served with crispy fried chicken, perfectly seasoned and cooked to perfection.",
    image: img1,
  },
]

export default function Customize() {
  const { id } = useParams()
  const navigate = useNavigate()
  const food = foods.find((f) => f.id === Number.parseInt(id, 10)) || foods[0]

  const formRef = useRef(null)
  const [imgHeight, setImgHeight] = useState(400)

  useEffect(() => {
    if (formRef.current) {
      setImgHeight(formRef.current.offsetHeight)
    }
  }, [])

  const handleAddToCart = (customizedFood) => {
    console.log("Added to cart:", customizedFood)
    navigate("/cart")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-0 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-2/5 flex-shrink-0 flex items-stretch">
            <div className="w-full" style={{ height: imgHeight }}>
              <img
                src={img2}
                alt="Food"
                className="rounded-xl object-cover shadow-lg w-full h-full"
                style={{ boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5 flex flex-col justify-stretch" ref={formRef}>
            <FoodCustomization food={food} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </main>
      <FooterMain />
    </div>
  )
}
