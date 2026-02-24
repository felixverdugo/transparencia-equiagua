import { Scale, Info, ShieldCheck } from 'lucide-react';

export default function TransparencyPanel() {
  return (
    <div className="bg-white dark:bg-[#0c1f30] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-colors duration-200">
      <div className="mb-8">
        <div className="bg-equi-teal/10 dark:bg-equi-teal/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
          <Scale className="text-equi-teal h-6 w-6" />
        </div>
        <h2 className="text-2xl font-semibold text-equi-navy dark:text-white mb-2">
          ¿Por qué este Tandeo? La Transparencia de EquiAgua
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
        <p className="flex gap-4">
          <Info className="shrink-0 text-equi-teal mt-1" />
          <span>
            El agua es un recurso escaso en Los Cabos. El tandeo es una medida necesaria para gestionarla.
          </span>
        </p>

        <p className="flex gap-4">
          <ShieldCheck className="shrink-0 text-equi-teal mt-1" />
          <span>
            <strong className="text-equi-navy dark:text-white font-medium">EquiAgua busca justicia:</strong> tu asignación se basa en la población real de tu zona, asegurando que la escasez se comparta de forma predecible y equitativa entre todos, no por intereses o discrecionalidad. Así garantizamos un mínimo vital.
          </span>
        </p>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50 mt-8">
          <h3 className="font-medium text-equi-navy dark:text-white mb-3">Criterios de Asignación</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-equi-teal" />
              Consideramos la capacidad total de agua disponible del sistema.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-equi-teal" />
              Evaluamos la eficiencia de la red para realizar la mejor distribución posible.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-equi-teal" />
              Priorizamos el acceso equitativo por habitante.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
