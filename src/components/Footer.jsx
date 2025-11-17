export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 mt-20">
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Strategic Advisory. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}
