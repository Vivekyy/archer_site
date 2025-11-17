import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import logoMark from './assets/archer-logo.svg';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'pb-1 text-sm font-medium tracking-wide transition-colors border-b-2',
    isActive ? 'text-archer-white border-archer-purple' : 'text-archer-gray border-transparent hover:text-white',
  ].join(' ');

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-archer-dark text-archer-white flex flex-col">
        <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-archer-dark/95 px-6 py-4 backdrop-blur">
          <NavLink to="/" className="flex items-center gap-3 text-sm font-bold tracking-[0.4em] text-white">
            <img src={logoMark} alt="Archer logo" className="h-10 w-10" />
            <span>ARCHER</span>
          </NavLink>
          <nav className="flex flex-1 justify-center gap-6">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/team" className={navLinkClass}>
              Team
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
          <NavLink
            to="/contact"
            className="rounded-full bg-gradient-to-r from-archer-purple to-archer-lilac px-5 py-2 text-sm font-semibold text-archer-dark shadow-card transition-transform hover:-translate-y-0.5"
          >
            Request Beta
          </NavLink>
        </header>

        <main className="flex-1 bg-archer-hero px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#04040f] px-6 py-6 text-sm text-archer-gray">
          <div>© {new Date().getFullYear()} Archer Labs.</div>
          <div>Natural-language programmable banking • Instant settlement • No middlemen</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
