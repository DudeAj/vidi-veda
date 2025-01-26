export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src="/about-image.jpg" alt="About VidiVeda" className="rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold mb-4">Your Child's Learning Partner</h3>
            <p className="mb-4">
              We are dedicated to providing personalized learning experiences for students of all ages. Our mission is
              to connect students with expert tutors who understand their unique needs and learning styles.
            </p>
            <p className="mb-4">
              With a focus on CBSE & ICSE boards, we offer a comprehensive range of services, including home tuition,
              online classes, and extracurricular activities. We aim to foster a love for learning while ensuring
              academic excellence.
            </p>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Certified 2000+ Tutors
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Affordable Price
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

