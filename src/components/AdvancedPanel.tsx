import { BookOpen, Code, Lightbulb, ExternalLink, FileText, Heart } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export default function AdvancedPanel() {
  return (
    <div className="bg-equi-navy text-slate-300 p-8 rounded-2xl shadow-lg border border-equi-navy/80 h-full flex flex-col transition-colors duration-200">
      <div className="mb-8">
        <div className="bg-equi-purple/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-equi-purple/30">
          <BookOpen className="text-equi-purple h-6 w-6" />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">
          El Rigor Científico de EquiAgua
        </h2>
      </div>

      <div className="space-y-8 flex-1">
        <section>
          <h3 className="text-equi-blue font-medium mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Metodología Experimental
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Se empleó un diseño de investigación cuantitativo de alcance propositivo. Para superar las limitaciones de precisión inherentes a la delimitación informal de "colonias", esta investigación adoptó un enfoque de análisis espacial geoestadístico. Se descartó el uso de polígonos vecinales arbitrarios en favor de unidades censales estandarizadas (AGEB), permitiendo una correlación directa entre la infraestructura hidráulica y la densidad demográfica oficial.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h4 className="text-white font-medium text-sm mb-2">1. Definición de la Unidad (AGEB)</h4>
              <p className="text-xs text-slate-400">La unidad mínima de asignación del modelo se definió como el Área Geoestadística Básica (AGEB) Urbana, que agrupa un conjunto de manzanas perfectamente delimitadas con características socioeconómicas homogéneas.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h4 className="text-white font-medium text-sm mb-2">2. Dataset Demográfico</h4>
              <p className="text-xs text-slate-400">Se procesaron los microdatos del Censo de Población y Vivienda 2020 (INEGI), extrayendo la población total para cada AGEB urbana activa y realizando una limpieza de datos (Data Cleaning).</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h4 className="text-white font-medium text-sm mb-2">3. Auditoría de Datos</h4>
              <p className="text-xs text-slate-400">Se extrajeron los datos de disponibilidad media anual de los acuíferos clave (0317 y 0319) mediante los dictámenes oficiales más recientes (CONAGUA, 2024), confirmando un déficit hídrico estructural de -36.56 hm³/año.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h4 className="text-white font-medium text-sm mb-2">4. Formulación del Modelo</h4>
              <p className="text-xs text-slate-400">Se desarrolló un modelo determinista compuesto por una restricción de capacidad del sistema y un algoritmo de asignación proporcional.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-equi-blue font-medium mb-3 flex items-center gap-2">
            <Code className="h-4 w-4" />
            Funcionamiento del Algoritmo
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            EquiAgua es un algoritmo determinista de asignación proporcional. A diferencia de modelos que truncan el servicio (función piso), este modelo busca la aproximación más justa al entero más cercano mediante la función de redondeo estándar, ajustada por un factor de seguridad. Calcula los días de suministro (<span className="text-equi-cyan"><InlineMath math="d_i" /></span>) para cada AGEB (<span className="text-equi-cyan"><InlineMath math="i" /></span>) usando su población (<span className="text-equi-cyan"><InlineMath math="P_i" /></span>), la población total del sistema (<span className="text-equi-cyan"><InlineMath math="P_{total}" /></span>), la duración del ciclo (<span className="text-equi-cyan"><InlineMath math="T" /></span>), y un factor de disponibilidad (<span className="text-equi-cyan"><InlineMath math="\beta" /></span>).
          </p>
          <div className="bg-black/20 p-6 rounded-xl border border-white/5 text-white overflow-x-auto flex justify-center text-lg">
            <BlockMath math="d_i = \text{nint} \left( \frac{P_i}{P_{total}} \times T \times \beta \right)" />
          </div>
          <p className="text-xs text-slate-500 mt-2 italic">
            * Los nint() redondea al entero más cercano.
          </p>
        </section>

        <section>
          <h3 className="text-equi-blue font-medium mb-3 flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Trabajo Futuro
          </h3>
          <p className="text-sm leading-relaxed">
            Reconocemos el carácter heurístico de esta primera fase. Nuestro plan incluye evolucionar hacia un Modelo de Programación Lineal (PL) para optimización rigurosa, integrando funciones objetivo (maximizar la utilidad social penalizando la asignación cero), restricciones de equidad más finas (volumen mínimo per cápita), y validación hidráulica mediante simulaciones externas (EPANET) para ajustar coeficientes de eficiencia.
          </p>
        </section>

        <section className="pt-4 border-t border-white/10">
          <h3 className="text-white font-medium mb-4">Recursos y Compromiso</h3>
          <div className="space-y-4">
            <a href="/docs/investigacion_completa.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-equi-purple/30">
              <span className="text-sm text-slate-200 group-hover:text-equi-purple transition-colors">Investigación Completa (PDF)</span>
              <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-equi-purple transition-colors" />
            </a>
            <div className="p-5 rounded-xl bg-gradient-to-br from-equi-navy to-[#0a1a2a] border border-equi-purple/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Heart className="w-24 h-24 text-equi-purple" />
              </div>
              <h4 className="text-sm font-medium text-equi-purple mb-3 flex items-center gap-2 relative z-10">
                <Heart className="w-4 h-4" />
                Nuestro Compromiso
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4 relative z-10">
                Este prototipo es el resultado de la pasión de dos jóvenes sudcalifornianos por las ciencias y las políticas públicas. Buscamos soluciones innovadoras para los desafíos hídricos de nuestra comunidad, transformando la demanda poblacional en una variable explícita para avanzar hacia la garantía del Derecho Humano al Agua.
              </p>
              <p className="text-xs text-equi-cyan/80 italic relative z-10">
                "Transitando de una gestión basada en la influencia política a una basada en la justicia demográfica y la realidad técnica."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
