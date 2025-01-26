export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Certified Tutors",
      description: "Learn from highly qualified and experienced tutors",
      icon: "👨‍🏫",
    },
    {
      title: "Flexible Online & Offline Classes",
      description: "Choose the ease of online classes or the impact of in-person learning.",
      icon: "🖥️",
    },
    {
      title: "Affordable Pricing",
      description: "Quality education at competitive prices, making learning accessible for everyone.",
      icon: "💰",
    },
    {
      title: "Personalized Learning Plans",
      description: "Customized study plans tailored to each student's learning pace and goals.",
      icon: "📚",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose VidiVeda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{reason.icon}</span>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

