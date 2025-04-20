
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  PieChart, 
  LineChart, 
  Wallet, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  onLogout: () => void;
};

type NavItem = {
  label: string;
  icon: React.ElementType;
  href: string;
};

export function DashboardSidebar({ onLogout }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      label: "Investments",
      icon: PieChart,
      href: "/dashboard/investments",
    },
    {
      label: "Performance",
      icon: LineChart,
      href: "/dashboard/performance",
    },
    {
      label: "Wallet",
      icon: Wallet,
      href: "/dashboard/wallet",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];
  
  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg bg-secondary/80 text-foreground hover:bg-secondary"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col bg-secondary/30 backdrop-blur-xl border-r border-border/40 transition-all duration-300 ease-in-out",
          collapsed ? "w-20" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="font-bold text-white">SI</span>
            </div>
            {!collapsed && <span className="text-xl font-bold">SmartInvest</span>}
          </Link>
          
          <div className="flex space-x-2">
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex h-8 w-8 items-center justify-center rounded-md hover:bg-secondary/80"
            >
              <ChevronRight className={cn("h-4 w-4 transition-transform", collapsed ? "" : "rotate-180")} />
            </button>
            
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden h-8 w-8 flex items-center justify-center rounded-md hover:bg-secondary/80"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 px-3 py-4 overflow-y-auto">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-3 rounded-md transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-secondary/80",
                  collapsed ? "justify-center" : "justify-start"
                )}
              >
                <item.icon className={cn("flex-shrink-0", collapsed ? "h-6 w-6" : "h-5 w-5 mr-3")} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="p-3 border-t border-border/40">
          <button
            onClick={onLogout}
            className={cn(
              "flex items-center w-full px-3 py-3 rounded-md text-foreground hover:bg-secondary/80 transition-colors",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <LogOut className={cn("flex-shrink-0", collapsed ? "h-6 w-6" : "h-5 w-5 mr-3")} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
