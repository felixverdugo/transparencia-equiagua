export interface AgebData {
  id_ageb: string;
  nombre_colonia_principal: string;
  poblacion_ageb: number;
  geometria_geojson: {
    type: string;
    coordinates: number[][][];
  };
  dias_asignados_ciclo: number;
  duracion_ciclo_T: number;
  poblacion_total_sistema: number;
  factor_beta: number;
}
