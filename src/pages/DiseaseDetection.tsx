import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Scan, 
  AlertCircle, 
  CheckCircle, 
  Leaf, 
  TrendingDown,
  Clock,
  Shield
} from "lucide-react";

interface DetectionResult {
  disease: string;
  confidence: number;
  severity: 'Low' | 'Medium' | 'High';
  treatment: string[];
  prevention: string[];
}

const mockResults: DetectionResult = {
  disease: "Early Blight (Alternaria solani)",
  confidence: 87,
  severity: 'Medium',
  treatment: [
    "Apply fungicide containing chlorothalonil or copper",
    "Remove affected leaves immediately",
    "Improve air circulation around plants",
    "Water at soil level to avoid wet foliage"
  ],
  prevention: [
    "Rotate crops annually",
    "Maintain proper plant spacing",
    "Apply preventive fungicide sprays",
    "Remove plant debris at season end"
  ]
};

export default function DiseaseDetection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<DetectionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-sky rounded-full px-6 py-3 mb-4">
            <Scan className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Disease Detection</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI-Powered Crop Health Analysis
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload or capture photos of your crops to get instant disease identification and treatment recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card className="card-field">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Upload Crop Image</h3>
                
                {selectedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={selectedImage} 
                      alt="Selected crop" 
                      className="w-full h-64 object-cover rounded-lg border"
                    />
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        className="flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Different Image
                      </Button>
                      <Button 
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="btn-earth flex-1"
                      >
                        {isAnalyzing ? (
                          <>
                            <Scan className="w-4 h-4 mr-2 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Scan className="w-4 h-4 mr-2" />
                            Analyze Image
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-primary transition-natural"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Click to upload or drag image here</p>
                    <p className="text-sm text-muted-foreground">Supports JPG, PNG, WebP</p>
                  </div>
                )}
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </Card>

            {/* Tips */}
            <Card className="card-field">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Leaf className="w-5 h-5 text-secondary mr-2" />
                Photography Tips
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Take photos in good natural light</p>
                <p>• Focus on affected areas of the plant</p>
                <p>• Include leaves, stems, or fruits showing symptoms</p>
                <p>• Avoid blurry or overexposed images</p>
                <p>• Multiple angles can improve accuracy</p>
              </div>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {isAnalyzing && (
              <Card className="card-field">
                <div className="text-center py-8">
                  <Scan className="w-12 h-12 text-secondary mx-auto mb-4 animate-spin" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analyzing Image</h3>
                  <p className="text-muted-foreground">AI is examining your crop for potential diseases...</p>
                </div>
              </Card>
            )}

            {results && (
              <div className="space-y-6">
                {/* Detection Results */}
                <Card className="card-field">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Detection Results</h3>
                      <p className="text-sm text-muted-foreground">AI Analysis Complete</p>
                    </div>
                    <Badge variant="outline" className={getSeverityColor(results.severity)}>
                      {results.severity} Severity
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                        <span className="font-medium text-foreground">{results.disease}</span>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Confidence Level</span>
                          <span className="text-sm font-medium text-foreground">{results.confidence}%</span>
                        </div>
                        <div className="w-full bg-background rounded-full h-2">
                          <div 
                            className="bg-secondary h-2 rounded-full" 
                            style={{ width: `${results.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Treatment Recommendations */}
                <Card className="card-field">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="w-5 h-5 text-secondary" />
                    <h4 className="font-semibold text-foreground">Treatment Recommendations</h4>
                  </div>
                  <div className="space-y-2">
                    {results.treatment.map((treatment, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Prevention Tips */}
                <Card className="card-field">
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingDown className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-foreground">Prevention for Future</h4>
                  </div>
                  <div className="space-y-2">
                    {results.prevention.map((prevention, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{prevention}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button className="btn-hero flex-1">
                    Save Results
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Share with Expert
                  </Button>
                </div>
              </div>
            )}

            {!results && !isAnalyzing && (
              <Card className="card-field">
                <div className="text-center py-8">
                  <Scan className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Analyze</h3>
                  <p className="text-muted-foreground">Upload an image of your crop to get started with AI disease detection.</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}