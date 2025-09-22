import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sprout } from "lucide-react";

// Indian states with major cities and districts
const INDIAN_LOCATIONS = {
  "Andhra Pradesh": {
    cities: ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Kurnool"],
    districts: ["Anantapur", "Chittoor", "East Godavari", "Krishna", "Prakasam"]
  },
  "Karnataka": {
    cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    districts: ["Bangalore Rural", "Hassan", "Mandya", "Shimoga", "Tumkur"]
  },
  "Maharashtra": {
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    districts: ["Ahmednagar", "Beed", "Dhule", "Jalgaon", "Kolhapur"]
  },
  "Tamil Nadu": {
    cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    districts: ["Erode", "Kanchipuram", "Thanjavur", "Tirunelveli", "Vellore"]
  },
  "Punjab": {
    cities: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
    districts: ["Faridkot", "Gurdaspur", "Hoshiarpur", "Moga", "Sangrur"]
  },
  "Uttar Pradesh": {
    cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut"],
    districts: ["Aligarh", "Bareilly", "Gorakhpur", "Mathura", "Muzaffarnagar"]
  },
  "Rajasthan": {
    cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    districts: ["Alwar", "Bharatpur", "Churu", "Hanumangarh", "Sikar"]
  },
  "Gujarat": {
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    districts: ["Anand", "Banaskantha", "Kheda", "Mehsana", "Sabarkantha"]
  }
};

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    district: ""
  });

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signUpForm.username || !signUpForm.email || !signUpForm.password || !signUpForm.city || !signUpForm.district) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: signUpForm.email,
        password: signUpForm.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            username: signUpForm.username,
            city: signUpForm.city,
            district: signUpForm.district
          }
        }
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast({
            title: "Account Already Exists",
            description: "This email is already registered. Please sign in instead.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Sign Up Failed",
            description: error.message,
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "Welcome to AgriWise!",
          description: "Your account has been created successfully.",
        });
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signInForm.email || !signInForm.password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: signInForm.email,
        password: signInForm.password
      });

      if (error) {
        toast({
          title: "Sign In Failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Welcome Back!",
          description: "You have successfully signed in.",
        });
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-green/5 via-background to-harvest-gold/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sprout className="h-8 w-8 text-hero-green" />
            <h1 className="text-2xl font-bold text-hero-green">AgriWise</h1>
          </div>
          <p className="text-muted-foreground">Join thousands of farmers growing smarter</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>Sign in to your AgriWise account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signInForm.email}
                      onChange={(e) => setSignInForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      value={signInForm.password}
                      onChange={(e) => setSignInForm(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Join AgriWise</CardTitle>
                <CardDescription>Create your farmer account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-username">Username</Label>
                    <Input
                      id="signup-username"
                      type="text"
                      placeholder="Your farmer name"
                      value={signUpForm.username}
                      onChange={(e) => setSignUpForm(prev => ({ ...prev, username: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signUpForm.email}
                      onChange={(e) => setSignUpForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={signUpForm.password}
                      onChange={(e) => setSignUpForm(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select onValueChange={setSelectedState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(INDIAN_LOCATIONS).map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedState && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Select onValueChange={(value) => setSignUpForm(prev => ({ ...prev, city: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                          <SelectContent>
                            {INDIAN_LOCATIONS[selectedState as keyof typeof INDIAN_LOCATIONS].cities.map((city) => (
                              <SelectItem key={city} value={city}>{city}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="district">District</Label>
                        <Select onValueChange={(value) => setSignUpForm(prev => ({ ...prev, district: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your district" />
                          </SelectTrigger>
                          <SelectContent>
                            {INDIAN_LOCATIONS[selectedState as keyof typeof INDIAN_LOCATIONS].districts.map((district) => (
                              <SelectItem key={district} value={district}>{district}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}