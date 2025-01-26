export default function CallToAction() {
  return (
    <section className="p-16  text-white">
      <div className="bg-black rounded-3xl  p-16 flex">
        <div className="container px-4 w-3/4">
          <p className="mb-6 text-2xl">
            Join Thousands of Students and Tutors on VidiVeda.
          </p>
          <h2 className="text-7xl font-bold mb-8">
            Ready to Start Your Journey?
          </h2>
          <div className="flex gap-5">
            <button className="bg-orange-500 w-[200px] border border-transparent text-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:border hover:border-orange-500 hover:text-orange-500 transition duration-300">
              Join as a Tutor
            </button>
            <button className="bg-white text-black w-[200px] px-6 py-3 rounded-lg text-lg hover:bg-orange-500 hover:text-white transition duration-300">
              Hire a Tutor
            </button>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img src="/img/teacher.webp" alt="Teacher" className="rounded-lg h-96 absolute -bottom-16 right-44" />
          <img src="/img/child.webp" alt="Child" className="rounded-lg h-64 right-8 absolute -bottom-16" />
        </div>
      </div>
    </section>
  );
}
