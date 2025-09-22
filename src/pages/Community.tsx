import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Search, 
  Plus, 
  Heart,
  MessageSquare,
  Share2,
  Award,
  Leaf,
  TrendingUp,
  HelpCircle
} from "lucide-react";

const discussions = [
  {
    id: 1,
    title: "Best fertilizer combination for wheat in winter season?",
    author: "Rajesh Kumar",
    avatar: "/placeholder.svg",
    expertise: "Wheat Specialist",
    timeAgo: "2 hours ago",
    category: "Crop Management",
    replies: 12,
    likes: 25,
    tags: ["wheat", "fertilizer", "winter"],
    excerpt: "I've been experimenting with different NPK combinations and want to share my findings..."
  },
  {
    id: 2,
    title: "Organic pest control methods that actually work",
    author: "Priya Sharma",
    avatar: "/placeholder.svg", 
    expertise: "Organic Farming Expert",
    timeAgo: "5 hours ago",
    category: "Pest Management",
    replies: 18,
    likes: 42,
    tags: ["organic", "pest-control", "sustainable"],
    excerpt: "After 10 years of organic farming, here are the most effective natural pest control methods..."
  },
  {
    id: 3,
    title: "Water conservation techniques for drought-prone areas",
    author: "Mohammed Ali",
    avatar: "/placeholder.svg",
    expertise: "Water Management",
    timeAgo: "1 day ago", 
    category: "Irrigation",
    replies: 8,
    likes: 31,
    tags: ["water-conservation", "drought", "irrigation"],
    excerpt: "Sharing some innovative drip irrigation setups that have reduced my water usage by 40%..."
  }
];

const expertAnswers = [
  {
    id: 1,
    question: "When to apply second dose of urea for rice?",
    expert: "Dr. Anjali Patel",
    title: "Agricultural Extension Officer",
    answer: "Apply the second dose of urea 3-4 weeks after transplanting, during the tillering stage...",
    timeAgo: "3 hours ago",
    upvotes: 156
  },
  {
    id: 2,
    question: "Dealing with yellow leaf curl virus in tomatoes",
    expert: "Prof. Suresh Reddy", 
    title: "Plant Pathologist",
    answer: "Yellow leaf curl virus is primarily transmitted by whiteflies. Focus on vector control...",
    timeAgo: "6 hours ago",
    upvotes: 89
  }
];

const topContributors = [
  { name: "Rajesh Kumar", contributions: 245, expertise: "Wheat & Rice", badge: "Gold" },
  { name: "Dr. Anjali Patel", contributions: 189, expertise: "Crop Protection", badge: "Gold" },
  { name: "Priya Sharma", contributions: 167, expertise: "Organic Farming", badge: "Silver" },
  { name: "Mohammed Ali", contributions: 134, expertise: "Water Management", badge: "Silver" }
];

export default function Community() {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Gold': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Silver': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Bronze': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-earth rounded-full px-6 py-3 mb-4">
            <Users className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Farming Community</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Connect, Learn, and Grow Together
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of farmers sharing knowledge, experiences, and solutions for modern agriculture.
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search discussions, topics, or experts..."
                className="input-soil pl-10"
              />
            </div>
          </div>
          <Button className="btn-hero">
            <Plus className="w-4 h-4 mr-2" />
            Start Discussion
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Navigation Tabs */}
            <div className="flex space-x-1 bg-muted rounded-lg p-1">
              <button className="flex-1 bg-background text-foreground font-medium py-2 px-4 rounded-md text-sm">
                Recent Discussions
              </button>
              <button className="flex-1 text-muted-foreground font-medium py-2 px-4 rounded-md text-sm hover:bg-background/50">
                Expert Answers
              </button>
              <button className="flex-1 text-muted-foreground font-medium py-2 px-4 rounded-md text-sm hover:bg-background/50">
                My Posts
              </button>
            </div>

            {/* Discussions */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="card-field hover:scale-[1.01] cursor-pointer">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={discussion.avatar} />
                        <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-foreground">{discussion.author}</h4>
                          <Badge variant="outline" className="text-xs bg-secondary/20 text-secondary">
                            {discussion.expertise}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{discussion.timeAgo}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {discussion.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-natural">
                        {discussion.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {discussion.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {discussion.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-accent/10 text-accent">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-natural">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{discussion.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-natural">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm">{discussion.replies}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-natural">
                          <Share2 className="w-4 h-4" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                      <Button size="sm" variant="outline">
                        Join Discussion
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Expert Answers Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-semibold text-foreground">Recent Expert Answers</h3>
              </div>
              
              {expertAnswers.map((answer) => (
                <Card key={answer.id} className="card-field">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">{answer.question}</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                          {answer.expert.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-foreground">{answer.expert}</span>
                          <Badge variant="outline" className="text-xs bg-secondary/20 text-secondary">
                            {answer.title}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{answer.answer}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{answer.timeAgo}</span>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3 text-green-600" />
                            <span className="text-green-600">{answer.upvotes} upvotes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="card-field">
              <h4 className="font-semibold text-foreground mb-4">Community Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-medium text-foreground">12,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Discussions Today</span>
                  <span className="font-medium text-foreground">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Expert Answers</span>
                  <span className="font-medium text-foreground">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Success Stories</span>
                  <span className="font-medium text-foreground">23</span>
                </div>
              </div>
            </Card>

            {/* Top Contributors */}
            <Card className="card-field">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Award className="w-4 h-4 text-secondary mr-2" />
                Top Contributors
              </h4>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">{contributor.expertise}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={`text-xs ${getBadgeColor(contributor.badge)}`}>
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Popular Topics */}
            <Card className="card-field">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Leaf className="w-4 h-4 text-secondary mr-2" />
                Trending Topics
              </h4>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs bg-accent/10 text-accent mr-1 mb-1">#organic-farming</Badge>
                <Badge variant="outline" className="text-xs bg-accent/10 text-accent mr-1 mb-1">#pest-control</Badge>
                <Badge variant="outline" className="text-xs bg-accent/10 text-accent mr-1 mb-1">#irrigation</Badge>
                <Badge variant="outline" className="text-xs bg-accent/10 text-accent mr-1 mb-1">#crop-diseases</Badge>
                <Badge variant="outline" className="text-xs bg-accent/10 text-accent mr-1 mb-1">#market-prices</Badge>
                <Badge variant="outline" className="text-xs bg-accent/10 text-accent mr-1 mb-1">#soil-health</Badge>
              </div>
            </Card>

            {/* Join Groups */}
            <Card className="card-field">
              <h4 className="font-semibold text-foreground mb-4">Regional Groups</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Punjab Farmers</span>
                  <Button size="sm" variant="outline" className="text-xs">Join</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Organic Growers</span>
                  <Button size="sm" variant="outline" className="text-xs">Join</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Dairy Farmers</span>
                  <Button size="sm" variant="outline" className="text-xs">Join</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}