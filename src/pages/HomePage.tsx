import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-emerald-500" />
                #1 Rated in Central Iowa
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.85] tracking-tighter mb-8 uppercase">
                Elite <span className="text-emerald-500">Protection</span> <br /> for your drive.
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                Professional Ceramic Coating and Master Detailing based in Des Moines. We preserve your vehicle's showroom finish with surgical precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#pricing" className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                  View Packages
                </Link>
                <Link to="/#contact" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Get Quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Carousel />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
            {[
              { label: "Cars Protected", value: "1,200+" },
              { label: "Years Experience", value: "10+" },
              { label: "5-Star Reviews", value: "500+" },
              { label: "Warranty Years", value: "2-9" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-emerald-500 mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <Services />
      <Pricing />
      <Contact />
    </>
  );
}
