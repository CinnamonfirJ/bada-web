import Navbar from "./_components/Navbar";
import Hero from "./_sections/Hero";
import NewEra from "./_sections/NewEra ";
import WhyUseBada from "./_sections/WhyUseBada";

export default function Home() {
  return (
    <div className='relative'>
      {/* Gradient */}
      <div className='absolute top-0 left-0 w-full -z-50 h-48 bg-gradient-to-b from-[rgba(33,144,195,0.3)] to-[rgba(33,144,195,0)] '></div>
      {/* Navbar */}
      <div className='z-10'>
        <Navbar />
      </div>

      <Hero />
      <WhyUseBada />
      <NewEra />
    </div>
  );
}
