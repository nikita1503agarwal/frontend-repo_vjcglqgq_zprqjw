import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const groups = [
  {
    title: 'Strategic Business Development',
    items: [
      'Analysis of the existing business model',
      'Scaling strategies for DACH, EU, and global markets',
      'Building efficient structures and operational frameworks',
      'Cost, process, and resource optimization',
    ],
  },
  {
    title: 'International Corporate Structuring',
    items: [
      'Consulting on jurisdiction selection, setup processes, and compliance',
      'Comparison of different regions (EU, UAE, etc.)',
      'Structuring for tax efficiency and global expansion',
      'Access to partners, legal experts, and authorities',
    ],
  },
  {
    title: 'Digital Systems & Automation',
    items: [
      'Digitization of internal workflows',
      'Implementing modern tools and automation',
      'Optimizing communication, processes, and data management',
      'Consulting on AI-powered business solutions',
    ],
  },
  {
    title: 'Project Scaling & Operations',
    items: [
      'Building systems that support rapid growth',
      'Project management, tracking, and operational support',
      'KPI frameworks and performance monitoring',
      'Preparation for investors, partners, and market expansion',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Services
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-slate-900">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-cyan-600 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
