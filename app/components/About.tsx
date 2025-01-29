export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap ">
          <div className="w-full flex justify-center md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src="/img/student.png"
              alt="About VidiVeda"
              className="rounded-lg shadow-md h-[650px] object-cover border border-orange-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-lg text-orange-500 mb-4">About Us</h2>
            <h3 className="text-6xl font-semibold mb-4">
              Your Child's{" "}
              <span className="text-orange-500">Learning Partner</span>
            </h3>
            <p className="mb-4 text-xl">
              We are dedicated to providing personalized learning experiences
              for students of all ages. Our mission is to connect students with
              expert tutors who understand their unique needs and learning
              styles.
            </p>
            <p className="mb-4 text-xl">
              With a focus on CBSE & ICSE boards, we offer a comprehensive range
              of services, including home tuition, online classes, and
              extracurricular activities. We aim to foster a love for learning
              while ensuring academic excellence.
            </p>
            <ul className="mb-6">
              <li className="flex text-xl items-center mb-2">
                <svg
                  className="w-10 h-10 mr-2 bg-gray-100 rounded-full p-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Certified 2000+ Tutors
              </li>
              <li className="flex items-center text-xl">
                <svg
                  className="w-10 h-10 mr-2 bg-gray-100 rounded-full p-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Affordable Price
              </li>
            </ul>
            <button className="bg-orange-500 text-white text-xl px-6 py-2 rounded-md hover:bg-orange-700 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
