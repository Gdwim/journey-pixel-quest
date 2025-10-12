import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { trips } from "@/data/trips";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CustomizationForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const trip = trips.find(t => t.id === id);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    groupSize: 1,
    specialRequests: ""
  });
  
  const [budgetRange, setBudgetRange] = useState([5000, 15000]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("trip_inquiries").insert({
        trip_name: trip.title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        budget_min: budgetRange[0],
        budget_max: budgetRange[1],
        travel_dates: formData.travelDates,
        group_size: formData.groupSize,
        special_requests: formData.specialRequests
      });

      if (error) throw error;

      toast.success("Your trip inquiry has been submitted!", {
        description: "Our team will contact you within 24 hours."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        travelDates: "",
        groupSize: 1,
        specialRequests: ""
      });
      setBudgetRange([5000, 15000]);
      
      // Navigate back to trip detail after a short delay
      setTimeout(() => {
        navigate(`/trip/${id}`);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit inquiry", {
        description: "Please try again or contact us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to={`/trip/${id}`}>
          <Button variant="secondary" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Trip Details
          </Button>
        </Link>

        <Card className="border-border shadow-[var(--shadow-elegant)]">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-3xl font-bold text-foreground">
              Customize Your Trip
            </CardTitle>
            <p className="text-foreground/70 text-lg">
              {trip.title} - {trip.location}
            </p>
            <p className="text-muted-foreground">
              Tell us about your preferences and our travel experts will create a personalized itinerary for you.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    className="border-border"
                  />
                </div>
              </div>

              {/* Trip Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Trip Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dates">Preferred Travel Dates</Label>
                    <Input
                      id="dates"
                      type="text"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      placeholder="e.g., June 2025"
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="groupSize">Group Size *</Label>
                    <Input
                      id="groupSize"
                      type="number"
                      min="1"
                      required
                      value={formData.groupSize}
                      onChange={(e) => setFormData({ ...formData, groupSize: parseInt(e.target.value) })}
                      className="border-border"
                    />
                  </div>
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Estimated Budget</h3>
                <div className="space-y-6 p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80">Budget Range (per person)</span>
                    <span className="text-2xl font-bold text-primary">
                      ${budgetRange[0].toLocaleString()} - ${budgetRange[1].toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    min={1000}
                    max={25000}
                    step={500}
                    value={budgetRange}
                    onValueChange={setBudgetRange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$1,000</span>
                    <span>$25,000+</span>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests or Preferences</Label>
                <Textarea
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Tell us about any dietary restrictions, accessibility needs, activities you'd like to include, or any other special requests..."
                  rows={5}
                  className="border-border resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 shadow-md hover:shadow-lg transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Our travel experts will review your preferences and contact you within 24 hours with a personalized itinerary and quote.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomizationForm;
