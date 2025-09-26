import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Play, 
  ArrowRight, 
  Smartphone, 
  Brain, 
  Camera,
  TrendingUp,
  Users,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Assistant",
    description: "Get instant answers to farming questions with our intelligent chat system",
    demo: "Try asking about crop diseases, weather patterns, or market prices"
  },
  {
    icon: Camera,
    title: "Disease Detection",
    description: "Snap a photo of your crops to identify diseases and get treatment recommendations",
    demo: "Upload crop images for real-time health analysis"
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Access real-time market prices and profit optimization suggestions",
    demo: "View current prices for 50+ crops across 200+ markets"
  },
  {
    icon: Users,
    title: "Farming Community",
    description: "Connect with expert farmers and agricultural specialists worldwide",
    demo: "Join discussions with 12,000+ active farming community members"
  }
];

const benefits = [
  "25% average increase in crop yields",
  "40% reduction in crop disease incidents", 
  "30% better profit margins through market timing",
  "Access to expert advice 24/7",
  "Real-time weather and soil monitoring",
  "Sustainable farming practice recommendations"
];

export default function Demo() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-3 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-6 py-2 mb-6">
              <Play className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Interactive Demo</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Experience the Future of
              <span className="block bg-gradient-success bg-clip-text text-transparent">
                Smart Agriculture
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how AgriWise transforms traditional farming with AI-powered insights, 
              real-time market data, and a supportive community of agricultural experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero group" asChild>
                <Link to="/ai-assistant">
                  Start Interactive Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile Experience
              </Button>
            </div>
          </div>
        </section>

        {/* Features Demo */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Explore Core Features
              </h2>
              <p className="text-muted-foreground">
                Click on any feature below to try it yourself
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="card-field hover:scale-105 cursor-pointer group">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center group-hover:animate-pulse">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-secondary">
                        <p className="text-sm text-foreground font-medium">Demo Preview:</p>
                        <p className="text-sm text-muted-foreground">{feature.demo}</p>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                        asChild
                      >
                        <Link to={
                          feature.title.includes('Assistant') ? '/ai-assistant' :
                          feature.title.includes('Disease') ? '/disease-detection' :
                          feature.title.includes('Market') ? '/market' :
                          '/community'
                        }>
                          Try {feature.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Proven Results from Real Farmers
              </h2>
              <p className="text-muted-foreground">
                Join thousands of farmers who have already transformed their agricultural practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="card-field inline-block">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Farmers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">25%</div>
                    <div className="text-sm text-muted-foreground">Avg. Yield Increase</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your journey with AgriWise today and join the smart farming revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/ai-assistant">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link to="/community">
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}