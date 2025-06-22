import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Appointment from '@/components/Appointment';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <About />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-wool.png')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4 tracking-wider uppercase">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Comprehensive Healthcare</h2>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive healthcare services tailored to your needs
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <Services />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="relative py-16 md:py-24 bg-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Team />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-wool.png')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4 tracking-wider uppercase">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">What Our Patients Say</h2>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Hear from people who have experienced our care
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <section id="appointment" className="relative py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Appointment />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <CTA />
          </div>
        </section>
      </main>
    </div>
  );
}
