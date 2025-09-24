import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Leaf, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import heroImage from "@/assets/hero-agriculture.jpg";

const features = [
  {
    icon: Leaf,
    titleKey: "features.smartFarming" as const,
    descriptionKey: "features.smartFarmingDesc" as const
  },
  {
    icon: Shield,
    titleKey: "features.diseaseDetection" as const,
    descriptionKey: "features.diseaseDetectionDesc" as const
  },
  {
    icon: TrendingUp,
    titleKey: "features.marketInsights" as const,
    descriptionKey: "features.marketInsightsDesc" as const
  }
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Modern farmer using technology in agricultural field"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2">
              <Leaf className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Smart Agriculture Revolution</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero group" asChild>
                <Link to="/ai-assistant">
                  {t('hero.startGrowing')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/demo">
                  <Play className="w-5 h-5 mr-2" />
                  {t('hero.watchDemo')}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">{t('hero.activeFarmers')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">25%</div>
                <div className="text-sm text-muted-foreground">{t('hero.yieldIncrease')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">{t('hero.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:block hidden space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.titleKey}
                  className={`card-field animate-grow hover:scale-105 ${
                    index === 1 ? 'ml-8' : index === 2 ? 'ml-4' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(feature.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Feature Cards */}
        <div className="lg:hidden mt-12 grid gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.titleKey} className="card-field">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t(feature.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(feature.descriptionKey)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}