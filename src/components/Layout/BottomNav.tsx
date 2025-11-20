import { Home, ClipboardList, BarChart3, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Início" },
  { to: "/animals", icon: ClipboardList, label: "Animais" },
  { to: "/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/map", icon: MapPin, label: "Mapa" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-colors min-w-[70px]"
              activeClassName="bg-primary/10 text-primary"
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground")} />
                  <span className={cn("text-xs font-medium", isActive ? "text-primary" : "text-muted-foreground")}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
