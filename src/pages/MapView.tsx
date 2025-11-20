import Header from "@/components/Layout/Header";
import BottomNav from "@/components/Layout/BottomNav";
import InteractiveMap from "@/components/Map/InteractiveMap";

const MapView = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Mapa de Movimentação</h2>
          <p className="text-muted-foreground">Visualize propriedades e movimentações em tempo real</p>
        </div>

        {/* Interactive Map */}
        <InteractiveMap />
      </main>

      <BottomNav />
    </div>
  );
};

export default MapView;
