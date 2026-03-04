import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Express Detail",
    price: "$175",
    avgPrice: "Iowa Avg: $150 - $250",
    description: "Perfect for a quick refresh and maintenance.",
    features: [
      "Hand Wash & Dry",
      "Interior Vacuum",
      "Window Cleaning",
      "Tire Dressing",
      "Spray Wax Protection"
    ],
    popular: false
  },
  {
    name: "Signature Full Detail",
    price: "$350",
    avgPrice: "Iowa Avg: $250 - $450",
    description: "Our most popular deep cleaning service.",
    features: [
      "Everything in Express",
      "Clay Bar Treatment",
      "Iron Decontamination",
      "Interior Steam Cleaning",
      "Leather Conditioning",
      "1-Stage Machine Polish"
    ],
    popular: true
  },
  {
    name: "Ceramic Pro Package",
    price: "$850",
    avgPrice: "Iowa Avg: $600 - $1,200",
    description: "Long-term protection with 2-year warranty.",
    features: [
      "Full Paint Correction",
      "2-Year Ceramic Coating",
      "Wheel Face Coating",
      "Glass Coating",
      "Hydrophobic Properties",
      "UV Protection"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">Investment <span className="text-emerald-500">Tiers</span></h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg font-light">
            Professional protection tailored for the Iowa climate. Transparent pricing based on regional market standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] ${
                pkg.popular 
                  ? 'border-emerald-500/40 bg-emerald-500/[0.03] shadow-2xl shadow-emerald-500/10' 
                  : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
              } flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Recommended
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">{pkg.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter">{pkg.price}</span>
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Base</span>
                </div>
                <div className="mt-2 inline-block px-3 py-1 bg-zinc-900 rounded-md">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{pkg.avgPrice}</p>
                </div>
                <p className="text-zinc-400 mt-6 text-sm font-light leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/#contact"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${
                  pkg.popular 
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
