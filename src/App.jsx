import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Clients from './components/Clients'
import Values from './components/Values'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-28">
        <Hero />
        <About />
        <Services />
        <Approach />
        <Clients />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
