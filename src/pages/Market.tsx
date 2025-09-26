import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  MapPin,
  Calendar,
  Truck,
  Users
} from "lucide-react";

const marketData = [
  {
    crop: "Rice (Basmati)",
    currentPrice: 2840,
    change: +125,
    changePercent: 4.6,
    unit: "per quintal",
    demand: "High",
    lastWeek: 2715
  },
  {
    crop: "Wheat",
    currentPrice: 2156,
    change: -45,
    changePercent: -2.0,
    unit: "per quintal",
    demand: "Medium",
    lastWeek: 2201
  },
  {
    crop: "Tomato",
    currentPrice: 3200,
    change: +480,
    changePercent: 17.6,
    unit: "per quintal", 
    demand: "Very High",
    lastWeek: 2720
  },
  {
    crop: "Onion",
    currentPrice: 1850,
    change: +150,
    changePercent: 8.8,
    unit: "per quintal",
    demand: "High",
    lastWeek: 1700
  },
  {
    crop: "Potato",
    currentPrice: 1200,
    change: -80,
    changePercent: -6.3,
    unit: "per quintal",
    demand: "Medium",
    lastWeek: 1280
  },
  {
    crop: "Sugarcane",
    currentPrice: 340,
    change: +15,
    changePercent: 4.6,
    unit: "per quintal",
    demand: "Stable",
    lastWeek: 325
  }
];

const nearbyMarkets = [
  {
    name: "Delhi Azadpur Mandi",
    distance: "45 km",
    transportCost: 150,
    avgPrice: 2950,
    buyers: 23
  },
  {
    name: "Ghaziabad Wholesale Market", 
    distance: "28 km",
    transportCost: 80,
    avgPrice: 2890,
    buyers: 15
  },
  {
    name: "Faridabad Agricultural Market",
    distance: "52 km", 
    transportCost: 180,
    avgPrice: 3100,
    buyers: 18
  }
];

export default function Market() {
  const { t } = useLanguage();
  
  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High': return 'bg-green-100 text-green-800 border-green-200';
      case 'High': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Stable': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-success rounded-full px-6 py-3 mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Market Intelligence Hub</span>
          </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {t('market.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('market.subtitle')}
            </p>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="card-field">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Market Price</p>
                <p className="text-lg font-semibold text-foreground">₹2,374</p>
              </div>
            </div>
          </Card>

          <Card className="card-field">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-sky rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Weekly Trend</p>
                <p className="text-lg font-semibold text-green-600">+5.2%</p>
              </div>
            </div>
          </Card>
          <Card className="card-field">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-earth rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Markets</p>
                <p className="text-lg font-semibold text-foreground">127</p>
              </div>
            </div>
          </Card>

          <Card className="card-field">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="text-lg font-semibold text-foreground">Today, 2:30 PM</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Prices */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">{t('market.currentPrices')}</h2>
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                {t('common.viewCharts')}
              </Button>
            </div>

            <div className="grid gap-4">
              {marketData.map((item, index) => (
                <Card key={index} className="card-field">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-foreground">{item.crop}</h3>
                        <Badge variant="outline" className={getDemandColor(item.demand)}>
                          {item.demand}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Current rate {item.unit}</p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">
                          ₹{item.currentPrice.toLocaleString()}
                        </span>
                        <div className={`flex items-center space-x-1 ${
                          item.change > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.change > 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <span className="text-sm font-medium">
                            {item.change > 0 ? '+' : ''}{item.change} ({item.changePercent > 0 ? '+' : ''}{item.changePercent}%)
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Last week: ₹{item.lastWeek.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Nearby Markets */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">{t('market.nearbyMarkets')}</h2>

            <div className="space-y-4">
              {nearbyMarkets.map((market, index) => (
                <Card key={index} className="card-field">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{market.name}</h4>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{market.distance}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Active
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Transport Cost</p>
                        <p className="font-medium text-foreground">₹{market.transportCost}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg. Price</p>
                        <p className="font-medium text-foreground">₹{market.avgPrice}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{market.buyers} active buyers</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Truck className="w-3 h-3 mr-1" />
                        {t('common.contact')}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Market Alerts */}
            <Card className="card-field">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t('market.priceAlerts')}</h4>
                    <p className="text-xs text-muted-foreground">Get notified of price changes</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Tomato ≥ ₹3,500</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Rice ≤ ₹2,600</span>
                    <span className="text-yellow-600 font-medium">Watching</span>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  {t('common.manageAlerts')}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}