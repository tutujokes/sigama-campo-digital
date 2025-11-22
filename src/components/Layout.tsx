import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const hideShell = pathname === "/landing" || pathname.startsWith("/register");

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      {!hideShell && (
        <div className="hidden md:block">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <main
        className={cn(
          "min-h-screen pb-20 md:pb-0",
          // when sidebar is visible offset the main by the sidebar width so
          // the inner container (below) can center itself with `mx-auto`.
          !hideShell ? "md:ml-64" : "",
          "transition-all duration-300"
        )}
      >
    {/* Keep inner content left-aligned within the remaining space so
      tabs/cards start at the left edge (not centered). */}
    <div className="w-full p-4 md:p-6 lg:p-8">{children}</div>
      </main>

      {/* Mobile Bottom Navigation */}
      {!hideShell && (
        <div className="md:hidden">
          <MobileNav />
        </div>
      )}
    </div>
  );
};

export default Layout;