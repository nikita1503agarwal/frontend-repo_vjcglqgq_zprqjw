import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Analysis & Goal Setting',
    desc: 'Understanding the current situation, objectives, and bottlenecks.',
  },
  {
    title: 'Strategy & Structure',
    desc: 'Developing a clear, prioritized plan with actionable steps.',
  },
  {
    title: 'Implementation & Support',
    desc: 'Assisting in execution, optimization, and operational scaling.',
  },
  {
    title: 'Monitoring & Development',
    desc: 'Continuous refinement of the strategy as the business grows.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Approach
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 text-white text-sm font-medium">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
