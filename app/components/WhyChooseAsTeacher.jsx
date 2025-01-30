export default function WhyChooseAsTeacher() {
  const reasons = [
    {
      title: "Certified Tutors",
      description: "Learn from highly qualified and experienced tutors",
      icon: "👨‍🏫",
    },
    {
      title: "Flexible Online & Offline Classes",
      description:
        "Choose the ease of online classes or the impact of in-person learning.",
      icon: "🖥️",
    },
    {
      title: "Affordable Pricing",
      description:
        "Quality education at competitive prices, making learning accessible for everyone.",
      icon: "💰",
    },
    {
      title: "Personalized Learning Plans",
      description:
        "Customized study plans tailored to each student's learning pace and goals.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-white flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-7/12 mx-auto px-4">
        {/* <h3 className="text-orange-500 text-lg">Why Choose VidiVeda?</h3> */}
        <h2 className="text-5xl font-bold mt-2">
          Why Choose{" "}
          <span className="text-orange-500">VidiVeda as a Teacher?</span>
        </h2>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8">
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
      <div className="w-full md:w-5/12 flex flex-col justify-center items-center px-8">
        <div className="w-full">
          <img
            src="/img/tuition-1.png"
            className="aspect-square w-3/5 object-cover rounded-tr-[50px]"
          />
        </div>
        <div className="w-full flex justify-end">
          <img
            src="/img/tuition-2.png"
            className="aspect-square w-3/5 object-cover rounded-bl-[50px]"
          />
        </div>
      </div>
    </section>
  );
}
