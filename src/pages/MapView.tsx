import { MapPin, Navigation } from "lucide-react";
import Header from "@/components/Layout/Header";
import BottomNav from "@/components/Layout/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MapView = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Mapa de Movimentação</h2>
          <p className="text-muted-foreground">Visualize a localização em tempo real</p>
        </div>

        {/* Map Placeholder - In a real app, integrate with react-leaflet or similar */}
        <Card className="overflow-hidden">
          <div className="relative h-[400px] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center">
            <div className="text-center space-y-3">
              <MapPin className="h-16 w-16 mx-auto text-primary/40" />
              <div>
                <p className="text-lg font-semibold text-foreground">Mapa Interativo</p>
                <p className="text-sm text-muted-foreground">Integração com mapas será implementada</p>
              </div>
              <Button variant="default" className="gap-2">
                <Navigation className="h-4 w-4" />
                Ativar Localização
              </Button>
            </div>
            
            {/* Sample location markers */}
            <div className="absolute top-20 left-16">
              <div className="relative">
                <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <Badge className="absolute -top-2 -right-2 text-xs">12</Badge>
              </div>
            </div>

            <div className="absolute bottom-24 right-20">
              <div className="relative">
                <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: "0.3s" }}>
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-secondary text-xs">8</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Location Summary */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">15</p>
              <p className="text-xs text-muted-foreground">Propriedades Ativas</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="inline-flex p-3 bg-secondary/10 rounded-lg mb-2">
                <Navigation className="h-6 w-6 text-secondary" />
              </div>
              <p className="text-2xl font-bold text-foreground">8</p>
              <p className="text-xs text-muted-foreground">Rotas Hoje</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Locations */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-foreground mb-3">Localizações Recentes</h3>
            {[
              { name: "Fazenda São José", animals: 234, coords: "-2.5394, -44.2825" },
              { name: "Fazenda Esperança", animals: 189, coords: "-5.5292, -47.4628" },
              { name: "Fazenda Santa Clara", animals: 156, coords: "-3.7419, -38.5267" },
            ].map((location, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{location.name}</p>
                    <p className="text-xs text-muted-foreground">{location.coords}</p>
                  </div>
                </div>
                <Badge variant="secondary">{location.animals}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
};

export default MapView;
