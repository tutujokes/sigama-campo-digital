import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Beef, 
  MapPin, 
  Bell, 
  Camera,
  TrendingUp,
  AlertCircle,
  Calendar,
  FileText,
  Plus,
  ArrowUpRight,
  Activity
} from "lucide-react";

const RuralProducer = () => {
  const properties = [
    { id: 1, name: "Fazenda Santa Clara", animals: 142, location: "Bacabal, MA" },
    { id: 2, name: "Sítio Boa Vista", animals: 78, location: "Chapadinha, MA" },
    { id: 3, name: "Rancho Verde", animals: 27, location: "Caxias, MA" },
  ];

  const alerts = [
    { 
      id: 1, 
      type: "warning", 
      title: "Vacinação Pendente", 
      description: "15 animais precisam de vacina antiaftosa",
      property: "Fazenda Santa Clara",
      date: "Hoje"
    },
    { 
      id: 2, 
      type: "info", 
      title: "Movimentação Aprovada", 
      description: "GTA #12345 aprovada para 8 bovinos",
      property: "Sítio Boa Vista",
      date: "Ontem"
    },
    { 
      id: 3, 
      type: "success", 
      title: "Cadastro Concluído", 
      description: "12 novos animais registrados no sistema",
      property: "Rancho Verde",
      date: "2 dias atrás"
    },
  ];

  const recentMovements = [
    {
      id: 1,
      type: "Saída",
      animals: 8,
      from: "Fazenda Santa Clara",
      to: "Frigorífico Regional",
      date: "18/11/2024",
      status: "Aprovado"
    },
    {
      id: 2,
      type: "Entrada",
      animals: 12,
      from: "Leilão Pecuária",
      to: "Rancho Verde",
      date: "15/11/2024",
      status: "Aprovado"
    },
    {
      id: 3,
      type: "Transferência",
      animals: 5,
      from: "Sítio Boa Vista",
      to: "Fazenda Santa Clara",
      date: "10/11/2024",
      status: "Aprovado"
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Dashboard do Produtor
          </h1>
          <p className="text-muted-foreground">
            Gerencie seu rebanho e acompanhe todas as atividades
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Camera className="h-4 w-4" />
            Scanner
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Animal
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 hover:shadow-lg transition-all hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total de Animais</p>
              <p className="text-3xl font-bold text-foreground">247</p>
              <p className="text-xs text-success mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12 este mês
              </p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <Beef className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Propriedades</p>
              <p className="text-3xl font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground mt-1">Todas ativas</p>
            </div>
            <div className="p-3 bg-secondary/10 rounded-lg">
              <MapPin className="h-6 w-6 text-secondary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Alertas Ativos</p>
              <p className="text-3xl font-bold text-foreground">15</p>
              <p className="text-xs text-warning mt-1 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                Requer atenção
              </p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg">
              <Bell className="h-6 w-6 text-warning" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all hover-scale">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Saúde do Rebanho</p>
              <p className="text-3xl font-bold text-foreground">98%</p>
              <p className="text-xs text-success mt-1 flex items-center gap-1">
                <Activity className="h-3 w-3" />
                Excelente
              </p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg">
              <Activity className="h-6 w-6 text-success" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Properties List */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Minhas Propriedades</h2>
            <Button variant="ghost" size="sm" className="gap-2">
              Ver todas
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{property.name}</h3>
                    <p className="text-sm text-muted-foreground">{property.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">{property.animals}</p>
                  <p className="text-xs text-muted-foreground">animais</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Ações Rápidas</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plus className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium">Cadastrar Animal</p>
                <p className="text-xs text-muted-foreground">Novo registro no rebanho</p>
              </div>
            </Button>

            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <ArrowUpRight className="h-4 w-4 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-medium">Nova Movimentação</p>
                <p className="text-xs text-muted-foreground">Registrar saída/entrada</p>
              </div>
            </Button>

            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Calendar className="h-4 w-4 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-medium">Agendar Vacinação</p>
                <p className="text-xs text-muted-foreground">Programar evento sanitário</p>
              </div>
            </Button>

            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
              <div className="p-2 bg-info/10 rounded-lg">
                <FileText className="h-4 w-4 text-info" />
              </div>
              <div className="text-left">
                <p className="font-medium">Gerar Relatório</p>
                <p className="text-xs text-muted-foreground">Exportar dados em PDF</p>
              </div>
            </Button>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Alertas e Notificações</h2>
            <Badge variant="secondary">{alerts.length}</Badge>
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    alert.type === 'warning' ? 'bg-warning/10' :
                    alert.type === 'info' ? 'bg-info/10' : 'bg-success/10'
                  }`}>
                    {alert.type === 'warning' && <AlertCircle className="h-4 w-4 text-warning" />}
                    {alert.type === 'info' && <Bell className="h-4 w-4 text-info" />}
                    {alert.type === 'success' && <Activity className="h-4 w-4 text-success" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground">{alert.title}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{alert.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Movements */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Movimentações Recentes</h2>
            <Button variant="ghost" size="sm" className="gap-2">
              Ver todas
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentMovements.map((movement) => (
              <div
                key={movement.id}
                className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={
                    movement.type === 'Saída' ? 'destructive' :
                    movement.type === 'Entrada' ? 'default' : 'secondary'
                  }>
                    {movement.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{movement.date}</span>
                </div>
                <p className="font-semibold text-foreground mb-1">
                  {movement.animals} animais
                </p>
                <p className="text-sm text-muted-foreground">
                  De: {movement.from}
                </p>
                <p className="text-sm text-muted-foreground">
                  Para: {movement.to}
                </p>
                <Badge variant="success" className="mt-2">
                  {movement.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RuralProducer;
