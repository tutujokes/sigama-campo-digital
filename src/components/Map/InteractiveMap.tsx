import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

// Fix for default markers in React-Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Property {
  id: string;
  name: string;
  position: LatLngExpression;
  animals: number;
  type: "farm" | "quarantine" | "inspection";
  address: string;
}

// Propriedades no Maranhão
const properties: Property[] = [
  {
    id: "1",
    name: "Fazenda São José",
    position: [-2.5394, -44.2825], // São Luís
    animals: 234,
    type: "farm",
    address: "São Luís - MA",
  },
  {
    id: "2",
    name: "Fazenda Esperança",
    position: [-5.5292, -47.4628], // Imperatriz
    animals: 189,
    type: "farm",
    address: "Imperatriz - MA",
  },
  {
    id: "3",
    name: "Fazenda Santa Clara",
    position: [-4.2468, -44.9673], // Caxias
    animals: 156,
    type: "quarantine",
    address: "Caxias - MA",
  },
  {
    id: "4",
    name: "Fazenda Boa Vista",
    position: [-5.0892, -42.8036], // Timon
    animals: 98,
    type: "farm",
    address: "Timon - MA",
  },
  {
    id: "5",
    name: "Posto de Inspeção AGED",
    position: [-2.5297, -44.3028], // São Luís (centro)
    animals: 45,
    type: "inspection",
    address: "Centro - São Luís - MA",
  },
  {
    id: "6",
    name: "Fazenda Nova Esperança",
    position: [-3.4653, -44.2108], // Bacabal
    animals: 178,
    type: "farm",
    address: "Bacabal - MA",
  },
  {
    id: "7",
    name: "Fazenda Paraíso",
    position: [-6.7756, -47.4908], // Estreito
    animals: 203,
    type: "farm",
    address: "Estreito - MA",
  },
];

// Heatmap points simulando movimentações
const movementHeatmap = [
  { position: [-2.5394, -44.2825], intensity: 0.8 },
  { position: [-5.5292, -47.4628], intensity: 0.9 },
  { position: [-4.2468, -44.9673], intensity: 0.6 },
  { position: [-5.0892, -42.8036], intensity: 0.5 },
  { position: [-3.4653, -44.2108], intensity: 0.7 },
  { position: [-6.7756, -47.4908], intensity: 0.85 },
];

// Componente para centralizar o mapa
const MapCenterControl = ({ center }: { center: LatLngExpression }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  
  return null;
};

const InteractiveMap = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(true);

  // Centro do Maranhão
  const maranhaoCenterPosition: LatLngExpression = [-4.5, -45.0];

  const getMarkerColor = (type: Property["type"]) => {
    switch (type) {
      case "farm":
        return "#2563eb"; // primary
      case "quarantine":
        return "#f59e0b"; // warning
      case "inspection":
        return "#10b981"; // success
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="default" className="gap-1">
                <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                Fazendas
              </Badge>
              <Badge variant="warning" className="gap-1">
                <div className="h-2 w-2 rounded-full bg-warning-foreground" />
                Quarentena
              </Badge>
              <Badge variant="success" className="gap-1">
                <div className="h-2 w-2 rounded-full bg-success-foreground" />
                Inspeção
              </Badge>
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showHeatmap}
                onChange={(e) => setShowHeatmap(e.target.checked)}
                className="rounded"
              />
              <span className="text-muted-foreground">Mapa de Calor</span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Map Container */}
      <Card className="overflow-hidden">
        <div className="h-[500px] w-full relative">
          <MapContainer
            center={maranhaoCenterPosition}
            zoom={7}
            className="h-full w-full z-0"
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MapCenterControl center={maranhaoCenterPosition} />

            {/* Property Markers */}
            {properties.map((property) => (
              <Marker
                key={property.id}
                position={property.position}
                eventHandlers={{
                  click: () => setSelectedProperty(property),
                }}
              >
                <Popup>
                  <div className="p-2 min-w-[200px]">
                    <h3 className="font-semibold text-foreground mb-1">{property.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{property.address}</p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          property.type === "farm"
                            ? "default"
                            : property.type === "quarantine"
                            ? "warning"
                            : "success"
                        }
                        className="text-xs"
                      >
                        {property.type === "farm"
                          ? "Fazenda"
                          : property.type === "quarantine"
                          ? "Quarentena"
                          : "Inspeção"}
                      </Badge>
                      <span className="text-sm font-medium">{property.animals} animais</span>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Heatmap Circles */}
            {showHeatmap &&
              movementHeatmap.map((point, index) => (
                <CircleMarker
                  key={`heat-${index}`}
                  center={point.position as LatLngExpression}
                  pathOptions={{
                    fillColor: "#ef4444",
                    fillOpacity: 0.2 * point.intensity,
                    color: "#ef4444",
                    weight: 1,
                    opacity: 0.3 * point.intensity,
                  }}
                  radius={15 * point.intensity}
                />
              ))}
          </MapContainer>
        </div>
      </Card>

      {/* Selected Property Details */}
      {selectedProperty && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">{selectedProperty.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{selectedProperty.address}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant={
                        selectedProperty.type === "farm"
                          ? "default"
                          : selectedProperty.type === "quarantine"
                          ? "warning"
                          : "success"
                      }
                    >
                      {selectedProperty.type === "farm"
                        ? "Fazenda"
                        : selectedProperty.type === "quarantine"
                        ? "Quarentena"
                        : "Inspeção"}
                    </Badge>
                    <span className="text-sm font-medium text-foreground">
                      {selectedProperty.animals} animais cadastrados
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{properties.length}</p>
            <p className="text-xs text-muted-foreground">Propriedades</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">
              {properties.reduce((sum, p) => sum + p.animals, 0)}
            </p>
            <p className="text-xs text-muted-foreground">Total Animais</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">
              {properties.filter((p) => p.type === "quarantine").length}
            </p>
            <p className="text-xs text-muted-foreground">Em Quarentena</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;
