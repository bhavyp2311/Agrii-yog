import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  LogOut,
  Globe
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";

const navigationItems = [
  {
    nameKey: "nav.aiAssistant" as const,
    href: "/ai-assistant",
    icon: Brain,
    descriptionKey: "features.smartFarming" as const
  },
  {
    nameKey: "nav.diseaseDetection" as const,
    href: "/disease-detection", 
    icon: Camera,
    descriptionKey: "features.diseaseDetection" as const
  },
  {
    nameKey: "nav.marketHub" as const,
    href: "/market",
    icon: TrendingUp,
    descriptionKey: "features.marketInsights" as const
  },
  {
    nameKey: "nav.community" as const,
    href: "/community",
    icon: Users,
    descriptionKey: "features.communitySupport" as const
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  
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
                  key={item.nameKey}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-natural ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t(item.nameKey)}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-auto h-8 border-none bg-transparent p-1">
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                {availableLanguages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{lang.nativeName}</span>
                      <span className="text-xs text-muted-foreground">({lang.name})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {user ? (
              <>
                <div className="hidden lg:flex items-center space-x-2 text-sm">
                  <span className="text-muted-foreground">{t('nav.welcome')},</span>
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
                  <span>{t('nav.signOut')}</span>
                </Button>
              </>
            ) : (
              <Button 
                className="btn-hero hidden sm:flex items-center space-x-2"
                asChild
              >
                <Link to="/auth">
                  <User className="w-4 h-4" />
                  <span>{t('nav.login')}</span>
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
                  key={item.nameKey}
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
                    <div className="font-medium">{t(item.nameKey)}</div>
                    <div className="text-xs opacity-70">{t(item.descriptionKey)}</div>
                  </div>
                </Link>
              );
            })}
            
            <div className="pt-2 border-t border-border">
              {user ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm text-muted-foreground">
                    {t('nav.welcome')}, {profile?.username || user.email?.split('@')[0]}
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    {t('nav.signOut')}
                  </Button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center space-x-3 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>{t('nav.login')}</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}