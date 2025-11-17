import { motion } from 'framer-motion'

const values = [
  { label: 'Transparency', desc: 'clear communication without ambiguity' },
  { label: 'Speed', desc: 'fast implementation and direct solutions' },
  { label: 'Structure', desc: 'efficient processes that reduce friction' },
  { label: 'Pragmatism', desc: 'focus on what works, not on theory' },
  { label: 'Technology-driven', desc: 'modern systems for measurable outcomes' },
]

export default function Values() {
  return (
    <section id="values" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Values & Principles
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-slate-900">{v.label}</h3>
              <p className="mt-2 text-slate-700">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
