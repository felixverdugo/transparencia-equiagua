import { MapContainer, TileLayer, Polygon, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { AgebData } from '../types';
import { useEffect } from 'react';

// Fix for default marker icons in Leaflet with React
import L from 'leaflet';
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapPanelProps {
  allAgebs: AgebData[];
  selectedAgeb: AgebData | null;
}

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function MapPanel({ allAgebs, selectedAgeb }: MapPanelProps) {
  // Default center: Cabo San Lucas
  const defaultCenter: [number, number] = [22.8905, -109.9167];
  
  let center = defaultCenter;
  let zoom = 12;

  if (selectedAgeb) {
    // Calculate a simple centroid from the first polygon ring
    const coords = selectedAgeb.geometria_geojson.coordinates[0];
    let latSum = 0;
    let lngSum = 0;
    coords.forEach(coord => {
      lngSum += coord[0];
      latSum += coord[1];
    });
    center = [latSum / coords.length, lngSum / coords.length];
    zoom = 14;
  }

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 z-0 relative">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full w-full">
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {allAgebs.map((ageb) => {
          const isSelected = selectedAgeb?.id_ageb === ageb.id_ageb;
          // Leaflet expects [lat, lng], GeoJSON is [lng, lat]
          const positions = ageb.geometria_geojson.coordinates[0].map(
            (coord) => [coord[1], coord[0]] as [number, number]
          );

          return (
            <Polygon
              key={ageb.id_ageb}
              positions={positions}
              pathOptions={{
                color: isSelected ? '#575FF2' : '#12A68B',
                fillColor: isSelected ? '#575FF2' : '#12A68B',
                fillOpacity: isSelected ? 0.6 : 0.2,
                weight: isSelected ? 3 : 1,
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
