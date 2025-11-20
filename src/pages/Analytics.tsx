import { TrendingUp, AlertCircle, MapPin, Activity } from "lucide-react";
import Header from "@/components/Layout/Header";
import BottomNav from "@/components/Layout/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
          <p className="text-muted-foreground">Visualize padrões e tendências</p>
        </div>

        {/* Trend Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <Badge variant="default">+18%</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">847</p>
              <p className="text-xs text-muted-foreground">Cadastros este mês</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Activity className="h-5 w-5 text-secondary" />
                <Badge className="bg-secondary text-secondary-foreground">+12%</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">432</p>
              <p className="text-xs text-muted-foreground">Movimentações ativas</p>
            </CardContent>
          </Card>
        </div>

        {/* Region Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Análise por Região
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { region: "São Luís", count: 342, percentage: 85, trend: "+5%" },
              { region: "Imperatriz", count: 289, percentage: 72, trend: "+12%" },
              { region: "Caxias", count: 178, percentage: 45, trend: "+3%" },
              { region: "Timon", count: 134, percentage: 34, trend: "-2%" },
            ].map((item) => (
              <div key={item.region} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{item.region}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">{item.count} animais</span>
                    <Badge variant={item.trend.startsWith("+") ? "default" : "secondary"} className="text-xs">
                      {item.trend}
                    </Badge>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Alerts Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Alertas e Padrões
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Cadastros Massivos Detectados</p>
                <p className="text-xs text-muted-foreground mt-1">
                  45 animais cadastrados em 2 horas - Fazenda Nova Esperança
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-3 bg-info/10 border border-info/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-info shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Movimentação Atípica</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Rota não usual identificada: São Luís → Bacabal (3x acima do normal)
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-3 bg-success/10 border border-success/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Conformidade Alta</p>
                <p className="text-xs text-muted-foreground mt-1">
                  98% das propriedades atualizaram registros nas últimas 48h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
};

export default Analytics;
