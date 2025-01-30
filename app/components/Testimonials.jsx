"use client";

import { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import Button from "../ui/Button";

export default function Testimonials() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  const [testimonials] = useState([
    {
      name: "John Doe",
      role: "Parent",
      content:
        "VidiVeda has been a game-changer for my child's education. The tutors are excellent and the personalized approach has really boosted my child's confidence.",
      rating: 5,
      image: "/img/profile.png",
    },
    {
      name: "Jane Smith",
      role: "Student",
      content:
        "I love learning with VidiVeda! The lessons are engaging and help me understand concepts much better than before.",
      rating: 4,
      image: "/img/profile.png",
    },
    {
      name: "Robert Brown",
      role: "Teacher",
      content:
        "VidiVeda provides a fantastic platform for both students and teachers. The resources available make teaching more effective and enjoyable.",
      rating: 5,
      image: "/img/profile.png",
    },
  ]);

  //   <img
  //   src={service.image || "/placeholder.svg"}
  //   alt={service.title}
  //   className="object-cover w-20 h-20  overflow-hidden rounded-full "
  // />
  // <div className="absolute bg-black/15 top-0 h-full w-full rounded-lg overflow-hidden"></div>

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-lg text-orange-500 mb-4 text-center">
          Testimonials
        </h2>
        <h3 className="text-5xl text-center font-semibold mb-4">
          What Our <span className="text-orange-500">Client Say</span>
        </h3>

        <div className="mt-12">
          <Slider {...settings} className="px-4">
            {testimonials.map((service, index) => (
              <div key={index} className="px-0 lg:px-2">
                <div className="relative h-auto md:h-[400px] border rounded-2xl bg-orange-200">
                  <div className="flex h-full w-full flex-col justify-center  top-0 bottom-0 items-center">
                    <div className="rounded-lg">
                      <div className="p-6 flex justify-center flex-col">
                        <h3 className="text-xl text-center text-black mb-2">
                          {service.title}
                        </h3>
                        <p className="text-center px-2 md:px-36 text-lg">
                          {service.content}
                        </p>
                        <div className="flex justify-center mt-8">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="object-cover w-20 h-20  overflow-hidden rounded-full "
                          />
                          <div className="ml-2 flex flex-col justify-center">
                            <p className="text-lg items-center font-bold">
                              {service?.name}
                            </p>
                            <p className="text-left">{service?.role}</p>
                          </div>
                        </div>
                        <div className="flex justify-center mt-10 gap-2">
                          {Array.from({ length: service.rating }).map(
                            (_, index) => (
                              <FaStar key={index} size={24} />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center mt-8">
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
}
