import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise((res) => setTimeout(res, 800))
      setStatus('Thanks — your message has been sent!')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <form onSubmit={onSubmit} className="grid gap-4">
              <input name="name" placeholder="Name" required className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <input name="email" type="email" placeholder="Email" required className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <textarea name="message" placeholder="How can I help?" rows={5} required className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <button type="submit" className="inline-flex justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">Send message</button>
              {status && <p className="text-sm text-slate-600">{status}</p>}
            </form>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              For advisory requests, collaboration, or project inquiries, feel free to reach out. You will receive a clear, fast, and professional response.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Email: you@example.com</li>
              <li>LinkedIn: linkedin.com/in/yourprofile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
