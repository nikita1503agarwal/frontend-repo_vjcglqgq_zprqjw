import { motion } from 'framer-motion'

const items = [
  'Entrepreneurs planning international expansion',
  'Startups in need of clarity and structure',
  'SMEs wanting to digitize or automate workflows',
  'Projects requiring speed, efficiency, and strategic decisions',
  'Founders seeking guidance for growth and market positioning',
]

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Who I Work With
        </motion.h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((t) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
