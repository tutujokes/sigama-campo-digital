import { Activity, BarChart3, AlertTriangle, Settings } from "lucide-react";
import { LuFileText } from "react-icons/lu";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Monitor", href: "/monitoring", icon: Activity },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Alertas", href: "/anomalies", icon: AlertTriangle },
  { name: "Vaqueiro", href: "/vaqueiro", icon: LuFileText },
  { name: "Config", href: "/settings", icon: Settings },
];

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around px-2 py-3">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className={cn(
              "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all",
              "text-muted-foreground"
            )}
            activeClassName="text-primary"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
