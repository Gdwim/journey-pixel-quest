import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { Trip } from "@/data/trips";
import { Link } from "react-router-dom";

interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale border-border shadow-[var(--shadow-elegant)] transition-all duration-300 hover:shadow-[var(--shadow-lift)]">
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <img 
          src={trip.image} 
          alt={trip.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{trip.title}</h3>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{trip.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{trip.duration}</span>
            </div>
          </div>
        </div>
        
        <p className="text-foreground/80 leading-relaxed">{trip.description}</p>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="highlights" className="border-border">
            <AccordionTrigger className="text-primary hover:text-primary/80 font-semibold">
              Trip Highlights
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 mt-2">
                {trip.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Link to={`/customize/${trip.id}`} className="block">
          <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)] text-primary-foreground font-semibold shadow-md transition-all group">
            ✨ Customize Your Trip
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TripCard;
