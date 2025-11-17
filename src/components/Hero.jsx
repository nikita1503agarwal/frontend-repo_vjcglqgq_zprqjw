import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-medium tracking-wide text-slate-700 mb-3">Strategic Advisory. Global Structures. Scalable Growth.</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
              I support entrepreneurs in building international business structures, scaling projects efficiently, and implementing modern technologies with purpose.
            </h1>
            <p className="mt-6 text-slate-700 text-lg max-w-2xl">
              Through clear strategies, practical expertise, and a focus on long-term growth, I help create solutions that deliver real impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Explore services</a>
              <a href="#contact" className="rounded-full bg-white/70 backdrop-blur border border-slate-200 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-white transition-colors">Contact</a>
            </div>
          </motion.div>
          <div className="lg:col-span-5"></div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
    </section>
  )
}
