import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* the main background */}
      <div className="glow-bg top-[-10%] right-[-5%]"></div>
      
      {/* the navigation bar */}
      <Navbar />

      {/* the hero section */}
      <main className="pt-32 px-6 flex flex-col items-center justify-center min-h-screen">
        <Hero />
        <Products />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;