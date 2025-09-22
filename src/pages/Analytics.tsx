import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Leaf, 
  DollarSign,
  Calendar,
  Target,
  Award,
  Download,
  Filter
} from "lucide-react";

const farmMetrics = [
  {
    title: "Total Yield",
    value: "1,247 kg",
    change: "+12.5%",
    trend: "up",
    period: "vs last season"
  },
  {
    title: "Revenue",
    value: "₹3,74,100",
    change: "+8.7%", 
    trend: "up",
    period: "vs last season"
  },
  {
    title: "Cost Efficiency",
    value: "67%",
    change: "+5.2%",
    trend: "up", 
    period: "vs last season"
  },
  {
    title: "Profit Margin",
    value: "34%",
    change: "-2.1%",
    trend: "down",
    period: "vs last season"
  }
];

const cropPerformance = [
  {
    crop: "Wheat",
    area: "5.2 acres",
    yield: "847 kg",
    revenue: "₹1,86,340",
    efficiency: "High",
    status: "Harvested"
  },
  {
    crop: "Rice", 
    area: "3.8 acres",
    yield: "234 kg",
    revenue: "₹45,670",
    efficiency: "Medium",
    status: "Growing"
  },
  {
    crop: "Tomato",
    area: "1.2 acres", 
    yield: "166 kg",
    revenue: "₹41,890",
    efficiency: "Very High",
    status: "Mature"
  }
];

const monthlyData = [
  { month: "Jan", yield: 145, revenue: 32000, cost: 18000 },
  { month: "Feb", yield: 167, revenue: 38000, cost: 21000 },
  { month: "Mar", yield: 189, revenue: 42000, cost: 23000 },
  { month: "Apr", yield: 203, revenue: 48000, cost: 26000 },
  { month: "May", yield: 187, revenue: 45000, cost: 25000 },
  { month: "Jun", yield: 234, revenue: 56000, cost: 31000 }
];

const recommendations = [
  {
    type: "Optimization",
    title: "Increase irrigation frequency for rice fields",
    impact: "Potential +15% yield increase",
    priority: "High",
    savings: "₹23,400"
  },
  {
    type: "Cost Reduction", 
    title: "Switch to organic fertilizer for tomatoes",
    impact: "Reduce costs by 12%",
    priority: "Medium", 
    savings: "₹8,900"
  },
  {
    type: "Market Timing",
    title: "Delay wheat sale by 2 weeks",
    impact: "Better market prices expected",
    priority: "High",
    savings: "₹15,600"
  }
];

export default function Analytics() {
  const getEfficiencyColor = (efficiency: string) => {
    switch (efficiency) {
      case 'Very High': return 'bg-green-100 text-green-800 border-green-200';
      case 'High': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-sky rounded-full px-6 py-3 mb-4">
            <BarChart3 className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Farm Analytics</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Data-Driven Farming Insights
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your farm's performance, analyze trends, and get actionable recommendations to maximize your profits.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter Period
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Last 6 Months
            </Button>
          </div>
          <Button className="btn-hero">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {farmMetrics.map((metric, index) => (
            <Card key={index} className="card-field">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <div className={`flex items-center space-x-1 mt-1 ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span className="text-xs font-medium">{metric.change}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.period}</p>
                </div>
                <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                  {index === 0 && <Leaf className="w-4 h-4 text-white" />}
                  {index === 1 && <DollarSign className="w-4 h-4 text-white" />}
                  {index === 2 && <Target className="w-4 h-4 text-white" />}
                  {index === 3 && <Award className="w-4 h-4 text-white" />}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-field">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Monthly Performance</h3>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-1"></div>
                    Yield (kg)
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <div className="w-2 h-2 bg-accent rounded-full mr-1"></div>
                    Revenue (₹)
                  </Badge>
                </div>
              </div>

              {/* Simple Chart Representation */}
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium text-foreground">{data.month}</div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Yield: {data.yield}kg</span>
                        <span className="text-muted-foreground">Revenue: ₹{data.revenue.toLocaleString()}</span>
                      </div>
                      <div className="flex space-x-1 h-6">
                        <div 
                          className="bg-secondary rounded"
                          style={{ width: `${(data.yield / 250) * 100}%` }}
                        ></div>
                        <div 
                          className="bg-accent rounded"
                          style={{ width: `${(data.revenue / 60000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Crop Performance */}
            <Card className="card-field">
              <h3 className="text-lg font-semibold text-foreground mb-4">Crop Performance</h3>
              <div className="space-y-4">
                {cropPerformance.map((crop, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{crop.crop}</h4>
                        <p className="text-sm text-muted-foreground">{crop.area}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="outline" className={getEfficiencyColor(crop.efficiency)}>
                          {crop.efficiency}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {crop.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Current Yield</p>
                        <p className="font-medium text-foreground">{crop.yield}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Revenue</p>
                        <p className="font-medium text-foreground">{crop.revenue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recommendations Sidebar */}
          <div className="space-y-6">
            <Card className="card-field">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Target className="w-5 h-5 text-secondary mr-2" />
                Smart Recommendations
              </h3>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-medium text-accent">{rec.type}</span>
                          <Badge variant="outline" className={`text-xs ${getPriorityColor(rec.priority)}`}>
                            {rec.priority}
                          </Badge>
                        </div>
                        <h4 className="text-sm font-medium text-foreground mb-1">{rec.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{rec.impact}</p>
                        <div className="text-xs font-medium text-secondary">
                          Potential Savings: {rec.savings}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Implement
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Weather Impact */}
            <Card className="card-field">
              <h3 className="text-lg font-semibold text-foreground mb-4">Weather Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Rainfall Impact</span>
                  <span className="font-medium text-green-600">+8% yield</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Temperature Stress</span>
                  <span className="font-medium text-yellow-600">Moderate</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Humidity Level</span>
                  <span className="font-medium text-blue-600">Optimal</span>
                </div>
              </div>
            </Card>

            {/* Market Opportunities */}
            <Card className="card-field">
              <h3 className="text-lg font-semibold text-foreground mb-4">Market Opportunities</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-medium text-green-800">Tomato prices up 15%</p>
                  <p className="text-green-600">Consider early harvest</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="font-medium text-blue-800">Export demand for wheat</p>
                  <p className="text-blue-600">Premium rates available</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}