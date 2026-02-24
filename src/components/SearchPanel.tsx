import React, { useState } from 'react';
import { AgebData } from '../types';
import { Search, MapPin, Droplets, Users, Calendar } from 'lucide-react';
import MapPanel from './MapPanel';

interface SearchPanelProps {
  agebs: AgebData[];
}

export default function SearchPanel({ agebs }: SearchPanelProps) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<AgebData | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    
    const lowerQuery = query.toLowerCase().trim();
    
    // Simple simulated search logic
    const found = agebs.find(
      (ageb) =>
        ageb.nombre_colonia_principal.toLowerCase().includes(lowerQuery) ||
        ageb.id_ageb === lowerQuery
    );
    
    setResult(found || null);
  };

  return (
    <div className="flex flex-col gap-8 bg-white dark:bg-[#0c1f30] p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 h-full transition-all duration-500 hover:shadow-2xl hover:border-equi-blue/30 dark:hover:border-equi-cyan/30 hover:-translate-y-1 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-equi-blue/5 to-transparent dark:from-equi-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-equi-blue/10 dark:bg-equi-cyan/10 mb-4 group-hover:scale-110 transition-transform duration-500">
          <Droplets className="text-equi-blue dark:text-equi-cyan w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-equi-navy dark:text-white mb-3">
          Consulta Tu Tandeo EquiAgua
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Descubre cuántos días de agua le corresponden a tu colonia según el algoritmo de equidad.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto w-full relative z-10">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 dark:text-slate-500" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-2xl leading-5 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:ring-0 focus:border-equi-blue dark:focus:border-equi-cyan text-base transition-colors"
            placeholder="Ingresa tu colonia (ej. 'Tierra y Libertad', 'Centro')"
          />
        </div>
        <button
          type="submit"
          className="bg-equi-blue hover:bg-equi-purple dark:bg-equi-cyan dark:hover:bg-equi-blue text-white dark:text-equi-navy font-semibold py-4 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
        >
          Buscar
        </button>
      </form>

      {searched && (
        <div className="mt-4 max-w-4xl mx-auto w-full relative z-10">
          {result ? (
            <div className="bg-equi-blue/5 dark:bg-equi-cyan/10 border border-equi-blue/20 dark:border-equi-cyan/20 rounded-2xl p-6 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                  <MapPin className="text-equi-blue dark:text-equi-cyan w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-equi-navy dark:text-slate-200 text-sm uppercase tracking-wider mb-1">
                    Tu ubicación (simulada) corresponde a:
                  </h3>
                  <p className="text-equi-purple dark:text-equi-cyan font-bold text-xl">
                    {result.nombre_colonia_principal} <span className="text-sm font-normal text-equi-blue/80 dark:text-equi-cyan/80 ml-2 bg-equi-blue/10 dark:bg-equi-cyan/10 px-2 py-1 rounded-md">AGEB: {result.id_ageb}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                  <Users className="text-equi-blue dark:text-equi-cyan w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-equi-navy dark:text-slate-200 text-sm uppercase tracking-wider mb-1">Población de tu AGEB:</h3>
                  <p className="text-slate-700 dark:text-slate-300 font-medium text-lg">{result.poblacion_ageb.toLocaleString()} habitantes</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white dark:bg-slate-800/80 p-5 rounded-xl border border-equi-blue/10 dark:border-equi-cyan/10 shadow-sm mt-2">
                <div className="bg-equi-blue/10 dark:bg-equi-cyan/10 p-2 rounded-lg">
                  <Calendar className="text-equi-blue dark:text-equi-cyan w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-equi-navy dark:text-white mb-2 text-lg">Calendario de Tandeo:</h3>
                  <p className="text-slate-800 dark:text-slate-200 mb-3 text-lg">
                    Según EquiAgua, tu zona recibirá agua <strong className="text-equi-purple dark:text-equi-cyan font-bold text-xl">{result.dias_asignados_ciclo} día(s)</strong> por cada ciclo de <strong className="text-equi-navy dark:text-white">{result.duracion_ciclo_T} días</strong>.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    Esto significa un día de suministro garantizado cada {result.dias_asignados_ciclo > 0 ? Math.round(result.duracion_ciclo_T / result.dias_asignados_ciclo) : 'N/A'} días (si es divisible) o un ajuste en la duración del tandeo para periodos más largos. La previsibilidad de saber cuándo llega el agua es la clave de este sistema.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 text-red-700 dark:text-red-400 p-6 rounded-2xl text-center animate-in fade-in zoom-in-95 duration-300">
              <p className="font-medium text-lg mb-1">No se encontró la colonia simulada.</p>
              <p className="text-red-600/80 dark:text-red-400/80">Intenta con "Tierra y Libertad", "Centro", "Lomas del Sol", "El Tezal" o "Los Cangrejos".</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 relative z-10">
        <MapPanel allAgebs={agebs} selectedAgeb={result} />
      </div>
    </div>
  );
}
