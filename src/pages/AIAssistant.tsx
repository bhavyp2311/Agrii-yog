import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Send, 
  Mic, 
  MicOff, 
  Leaf, 
  Cloud, 
  Droplets,
  Sun,
  MessageCircle,
  Lightbulb,
  TrendingUp
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'suggestion';
}

const quickSuggestions = [
  {
    icon: Cloud,
    text: "When should I plant tomatoes?",
    category: "Planting"
  },
  {
    icon: Droplets,
    text: "How much water do my crops need?",
    category: "Irrigation"
  },
  {
    icon: Sun,
    text: "Best fertilizer for wheat season?",
    category: "Fertilization"
  },
  {
    icon: TrendingUp,
    text: "Current market prices for rice",
    category: "Market"
  }
];

export default function AIAssistant() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: t('ai.greeting'),
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(message),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('tomato') || message.includes('plant')) {
      return "For tomatoes, the ideal planting time depends on your region. In most areas, plant after the last frost when soil temperature is consistently above 60°F (15°C). I recommend starting seeds indoors 6-8 weeks before your last expected frost date. Would you like specific advice for your location?";
    }
    
    if (message.includes('water') || message.includes('irrigation')) {
      return "Water requirements vary by crop and growth stage. Generally, most vegetables need 1-1.5 inches of water per week. I suggest checking soil moisture 2-3 inches deep - if it's dry, it's time to water. Early morning is the best time to irrigate. What crops are you growing?";
    }
    
    if (message.includes('fertilizer') || message.includes('wheat')) {
      return "For wheat, I recommend a balanced NPK fertilizer (like 10-10-10) at planting, followed by nitrogen-rich fertilizer during the tillering stage. Soil testing is crucial - would you like me to help you interpret your soil test results?";
    }
    
    if (message.includes('price') || message.includes('market')) {
      return "Current market prices show rice at $12.50/cwt (up 3% this week). Demand is strong due to export orders. I recommend holding if you have storage capacity, as prices may increase another 5-8% before harvest season. Would you like detailed market analysis?";
    }
    
    return "That's a great question! Based on current agricultural best practices and your local conditions, I'd recommend consulting with local extension services for the most accurate advice. I can help you find specific resources for your area. What's your location and crop type?";
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  const handleQuickSuggestion = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-success rounded-full px-6 py-3 mb-4">
            <Leaf className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">AI Farming Assistant</span>
          </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {t('ai.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('ai.subtitle')}
            </p>
        </div>

        {/* Chat Container */}
        <Card className="card-field mb-6 h-96 overflow-hidden flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.sender === 'ai' && (
                    <div className="flex items-center space-x-2 mb-1">
                      <MessageCircle className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-medium text-secondary">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-secondary">AI Assistant</span>
                  </div>
                  <div className="flex space-x-1 py-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('ai.placeholder')}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                className="input-soil flex-1"
              />
              <Button
                onClick={handleVoiceToggle}
                variant="outline"
                size="icon"
                className={isListening ? "bg-destructive text-destructive-foreground" : ""}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button
                onClick={() => handleSendMessage(inputValue)}
                className="btn-earth"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Suggestions */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-secondary" />
            <h3 className="text-lg font-semibold text-foreground">{t('ai.quickQuestions')}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickSuggestions.map((suggestion, index) => {
              const Icon = suggestion.icon;
              return (
                <Card
                  key={index}
                  className="card-field cursor-pointer hover:scale-105 transition-natural"
                  onClick={() => handleQuickSuggestion(suggestion.text)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-sky rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-secondary font-medium mb-1">{suggestion.category}</div>
                      <div className="text-sm font-medium text-foreground">{suggestion.text}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}