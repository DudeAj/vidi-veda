'use client'

import { useState } from "react"

export default function Cities() {
  const [currentCity, setCurrentCity] = useState(0)
  const cities = [
    { name: "BAREILLY", image: "/bareilly.jpg" },
    // Add more cities here
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Cities We Serve</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">We Are Available Across Cities!</p>
        <div className="relative">
          {cities.map((city, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentCity ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img src={city.image || "/placeholder.svg"} alt={city.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white">{city.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {cities.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentCity ? "bg-blue-600" : "bg-gray-300"}`}
              onClick={() => setCurrentCity(index)}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition duration-300">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}

