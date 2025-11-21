import { BarChart3, Activity, AlertTriangle, Settings } from "lucide-react";
import { LuFileText } from "react-icons/lu";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: "Monitoramento", href: "/monitoring", icon: Activity },
  { name: "Dashboard Analítico", href: "/analytics", icon: BarChart3 },
  { name: "Anomalias", href: "/anomalies", icon: AlertTriangle },
  { name: "Vaqueiro Digital", href: "/vaqueiro", icon: LuFileText },
  { name: "Configurações", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <img src="/logos/sigama_small_logo.png" alt="SIGAMA" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">SIGAMA Vision</h1>
                <p className="text-xs text-muted-foreground">Sistema de Monitoramento</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/"}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              activeClassName="bg-primary/10 text-primary font-medium"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">GC</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Gestor Coordenador</p>
              <p className="text-xs text-muted-foreground truncate">gestor@aged.ma.gov.br</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
