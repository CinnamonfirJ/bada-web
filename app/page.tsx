import Navbar from "./_components/Navbar";
import Partners from "./_components/Partners";
import FAQ from "./_sections/FAQ";
import Footer from "./_sections/Footer";
import Hero from "./_sections/Hero";
import NewEra from "./_sections/NewEra ";
import Testimonials from "./_sections/Testimonials";
import ToolsResources from "./_sections/ToolsResources";
import WhyUseBada from "./_sections/WhyUseBada";

export default function Home() {
  return (
    <div className='relative bg-[#E6E6E6]'>
      {/* Gradient */}
      <div className='absolute top-0 left-0 w-full -z-50 h-48 bg-gradient-to-b from-[rgba(33,144,195,0.3)] to-[rgba(33,144,195,0)] '></div>
      {/* Navbar */}
      <div className='z-10'>
        <Navbar />
      </div>

      <Hero />
      <Partners />
      <WhyUseBada />
      <NewEra />
      <ToolsResources />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
