"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false, // Enables navigation dots
    infinite: true, // Allows infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Delay between slides in ms
    arrows:false,
  };

  const slides = [
    {
      id: 1,
      image: "/img/hero_bg.webp",
      title: ["Find The Perfect", " Home Tutor", " for Your Child!"],
      description:
        "Find trusted Home tutors for academics and extracurricular activities, online or offline.",
    },
    {
      id: 2,
      image: "/img/hero_bg_2.webp",
      title: [
        "Your Trusted Home Tuition Partner – ", "Unlock Your Child's"," True Potential",
      ],
      description:
        "Discover top-rated home tutors in your area offering personalized lessons to match your child's unique learning style. From academics to extracurriculars, we've got you covered!",
    },
    {
      id: 3,
      image: "/img/hero_bg_3.webp",
      title: ["Expert Home Tuition", " Services for"," Academic Success"],
      description:
        "Connect with experienced and certified home tutors for effective, one-on-one learning. Flexible schedules, personalized teaching methods, and results-driven strategies await!",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Slide Image */}
            <img
              src={slide.image}
              alt={slide.title.toString()}
              className="w-full h-[40vh] lg:h-[85vh] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4 w-full lg:w-1/2">
                <h2 className="text-xl lg:text-6xl font-bold mb-2">
                  {slide.title[0]}{" "}
                  <span className="text-orange-500">{slide.title[1]}</span>
                  <span className="">{slide.title[2]}</span>
                </h2>
                <p className="text-md lg:text-xl mt-2">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
