import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">About</h2>
          <p className="mt-6 text-slate-700 leading-relaxed">
            I am a business-minded advisor specializing in international expansion, efficient organizational structures, and digital transformation.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            My work focuses on understanding business models quickly, assessing risks accurately, and building scalable solutions. With experience across multiple industries, modern tools, and an international network, I develop strategies that are realistic, effective, and immediately actionable.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I collaborate with founders, SMEs, and established businesses that expect more than traditional consulting — they want clarity, speed, and results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
