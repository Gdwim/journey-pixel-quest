import { trips } from "@/data/trips";
import TripCard from "@/components/TripCard";
import heroImage from "@/assets/hero-travel.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToTrips = () => {
    document.getElementById("trips")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Beautiful travel destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>
        
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Dream Adventure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Curated travel experiences designed to create unforgettable memories. 
              From ancient ruins to tropical paradises, your perfect journey awaits.
            </p>
            <Button 
              onClick={scrollToTrips}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all mt-8"
            >
              Explore Our Trips
            </Button>
          </div>
        </div>
      </section>

      {/* Trips Grid Section */}
      <section id="trips" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured Destinations
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Handpicked journeys that showcase the world's most captivating places. 
              Each trip is carefully curated to offer authentic experiences and lasting memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <div 
                key={trip.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TripCard trip={trip} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-foreground/70">
            Our travel experts are here to help you create the perfect customized itinerary 
            tailored to your preferences and budget.
          </p>
          <Button 
            onClick={scrollToTrips}
            size="lg"
            variant="secondary"
            className="font-semibold text-lg px-8 py-6 shadow-md hover:shadow-lg transition-all"
          >
            View All Destinations
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
