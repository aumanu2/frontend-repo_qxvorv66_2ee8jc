import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesGrid from './components/GamesGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-slate-200">
      <Navbar />
      <Hero />
      <main>
        <GamesGrid />
      </main>
      <Footer />
    </div>
  );
}
