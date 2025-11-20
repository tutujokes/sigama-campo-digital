import { Beef, TrendingUp, MapPin, AlertTriangle } from "lucide-react";
import Header from "@/components/Layout/Header";
import BottomNav from "@/components/Layout/BottomNav";
import StatsCard from "@/components/Dashboard/StatsCard";
import QuickActions from "@/components/Dashboard/QuickActions";
import RecentActivity from "@/components/Dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Bem-vindo!</h2>
          <p className="text-muted-foreground">Gerencie seu rebanho com eficiência</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            title="Total de Animais"
            value="1,247"
            icon={Beef}
            variant="primary"
            trend={{ value: "+12% este mês", positive: true }}
          />
          <StatsCard
            title="Movimentações"
            value="86"
            icon={TrendingUp}
            variant="secondary"
            trend={{ value: "+8% esta semana", positive: true }}
          />
          <StatsCard
            title="Propriedades"
            value="15"
            icon={MapPin}
            variant="success"
          />
          <StatsCard
            title="Alertas"
            value="3"
            icon={AlertTriangle}
            variant="warning"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Activity */}
        <RecentActivity />
      </main>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
