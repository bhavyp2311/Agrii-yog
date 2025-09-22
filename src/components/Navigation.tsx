import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Camera, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Menu, 
  X,
  Leaf,
  MessageSquare,
  User,
  LogOut
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const navigationItems = [
  {
    name: "AI Assistant",
    href: "/ai-assistant",
    icon: Brain,
    description: "Smart farming guidance"
  },
  {
    name: "Disease Detection",
    href: "/disease-detection", 
    icon: Camera,
    description: "Crop health analysis"
  },
  {
    name: "Market Hub",
    href: "/market",
    icon: TrendingUp,
    description: "Prices & trading"
  },
  {
    name: "Community",
    href: "/community",
    icon: Users,
    description: "Connect with farmers"
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    description: "Farm insights"
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-success rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-natural">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">AgriWise</h1>
              <p className="text-xs text-muted-foreground">Smart Farming Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-natural ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <div className="hidden lg:flex items-center space-x-2 text-sm">
                  <span className="text-muted-foreground">Welcome,</span>
                  <span className="font-medium text-foreground">
                    {profile?.username || user.email?.split('@')[0]}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSignOut}
                  className="hidden sm:flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Button>
              </>
            ) : (
              <Button 
                className="btn-hero hidden sm:flex items-center space-x-2"
                asChild
              >
                <Link to="/auth">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-natural ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs opacity-70">{item.description}</div>
                  </div>
                </Link>
              );
            })}
            
            <div className="pt-2 border-t border-border">
              {user ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm text-muted-foreground">
                    Welcome, {profile?.username || user.email?.split('@')[0]}
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center space-x-3 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}