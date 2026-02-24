import { useState, useEffect } from 'react';
import SearchPanel from './components/SearchPanel';
import TransparencyPanel from './components/TransparencyPanel';
import AdvancedPanel from './components/AdvancedPanel';
import { AgebData } from './types';
import data from './data.json';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [agebs, setAgebs] = useState<AgebData[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // In a real app, this might be a fetch call
    setAgebs(data as AgebData[]);
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen font-sans selection:bg-equi-blue/30 selection:text-equi-navy dark:selection:text-white">
      <header className="bg-white dark:bg-[#0c1f30] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-equi-blue rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-equi-navy dark:text-white">EquiAgua <span className="text-equi-blue font-medium">Los Cabos</span></h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#" className="hover:text-equi-blue dark:hover:text-equi-cyan transition-colors">Inicio</a>
              <a href="#" className="hover:text-equi-blue dark:hover:text-equi-cyan transition-colors">Metodología</a>
            </nav>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8">
          {/* Section 1: Consulta y Mapa */}
          <div className="w-full">
            <SearchPanel agebs={agebs} />
          </div>

          {/* Section 2: Transparencia */}
          <div className="w-full">
            <TransparencyPanel />
          </div>

          {/* Section 3: Avanzada y Sobre el Proyecto */}
          <div className="w-full">
            <AdvancedPanel />
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 dark:bg-[#081521] text-slate-400 py-8 border-t border-slate-800 mt-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Proyecto EquiAgua. Prototipo para presentación científica.</p>
          <p className="text-slate-500">
            Autores: Karol Sánchez Peña - 123667@liceoloscabos.edu.mx, Félix Verdugo Romero - 123754@liceoloscabos.edu.mx<br/>
            Asesor: Ángel Rafael David Ramírez Ruiz - angel.r@liceoloscabos.edu.mx
          </p>
        </div>
      </footer>
    </div>
  );
}
