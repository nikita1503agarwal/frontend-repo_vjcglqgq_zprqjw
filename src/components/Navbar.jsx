import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Clients', href: '#clients' },
  { label: 'Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border border-white/50 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold text-lg tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Advisory</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">Get in touch</a>
            </nav>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-slate-200 px-4 py-3 grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-slate-900">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">Get in touch</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
