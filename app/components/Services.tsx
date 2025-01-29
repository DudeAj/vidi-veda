"use client";
import Slider from "react-slick";

export default function Services() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        arrows: false,
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      title: "Home Tuition for CBSE/ICSE (Nursery–12th)",
      image: "/img/student.png",
      online: false,
    },
    {
      title: "Online Classes for CBSE/ICSE (Nursery–12th)",
      image: "/img/student.png",
      online: true,
    },
    {
      title: "Extracurricular Activities (e.g., Dance, Music, Coding, Art)",
      image: "/img/student.png",
      online: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-lg text-orange-500 mb-4 text-center">
          Our Services
        </h2>
        <h3 className="text-5xl text-center font-semibold mb-4">
          Your Child's <span className="text-orange-500">Learning Partner</span>
        </h3>
        <p className="text-center text-xl mb-12 px-16 mx-auto">
          Personalized solutions for students, tutors, and parents! Just choose
          your role and fill out the necessary details to get started.
        </p>
        <div className="">
          <Slider {...settings} className="px-4">
            {services.map((service, index) => (
              <div key={index} className="px-0 lg:px-2">
                <div className="relative h-[600px]">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className=" object-cover w-full h-full overflow-hidden rounded-lg absolute"
                  />
                  <div className="absolute bg-black/15 top-0 h-full w-full rounded-lg overflow-hidden"></div>
                  <div className="flex h-full flex-col justify-center absolute top-0 bottom-0 items-center">
                    <div className=" rounded-lg">
                      <div className="p-6 flex justify-center flex-col">
                        <h3 className="text-xl text-center text-white mb-2">
                          {service.title}
                        </h3>
                        {service.online && (
                          <span className="text-center inline  text-white text-sm px-2 py-1 rounded-full mb-2">
                            Online
                          </span>
                        )}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white text-xl px-6 py-2 rounded-md hover:bg-orange-700 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
