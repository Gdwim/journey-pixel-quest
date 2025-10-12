import { useParams, Link } from "react-router-dom";
import { trips } from "@/data/trips";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowLeft, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TripDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trip = trips.find(t => t.id === id);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Trip Not Found</h1>
          <Link to="/">
            <Button variant="default">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/">
              <Button variant="secondary" className="mb-4 backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Trips
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{trip.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-foreground/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{trip.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-lg">{trip.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <Card className="border-border shadow-[var(--shadow-elegant)]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Trip</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {trip.detailedDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-[var(--shadow-elegant)]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Trip Highlights</h2>
                <div className="grid gap-4">
                  {trip.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground/90 text-lg">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border shadow-[var(--shadow-elegant)] sticky top-6">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">✨ Ready to Explore?</h3>
                  <p className="text-foreground/70">
                    Set your budget and customize this trip to match your dream adventure!
                  </p>
                </div>

                <Link to={`/customize/${trip.id}`}>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)] text-primary-foreground font-semibold text-lg py-6 shadow-md transition-all">
                    🎯 Customize Your Budget
                  </Button>
                </Link>
                
                <p className="text-xs text-center text-muted-foreground">
                  Free consultation • No commitment required
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
