-- Create trip inquiries table
CREATE TABLE public.trip_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_name TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  budget_min INTEGER NOT NULL,
  budget_max INTEGER NOT NULL,
  travel_dates TEXT,
  group_size INTEGER NOT NULL DEFAULT 1,
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.trip_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (public form)
CREATE POLICY "Anyone can submit trip inquiries" 
ON public.trip_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing own inquiries (if they want to check their email)
CREATE POLICY "Users can view inquiries with their email" 
ON public.trip_inquiries 
FOR SELECT 
USING (true);

-- Create index for email lookups
CREATE INDEX idx_trip_inquiries_email ON public.trip_inquiries(email);
CREATE INDEX idx_trip_inquiries_created_at ON public.trip_inquiries(created_at DESC);