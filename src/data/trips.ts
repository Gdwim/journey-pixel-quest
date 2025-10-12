import balImage from "@/assets/trip-bali.jpg";
import santoriniImage from "@/assets/trip-santorini.jpg";
import peruImage from "@/assets/trip-peru.jpg";
import maldivesImage from "@/assets/trip-maldives.jpg";
import safariImage from "@/assets/trip-safari.jpg";

export interface Trip {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  image: string;
  detailedDescription: string;
}

export const trips: Trip[] = [
  {
    id: "bali-cultural",
    title: "Bali Cultural Immersion",
    location: "Bali, Indonesia",
    duration: "10 Days",
    price: "From $2,499",
    description: "Experience the spiritual heart of Indonesia with ancient temples, rice terraces, and traditional ceremonies.",
    highlights: [
      "🧘 Sunrise yoga at cliffside temples overlooking the ocean",
      "🐒 Swing through jungle canopies with wild monkeys",
      "🌊 Surf lessons with pro surfers on secret hidden beaches",
      "🎨 Create tie-dye batik art while eating exotic tropical fruits",
      "🌋 Cliff jump into volcanic hot springs at midnight",
      "🍜 Learn to cook nasi goreng in a bamboo treehouse"
    ],
    image: balImage,
    detailedDescription: "Immerse yourself in the rich cultural tapestry of Bali with our carefully curated 10-day journey. This experience takes you beyond the typical tourist trail into the heart of Balinese culture. You'll stay in traditional accommodations, learn from local artisans, participate in temple ceremonies, and explore the stunning landscapes that have made Bali a world-renowned destination. From the emerald rice terraces of Tegalalang to the sacred temples of Ubud, every moment is designed to connect you with the island's spiritual essence."
  },
  {
    id: "santorini-romance",
    title: "Santorini Sunset Romance",
    location: "Santorini, Greece",
    duration: "7 Days",
    price: "From $3,299",
    description: "Discover the magic of the Aegean with stunning sunsets, white-washed villages, and Mediterranean cuisine.",
    highlights: [
      "🚁 Helicopter wine tasting tour over volcanic craters",
      "🤿 Scuba dive to underwater volcano caves",
      "🎭 Perform in an open-air Greek theater production",
      "🍇 Stomp grapes barefoot at a cliffside vineyard",
      "🛶 Kayak around the caldera during golden hour",
      "🎨 Paint watercolor sunsets with a local artist on rooftops"
    ],
    image: santoriniImage,
    detailedDescription: "Experience the romance and beauty of Santorini, one of the world's most breathtaking islands. This 7-day escape combines luxury accommodations with authentic Greek experiences. Watch legendary sunsets from your private caldera-view terrace, explore charming villages clinging to cliffsides, and indulge in world-class cuisine featuring fresh seafood and local wines. From ancient ruins to modern luxury, volcanic beaches to traditional tavernas, Santorini offers an unforgettable Mediterranean adventure."
  },
  {
    id: "peru-adventure",
    title: "Machu Picchu & Amazon Explorer",
    location: "Peru",
    duration: "12 Days",
    price: "From $3,799",
    description: "Journey through ancient Incan ruins and the heart of the Amazon rainforest for the adventure of a lifetime.",
    highlights: [
      "🦙 Llama yoga session at 12,000 feet altitude",
      "🌈 Camp overnight on Rainbow Mountain summit",
      "🌿 Forage medicinal plants with jungle shamans",
      "🎣 Piranha fishing in the Amazon at dawn",
      "🪂 Paraglide over ancient Incan ruins",
      "🍫 Make chocolate from cacao beans in the rainforest"
    ],
    image: peruImage,
    detailedDescription: "Embark on an epic Peruvian adventure that combines ancient history with natural wonders. Begin in the mystical Sacred Valley, exploring Incan ruins and traditional villages. Experience the awe of Machu Picchu at sunrise, then venture deep into the Amazon rainforest for an immersive jungle experience. This journey offers the perfect balance of cultural discovery, outdoor adventure, and natural beauty, showcasing Peru's incredible diversity from the Andes to the Amazon."
  },
  {
    id: "maldives-luxury",
    title: "Maldives Luxury Escape",
    location: "Maldives",
    duration: "8 Days",
    price: "From $4,999",
    description: "Indulge in paradise with overwater villas, pristine beaches, and world-class diving in crystal-clear waters.",
    highlights: [
      "🦈 Night dive with bioluminescent plankton and reef sharks",
      "🧜 Underwater yoga class in a submerged pavilion",
      "🏄 Learn to surf artificial wave pools at luxury resort",
      "🐠 Hand-feed manta rays at a marine sanctuary",
      "🚤 Jet ski to uninhabited islands for private picnics",
      "🌅 Watch sunrise from a floating breakfast table in the ocean"
    ],
    image: maldivesImage,
    detailedDescription: "Escape to ultimate paradise in the Maldives, where turquoise waters meet pristine white sands. This luxury retreat offers the perfect combination of relaxation and adventure. Stay in your own overwater villa complete with a private infinity pool and direct ocean access. Explore vibrant coral reefs teeming with marine life, enjoy romantic private beach dinners under the stars, and rejuvenate with world-class spa treatments. The Maldives offers an unparalleled tropical escape that redefines luxury."
  },
  {
    id: "african-safari",
    title: "East African Safari Adventure",
    location: "Kenya & Tanzania",
    duration: "14 Days",
    price: "From $5,499",
    description: "Witness the Great Migration, encounter the Big Five, and experience Africa's most spectacular wildlife.",
    highlights: [
      "🎈 Hot air balloon champagne breakfast above wildebeest herds",
      "🐐 Goat yoga with Masai warriors on mountain plateaus",
      "🦁 Track lions on foot with expert rangers",
      "🏕️ Sleep in a transparent bubble tent under the stars",
      "🐘 Paint with elephants using giant brushes",
      "🌌 Stargaze with astronomers at a crater rim observatory"
    ],
    image: safariImage,
    detailedDescription: "Experience the ultimate African safari across Kenya and Tanzania's most iconic wildlife destinations. This 14-day adventure takes you through the Serengeti during the Great Migration, into the Ngorongoro Crater's unique ecosystem, and across the endless savanna plains. Stay in luxury tented camps that blend comfort with authentic bush experiences. From witnessing lion prides on the hunt to floating above the plains in a hot air balloon, every day brings extraordinary wildlife encounters and unforgettable moments in Africa's wild heart."
  }
];
