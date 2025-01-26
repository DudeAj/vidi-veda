export default function Services() {
  const services = [
    {
      title: "Home Tuition for CBSE/ICSE (Nursery–12th)",
      image: "/service-1.jpg",
      online: false,
    },
    {
      title: "Online Classes for CBSE/ICSE (Nursery–12th)",
      image: "/service-2.jpg",
      online: true,
    },
    {
      title: "Extracurricular Activities (e.g., Dance, Music, Coding, Art)",
      image: "/service-3.jpg",
      online: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Personalized solutions for students, tutors, and parents! Just choose your role and fill out the necessary
          details to get started.
        </p>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  {service.online && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                      Online
                    </span>
                  )}
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

