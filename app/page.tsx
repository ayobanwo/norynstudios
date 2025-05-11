"use client"
import CountdownTimer from "./components/countdown-timer";
import Image from "next/image";

import { useEffect, useState } from "react"
import { HardHat, Hammer, Wrench, Ruler, Truck } from "lucide-react"

export default function Home() {
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
        <div className=" flex flex-col justify-center items-center min-h-[100vh] bg-gradient-to-b from-gray-900 to-black font-[family-name:var(--font-geist-sans)] ">
            <div className="max-w-3xl w-full py-20 bg-gray-800 rounded-lg shadow-lg border border-gray-700 ">

                <div className=" flex items-center justify-center">
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

                <div className="flex flex-col items-center justify-center mt-10">
                    <Image
                        src="/images/noryn.png"
                        alt="Hero Image"
                        width={200}
                        height={200}
                        className=""
                    />
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-300 mt-8">Under Construction</h2>
                    <p className="text-gray-400 mt-4 max-w-[700px] text-center px-2">
                        We're working hard to bring you something amazing. Our website is currently under construction, but
                        we'll be launching soon.
                    </p>

                </div>
                <div className="flex justify-center mt-6">

                    <CountdownTimer targetDate="2025-06-10T00:00:00" />
                </div>
            </div>


        </div>
    );
}
