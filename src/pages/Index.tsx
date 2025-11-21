import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Beef, 
  MapPin, 
  Shield, 
  Bell, 
  TrendingUp, 
  Database,
  Wifi,
  Camera,
  ChevronRight
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Beef,
      title: "Gestão de Animais",
      description: "Cadastro completo com rastreamento de movimentações e histórico detalhado",
      color: "text-primary"
    },
    {
      icon: Camera,
      title: "Leitura de Tags",
      description: "Scanner integrado para códigos e brincos eletrônicos via câmera",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Geolocalização",
      description: "Rastreamento GPS automático de todas as atividades no campo",
      color: "text-accent"
    },
    {
      icon: Wifi,
      title: "Offline-First",
      description: "Trabalhe sem internet com sincronização automática quando conectar",
      color: "text-info"
    },
    {
      icon: Shield,
      title: "Alertas Sanitários",
      description: "Notificações de vacinação e eventos de saúde animal",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      title: "Analytics Avançado",
      description: "Dashboards com detecção de padrões suspeitos e anomalias",
      color: "text-success"
    },
    {
      icon: Bell,
      title: "Notificações Push",
      description: "Comunicados da AGED e alertas importantes em tempo real",
      color: "text-destructive"
    },
    {
      icon: Database,
      title: "Integração SIGAMA",
      description: "Sincronização direta com o sistema estadual de gestão",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 md:pt-20 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--primary)/0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--secondary)/0.1),_transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover-scale">
              <img 
                src="/logos/sigama_big_logo.png" 
                alt="SIGAMA Logo" 
                className="h-24 md:h-32 w-auto"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Sistema de Gestão
            <br />
            <span className="text-primary">Agropecuária do Maranhão</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Plataforma mobile para fiscais e produtores rurais gerenciarem rebanhos 
            com tecnologia offline-first e integração completa ao SIGAMA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover-scale"
              onClick={() => navigate("/monitoring")}
            >
              Acessar Dashboard
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 hover:bg-muted transition-all"
              onClick={() => navigate("/analytics")}
            >
              Ver Analytics
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-card rounded-lg border border-border hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">247</div>
              <div className="text-sm text-muted-foreground">Animais</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">7</div>
              <div className="text-sm text-muted-foreground">Propriedades</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Sincronizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Funcionalidades Completas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para gestão agropecuária moderna e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover-scale hover:border-primary/50 cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 hover-scale">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Acesse o dashboard e comece a gerenciar seu rebanho com a tecnologia mais avançada
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover-scale"
              onClick={() => navigate("/monitoring")}
            >
              Acessar Plataforma
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 SIGAMA - Sistema de Gestão Agropecuária do Maranhão</p>
          <p className="mt-2">Governo do Estado do Maranhão - AGED</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
