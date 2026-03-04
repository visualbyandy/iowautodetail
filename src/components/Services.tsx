import { Shield, Sparkles, Droplets, Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "Ceramic Coating",
      desc: "Advanced nano-technology that creates a permanent bond with your paint, providing unmatched gloss and protection."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-emerald-500" />,
      title: "Paint Correction",
      desc: "Removing imperfections, swirls, and light scratches to restore the true depth and clarity of your vehicle's paint."
    },
    {
      icon: <Droplets className="w-8 h-8 text-emerald-500" />,
      title: "Interior Detailing",
      desc: "Deep cleaning and conditioning of all surfaces, from leather seats to intricate dashboard details."
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-zinc-800 w-fit group-hover:bg-emerald-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
