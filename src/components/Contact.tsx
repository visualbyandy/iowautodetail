import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">Get <span className="text-emerald-500">Detailed</span></h2>
            <p className="text-zinc-400 mb-14 text-xl font-light leading-relaxed">
              Ready to elevate your vehicle's appearance? Contact Iowa Auto Detail for a bespoke consultation.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Studio Location</h4>
                  <p className="text-xl font-bold">Des Moines, Iowa</p>
                  <p className="text-zinc-500 text-sm font-medium">Serving Central Iowa & Beyond</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Direct Line</h4>
                  <p className="text-xl font-bold">(515) 555-0123</p>
                  <p className="text-zinc-500 text-sm font-medium">Available Mon - Sat</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Electronic Mail</h4>
                  <p className="text-xl font-bold">studio@iowaautodetail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="p-3 rounded-full bg-zinc-900 hover:bg-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-zinc-900 hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="(515) 000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Vehicle Make & Model</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="2024 Tesla Model 3"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Tell us about the services you're interested in..."
                />
              </div>
              <button className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
