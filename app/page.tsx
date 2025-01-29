import Header from "./components/Header"
import Hero from "./components/Hero"
import Registration from "./components/Registration"
import About from "./components/About"
import Services from "./components/Services"
import Cities from "./components/Cities"
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Signup from './components/Signup'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Registration />
        {/* <Signup/> */}
        <About />
        <Services />
        <Cities />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

