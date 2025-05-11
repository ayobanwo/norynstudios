

import { useEffect, useState } from "react"
import { HardHat, Hammer, Wrench, Ruler, Truck } from "lucide-react"

export default function ConstructionAnimation() {
  const [activeIcon, setActiveIcon] = useState(0)
  const icons = [
    { icon: HardHat, color: "text-yellow-500" },
    { icon: Hammer, color: "text-blue-500" },
    { icon: Wrench, color: "text-red-500" },
    { icon: Ruler, color: "text-green-500" },
    { icon: Truck, color: "text-purple-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-64 w-full flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
          {icons.map((Icon, index) => {
            const IconComponent = Icon.icon
            return (
              <IconComponent
                key={index}
                className={`absolute h-16 w-16 transition-all duration-500 ${Icon.color} ${
                  index === activeIcon ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              />
            )
          })}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#f3f4f6"
          />
        </svg>
      </div>
    </div>
  )
}
