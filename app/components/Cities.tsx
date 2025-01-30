"use client";

import { useState } from "react";
import Slider from "react-slick";

export default function Cities() {
  const cities = [
    {
      name: "Bareilly",
      image:
        "https://tcsg.in/uploads/story/850X450/1667077359-1667077359-3115e.webp",
    },
    {
      name: "Badaun",
      image:
        "https://tcsg.in/uploads/story/850X450/1667077359-1667077359-3115e.webp",
    },
    {
      name: "Delhi",
      image:
        "https://tcsg.in/uploads/story/850X450/1667077359-1667077359-3115e.webp",
    },
    {
      name: "Gurugram",
      image:
        "https://tcsg.in/uploads/story/850X450/1667077359-1667077359-3115e.webp",
    },
    // Add more cities here
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className=" bg-white">
      <div className="py-12 px-8 md:px-16 ">
        <h3 className="text-orange-500 text-lg">Cities We Serve</h3>
        <h2 className="text-5xl font-bold mt-2">
          We Are Available{" "}
          <span className="text-orange-500">Across Cities!</span>
        </h2>
        <div className="mt-8 px-4">
          <Slider {...settings}>
            {cities.map((city, index) => (
              <div key={index} className="px-3 aspect-square">
                <div className="rounded-lg h-full w-full shadow-lg overflow-hidden relative flex items-center justify-center bg-orange-400">
                  {city.image ? (
                    <img
                      src={city.image}
                      alt={city.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                  ) : null}
                  <h3 className="text-white text-xl font-bold relative z-10">
                    {city.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-10">
          <button className="bg-orange-500 text-white text-xl px-6 py-2 rounded-md hover:bg-orange-700 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
