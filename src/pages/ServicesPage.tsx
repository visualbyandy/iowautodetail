import { motion } from 'motion/react';
import { Shield, Sparkles, Droplets, CheckCircle2, ArrowRight, Car, Zap, Sun, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    subtitle: "The Ultimate Shield",
    description: "Our ceramic coating service uses advanced nano-technology to create a semi-permanent bond with your vehicle's factory paint. This creates a sacrificial layer that is harder than the clear coat itself.",
    benefits: [
      "9H Hardness Protection",
      "Extreme Hydrophobic Properties (Water Beading)",
      "UV & Oxidation Resistance",
      "Chemical & Stain Resistance",
      "Enhanced Mirror-Like Gloss",
      "Easier Maintenance & Cleaning"
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    icon: <Shield className="w-12 h-12 text-emerald-500" />
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    subtitle: "Restore the Perfection",
    description: "Paint correction is the process of removing imperfections in the surface of a vehicle's finish and restoring it to a better-than-new condition. This involves specialized machine polishers and abrasive compounds.",
    benefits: [
      "Removal of Swirl Marks & Scratches",
      "Elimination of Oxidation & Etching",
      "Restored Color Depth & Clarity",
      "Perfect Surface for Ceramic Coating",
      "Increased Resale Value",
      "Mirror-Finish Results"
    ],
    image: "https://images.unsplash.com/photo-1708805282695-ef186db20192?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Sparkles className="w-12 h-12 text-emerald-500" />
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    subtitle: "Showroom Fresh Cabin",
    description: "We don't just clean; we restore. Our interior detailing service focuses on every nook and cranny of your vehicle's cabin using steam, specialized cleaners, and premium conditioners.",
    benefits: [
      "Deep Steam Sanitization",
      "Leather Cleaning & Conditioning",
      "Stain Removal & Carpet Shampoo",
      "Odor Elimination Treatment",
      "UV Protection for Plastics/Vinyl",
      "Pet Hair & Sand Removal"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661495725810-0e92d20311ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwaW50ZXJpb3IlMjBkZXRhaWxpbmd8ZW58MHx8MHx8fDA%3D",
    icon: <Droplets className="w-12 h-12 text-emerald-500" />
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
            Our <span className="text-emerald-500">Expertise</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Discover the science behind our master craftsmanship. We use only the finest products and techniques to protect your investment.
          </p>
        </motion.div>

        {/* Detailed Sections */}
        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <motion.section 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-emerald-500 font-black uppercase tracking-widest text-xs">{service.subtitle}</h4>
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">{service.title}</h2>
                  </div>
                </div>
                
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/#contact" 
                  className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-sm group"
                >
                  Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex-1 w-full">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="relative rounded-[2.5rem] border border-white/10 shadow-2xl w-full h-[300px] md:h-[400px] object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[3rem] bg-emerald-500 text-black text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">Ready for the <br /> Showroom Finish?</h2>
            <p className="text-black/70 text-lg md:text-xl max-w-xl mx-auto mb-10 font-bold">
              Join hundreds of satisfied Iowa car owners who trust us with their vehicles.
            </p>
            <Link 
              to="/#contact"
              className="inline-block bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-900 transition-colors shadow-2xl"
            >
              Schedule Appointment
            </Link>
          </div>
          <Car className="absolute -bottom-10 -right-10 w-64 h-64 text-black/5 rotate-[-15deg]" />
        </motion.div>
      </div>
    </div>
  );
}
