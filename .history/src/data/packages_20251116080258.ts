import { SafariPackage } from "@/types/safari";
import safariLions from "@/assets/safari-lions.jpg";
import ngorongoroCrater from "@/assets/ngorongoro-crater.jpg";
import tarangireElephants from "@/assets/tarangire-elephants.jpg";
import wildebeestMigration from "@/assets/wildebeest-migration.jpg";
import safariGiraffes from "@/assets/safari-giraffes.jpg";

//3days
import adventure from "@/assets/3day/3d-01.jpg"; 
import adventure1 from "@/assets/3day/3d-02.jpg";
import adventure2 from "@/assets/3day/3d-03.jpg";

//3day safari to remember
import remember1 from "@/assets/3day/3day-safari-rem1.jpg";
import remember2 from "@/assets/3day/3day-safari-rem2.jpg";
import remember3 from "@/assets/3day/3day-safari-remeber.jpg";
import tarangire from "@/assets/3day/safari-to-rem.webp";

//3days hear of africa
import heart1 from "@/assets/3day/3-day-lion.jpg";
import heart2 from "@/assets/3day/creter-view.jpg";
import heart3 from "@/assets/3day/tarangile.jpeg";

//4days luxury serengeti
import luxury from "@/assets/4day/ballon.jpg";
import luxury2 from "@/assets/4day/eleite-safari-ex.jpg";
import luxury3 from "@/assets/4day/migration-day08-1.jpg";
import luxury4 from "@/assets/4day/Lake-Manyara-Tree-Climbing-Lion-1024x569.jpg";

//4days northen 
import north from "@/assets/4day/04-north1.jpg";
import north1 from "@/assets/4day/04-north.jpg";
import north2 from "@/assets/4day/3day-safari-rem2.jpg";

//days4 animal kingdom
import animalKingdom from "@/assets/4day/arsuah-parks.jpg";
import animalKingdom2 from "@/assets/4day/arusha-moving-car.jpg";
import animalKingdom3 from "@/assets/4day/manayara-lake.jpg";
import animalKingdom4 from "@/assets/4day/manayara0buffalo.jpg";

//day4 to elephants to craters
import creter from "@/assets/4day/to-creater01.jpg";
import creter1 from "@/assets/4day/to-creter-02.jpg";
import creter2 from "@/assets/4day/to-creter-03.jpg";
import creter3 from "@/assets/4day/to creter-04.jpg";

//day4 golden plains
import golden1 from "@/assets/4day/luxury1.webp";
import golden2 from "@/assets/4day/luxury.webp";
import golden3 from "@/assets/4day/luxury2.jpg";
import golden4 from "@/assets/4day/luxury3.jpg";

//days4 inspiring landscapes
import inspiring1 from "@/assets/4day/ins02.jpg";
import inspiring2 from "@/assets/4day/insp01.jpg";
import inspiring3 from "@/assets/4day/insp03.jpg";
import inspiring4 from "@/assets/4day/insp04.jpg";

//day5 predator 
import predator1 from "@/assets/5days/pre1.jpg";
import predator2 from "@/assets/5days/pred.jpg";

//days 5 signature safari
import signature1 from "@/assets/5days/signature-01.jpg";
import signature2 from "@/assets/5days/signature02.jpg";

//days5 ndutu
import ndutu1 from "@/assets/5days/ndutu01.jpg";
import ndutu2 from "@/assets/5days/ndutu02.jpg";
import ndutu3 from "@/assets/5days/ndutu03.avif";
import ndutu4 from "@/assets/5days/ndutu04.jpg";
import ndutu5 from "@/assets/5days/ndutu05.jpg";

//day5 masterpiece
import masterpiece1 from "@/assets/5days/nature04.jpg";
import masterpiece2 from "@/assets/5days/nature01.jpg";
import masterpiece3 from "@/assets/5days/nature02.jpg";
import masterpiece4 from "@/assets/5days/nature03.avif";

//days5 waterfall
import waterfall1 from "@/assets/5days/waterfall.jpg";
import waterfall2 from "@/assets/5days/waterfall1.jpg";
import waterfall3 from "@/assets/5days/waterfall2.jpg";
import waterfall4 from "@/assets/5days/waterfall03.jpg";

//day5 fly
import fly1 from "@/assets/5days/fly1.webp";
import fly2 from "@/assets/5days/fly2.webp";

//day6 kilimanjaro
import kilimanjaro1 from "@/assets/6day/kilima-05.jpg";
import kilimanjaro2 from "@/assets/6day/kilima-04.jpg";
import kilimanjaro3 from "@/assets/6day/kilima02.jpg";
import kilimanjaro4 from "@/assets/6day/kilima01.jpg";
import kilimanjaro5 from "@/assets/6day/kilima.jpg";


//day6 magic nature
import magic1 from "@/assets/6day/magic00.jpg";
import magic2 from "@/assets/6day/magic01.jpg";
import magic3 from "@/assets/6day/magic1.jpg";
import magic4 from "@/assets/6day/magic2.jpg";

//day6 mateuni
import mateuni1 from "@/assets/6day/materuni-waterfalls-beautiful.jpg";
import mateuni2 from "@/assets/6day/arusha.jpg";
import mateuni3 from "@/assets/6day/arusha1.jpg";


export const safariPackages: SafariPackage[] = [
  // ========== 3-DAY SAFARIS ==========
  {
    id: "3-day-fly-in-tanzania",
    title: "3-DAY FLY IN TANZANIA SAFARI ADVENTURE",
    duration: 3,
    image: adventure2,
    images: [adventure, adventure1, adventure2],
    price: "From $1,850 per person",
    destinations: ["Central Serengeti National Park", "Ngorongoro Crater"],
    description: "Experience Tanzania's premier wildlife destinations in this compact fly-in safari. Perfect for travelers with limited time who want maximum wildlife encounters.",
    highlights: [
      "Fly-in convenience from Zanzibar",
      "Central Serengeti wildlife viewing",
      "Ngorongoro Crater exploration",
      "Luxury tented accommodation",
      "Big Five encounters"
    ],
    itinerary: [
      {
        day: 1,
        title: "Zanzibar to Central Serengeti National Park",
        description: "Fly from Zanzibar to the heart of the Serengeti for an afternoon of spectacular wildlife viewing. Land at Seronera Airstrip and begin your safari adventure immediately with game drives in the wildlife-rich Central Serengeti.",
        accommodation: {
          name: "Tukaone Weavers Camp",
          type: "Tented Camp",
          image: safariLions,
          rating: 4,
          amenities: ["En-suite tents", "Restaurant", "Bar", "Central location"]
        },
        meals: "Lunch, Dinner",
        activities: ["Flight from Zanzibar", "Afternoon game drive", "Wildlife viewing"]
      },
      {
        day: 2,
        title: "Serengeti to Ngorongoro Crater",
        description: "Morning game drive in the Serengeti before traveling to the magnificent Ngorongoro Crater. Enjoy the scenic journey through Tanzania's stunning highlands and settle into your forest tented lodge.",
        accommodation: {
          name: "Ngorongoro Forest Tented Lodge",
          type: "Tented Lodge",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Forest setting", "Restaurant", "Crater rim views"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti drive", "Transfer to Ngorongoro", "Crater rim viewing"]
      },
      {
        day: 3,
        title: "Ngorongoro Crater to Arusha",
        description: "Descend into the Ngorongoro Crater for an unforgettable game drive on the crater floor. Witness the incredible concentration of wildlife including the Big Five before ascending and transferring to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater floor game drive", "Transfer to Arusha", "Departure"]
      }
    ],
    included: [
      "Domestic flight from Zanzibar",
      "All park fees",
      "Professional guide",
      "4x4 safari vehicle",
      "Accommodation as specified",
      "All meals during safari",
      "Drinking water"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages"
    ],
    accommodation: "Tented Camps & Lodges",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private tour (2-7 people)"
  },
  {
    id: "3-day-tanzania-journey",
    title: "3-DAY TANZANIA SAFARI A JOURNEY TO REMEMBER",
    duration: 3,
    image: remember1,
    images: [tarangire, remember2, remember3],
    price: "From $1,650 per person",
    destinations: ["Tarangire National Park", "Lake Manyara", "Ngorongoro Crater"],
    description: "A perfect introduction to Tanzania's wildlife, visiting Tarangire's elephant herds, Lake Manyara's diverse ecosystems, and the magnificent Ngorongoro Crater.",
    highlights: [
      "Tarangire elephant herds",
      "Lake Manyara bird life",
      "Ngorongoro Crater Big Five",
      "Comfortable lodge accommodation",
      "Scenic landscapes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description: "Depart Arusha for Tarangire National Park, famous for its large elephant population and ancient baobab trees. Enjoy a full day of game viewing in this diverse ecosystem.",
        accommodation: {
          name: "Tarangire Safari Lodge",
          type: "Safari Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Swimming pool", "Restaurant", "Bar", "Viewing deck"]
        },
        meals: "Lunch, Dinner",
        activities: ["Full day game drive", "Elephant watching", "Bird viewing"]
      },
      {
        day: 2,
        title: "Tarangire to Lake Manyara",
        description: "Morning game drive in Tarangire before proceeding to Lake Manyara National Park. Explore the diverse habitats from the lake shore to the escarpment forests.",
        accommodation: {
          name: "Baghayo Garden Suites",
          type: "Garden Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Garden setting", "Restaurant", "Comfortable rooms"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Tarangire drive", "Lake Manyara exploration", "Bird watching"]
      },
      {
        day: 3,
        title: "Karatu to Ngorongoro Crater",
        description: "Descend into the Ngorongoro Crater for a remarkable game drive. Experience one of Africa's most spectacular wildlife sanctuaries before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Wildlife viewing", "Return to Arusha"]
      }
    ],
    included: [
      "All park fees",
      "Professional guide",
      "4x4 Land Cruiser",
      "Lodge accommodation",
      "All meals",
      "Drinking water",
      "Airport transfers"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Tips",
      "Personal expenses",
      "Optional activities"
    ],
    accommodation: "Safari Lodges",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private or small group"
  },
  {
    id: "3-day-heart-of-africa",
    title: "3-DAY TANZANIA SAFARI INTO THE HEART OF AFRICA",
    duration: 3,
    image: heart1,
    images: [heart2, heart3, tarangire],
    price: "From $2,100 per person",
    destinations: ["Serengeti National Park", "Ngorongoro Crater", "Lake Manyara"],
    description: "Dive into the heart of Africa with this immersive 3-day safari covering the Serengeti's endless plains and the spectacular Ngorongoro Crater.",
    highlights: [
      "Serengeti wildlife spectacle",
      "Ngorongoro Crater floor",
      "Lake Manyara exploration",
      "Quality lodge stays",
      "Expert guiding"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Serengeti",
        description: "Journey to the legendary Serengeti National Park. Enter the vast plains and begin your wildlife adventure with an afternoon game drive in Central Serengeti.",
        accommodation: {
          name: "Nyikani Camp Central Serengeti",
          type: "Tented Camp",
          image: safariLions,
          rating: 4,
          amenities: ["Comfortable tents", "Restaurant", "Bush setting"]
        },
        meals: "Lunch, Dinner",
        activities: ["Transfer to Serengeti", "Afternoon game drive", "Sunset viewing"]
      },
      {
        day: 2,
        title: "Serengeti to Ngorongoro Crater",
        description: "Morning game drive in the Serengeti before traveling to Ngorongoro. Arrive at your lodge perched on the crater rim with spectacular views.",
        accommodation: {
          name: "Ngorongoro Serena Safari Lodge",
          type: "Safari Lodge",
          image: ngorongoroCrater,
          rating: 5,
          amenities: ["Crater rim location", "Restaurant", "Bar", "Panoramic views"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti drive", "Transfer to Ngorongoro", "Crater viewing"]
      },
      {
        day: 3,
        title: "Lake Manyara to Arusha",
        description: "Descend into Ngorongoro Crater for morning game viewing, then continue to Lake Manyara National Park for afternoon wildlife viewing before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Lake Manyara visit", "Return to Arusha"]
      }
    ],
    included: [
      "All park fees",
      "Professional English-speaking guide",
      "4x4 safari vehicle",
      "Accommodation",
      "All meals",
      "Water",
      "Transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Personal items"
    ],
    accommodation: "Lodges & Tented Camps",
    meals: "Full Board",
    bestTime: "Year-round destination",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },

  // ========== 4-DAY SAFARIS ==========
  {
    id: "4-day-luxury-serengeti-fly-in",
    title: "4-DAY LUXURY SERENGETI SAFARI FLY-IN EXPERIENCE",
    duration: 4,
    image: luxury,
    images: [luxury2, luxury3, luxury4, luxury],
    price: "From $3,200 per person",
    destinations: ["Serengeti National Park", "Ngorongoro Crater", "Lake Manyara National Park"],
    description: "Fly into the Serengeti for a luxurious safari experience. Maximize your time with wildlife while enjoying premium accommodations and seamless transfers.",
    highlights: [
      "Fly-in convenience",
      "Luxury camp accommodation",
      "Full day Serengeti exploration",
      "Ngorongoro Crater descent",
      "Lake Manyara wildlife"
    ],
    itinerary: [
      {
        day: 1,
        title: "Land in Serengeti to lodge",
        description: "Fly directly to the Serengeti and transfer to your luxury camp. Settle in and enjoy afternoon game viewing in this wildlife paradise.",
        accommodation: {
          name: "Serengeti Sametu Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Central location"]
        },
        meals: "Lunch, Dinner",
        activities: ["Flight to Serengeti", "Afternoon game drive", "Camp settling"]
      },
      {
        day: 2,
        title: "Full day in Serengeti National Park",
        description: "Spend a complete day exploring the Serengeti's diverse wildlife. Early morning and late afternoon drives offer the best opportunities to see predators in action.",
        accommodation: {
          name: "Serengeti Sametu Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Central location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Bush lunch"]
      },
      {
        day: 3,
        title: "Descend Ngorongoro Crater",
        description: "Drive to Ngorongoro and descend into the crater for spectacular wildlife viewing. The crater's unique ecosystem hosts an incredible concentration of animals.",
        accommodation: {
          name: "Ngorongoro Lion's Paw Camp",
          type: "Tented Camp",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Comfortable tents", "Restaurant", "Crater views"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater descent", "Game viewing", "Picnic lunch"]
      },
      {
        day: 4,
        title: "Game at Lake Manyara National Park",
        description: "Visit Lake Manyara National Park known for tree-climbing lions and diverse birdlife before transferring to Arusha for your departure.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariGiraffes,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Lake Manyara game drive", "Bird watching", "Transfer to Arusha"]
      }
    ],
    included: [
      "Domestic flights",
      "All park fees",
      "Professional guide",
      "Luxury accommodation",
      "All meals",
      "Game drives",
      "Drinking water"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Alcoholic beverages",
      "Tips",
      "Personal expenses"
    ],
    accommodation: "Luxury Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private tour"
  },
  {
    id: "4-day-northern-tanzania",
    title: "4-DAY NORTHERN TANZANIA SAFARI",
    duration: 4,
    image: north,
    images: [north1, north2, north],
    price: "From $2,400 per person",
    destinations: ["Tarangire National Park", "Serengeti National Park", "Ngorongoro Crater"],
    description: "Experience the best of Northern Tanzania's wildlife circuit. From Tarangire's elephants to the Serengeti's vast plains and Ngorongoro's crater floor.",
    highlights: [
      "Tarangire elephant herds",
      "Serengeti game drives",
      "Ngorongoro Crater exploration",
      "Quality accommodations",
      "Small group experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description: "Begin your safari with a drive to Tarangire National Park. Known for its massive elephant population and distinctive baobab trees, enjoy a full afternoon of game viewing.",
        accommodation: {
          name: "Ngorongoro Marera Mountain View Lodge",
          type: "Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Mountain views", "Restaurant", "Bar", "Gardens"]
        },
        meals: "Lunch, Dinner",
        activities: ["Tarangire game drive", "Elephant watching", "Landscape photography"]
      },
      {
        day: 2,
        title: "Tarangire to Serengeti National Park",
        description: "Travel to the world-famous Serengeti National Park. Enjoy game viewing en route and settle into your camp in the heart of the wilderness.",
        accommodation: {
          name: "Matawi Serengeti Camp",
          type: "Tented Camp",
          image: safariLions,
          rating: 4,
          amenities: ["Comfortable tents", "Dining tent", "Bush setting"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit game drive", "Serengeti arrival", "Evening wildlife viewing"]
      },
      {
        day: 3,
        title: "Serengeti to Ngorongoro",
        description: "Morning game drive in the Serengeti before journeying to the Ngorongoro Conservation Area. Arrive at your camp near the crater rim.",
        accommodation: {
          name: "Ang'ata Ngorongoro Camp",
          type: "Tented Camp",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Crater views", "Restaurant", "Comfortable tents"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti drive", "Transfer to Ngorongoro", "Crater viewing"]
      },
      {
        day: 4,
        title: "Ngorongoro Crater to Arusha",
        description: "Descend into the magnificent Ngorongoro Crater for a morning of exceptional wildlife viewing before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater floor game drive", "Big Five viewing", "Return to Arusha"]
      }
    ],
    included: [
      "All park fees",
      "Professional guide",
      "4x4 safari vehicle",
      "Accommodation",
      "All meals",
      "Water",
      "Airport transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Alcoholic drinks",
      "Tips",
      "Personal expenses"
    ],
    accommodation: "Lodges & Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Small group or private"
  },
  {
    id: "4-day-animal-kingdom",
    title: "4-DAY TANZANIA SAFARI ANIMAL KINGDOM EXPERIENCE",
    duration: 4,
    image: animalKingdom,
    images: [animalKingdom2, animalKingdom3, animalKingdom4, animalKingdom],
    price: "From $2,200 per person",
    destinations: ["Arusha National Park", "Tarangire National Park", "Ngorongoro Crater", "Lake Manyara"],
    description: "A comprehensive 4-day safari visiting four distinct parks, each offering unique wildlife experiences and spectacular landscapes.",
    highlights: [
      "Four national parks",
      "Diverse ecosystems",
      "Varied wildlife encounters",
      "Comfortable lodges",
      "Expert guiding"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha National Park",
        description: "Explore Arusha National Park with its diverse landscapes from montane forest to crater lakes. Spot colobus monkeys, giraffes, and buffaloes with Mount Meru as your backdrop.",
        accommodation: {
          name: "Arusha Planet Lodge",
          type: "Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Garden setting", "Restaurant", "Comfortable rooms"]
        },
        meals: "Lunch, Dinner",
        activities: ["Arusha NP game drive", "Momella Lakes", "Wildlife viewing"]
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description: "Journey to Tarangire National Park for a full day of wildlife viewing. Famous for its elephant herds and baobab trees, the park offers excellent game viewing year-round.",
        accommodation: {
          name: "Bougainvillea Safari Lodge",
          type: "Safari Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Swimming pool", "Restaurant", "Bar", "Gardens"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Bird photography"]
      },
      {
        day: 3,
        title: "Ngorongoro Crater",
        description: "Descend into the Ngorongoro Crater for an unforgettable day of wildlife viewing in this natural amphitheater, home to the Big Five.",
        accommodation: {
          name: "Baghayo Garden Suites",
          type: "Garden Lodge",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Garden views", "Restaurant", "Peaceful setting"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater floor game drive", "Big Five viewing", "Picnic lunch"]
      },
      {
        day: 4,
        title: "Lake Manyara National Park",
        description: "Visit Lake Manyara National Park, famous for tree-climbing lions and diverse birdlife. Enjoy morning game viewing before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariGiraffes,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Lake Manyara game drive", "Bird watching", "Transfer to Arusha"]
      }
    ],
    included: [
      "All park fees",
      "Professional guide",
      "Safari vehicle",
      "Accommodation",
      "All meals",
      "Water",
      "Transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Personal expenses"
    ],
    accommodation: "Safari Lodges",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private or small group"
  },
  {
    id: "4-day-elephants-to-craters",
    title: "4-DAY TANZANIA SAFARI – FROM ELEPHANTS TO CRATERS",
    duration: 4,
    image: creter1,
    images: [creter, creter2, creter3, creter1],
    price: "From $2,300 per person",
    destinations: ["Tarangire National Park", "Serengeti National Park", "Ngorongoro Crater"],
    description: "Experience the wildlife wonders of Tanzania from Tarangire's elephant herds through the Serengeti's endless plains to the magnificent Ngorongoro Crater.",
    highlights: [
      "Tarangire elephants",
      "Serengeti predators",
      "Ngorongoro Big Five",
      "Comfortable accommodation",
      "Scenic landscapes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description: "Depart for Tarangire National Park, known for its large elephant population and ancient baobab trees. Full day of game viewing in this beautiful park.",
        accommodation: {
          name: "Kankari Lodge",
          type: "Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Comfortable rooms", "Restaurant", "Bar", "Pool"]
        },
        meals: "Lunch, Dinner",
        activities: ["Full day game drive", "Elephant observation", "Photography"]
      },
      {
        day: 2,
        title: "Karatu to Serengeti National Park",
        description: "Travel to the legendary Serengeti National Park. Enjoy game viewing en route and arrive at your camp for overnight in the heart of the wilderness.",
        accommodation: {
          name: "Serengeti Classic View Camp",
          type: "Tented Camp",
          image: safariLions,
          rating: 4,
          amenities: ["Comfortable tents", "Dining area", "Bush experience"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit game drive", "Serengeti wildlife", "Camp arrival"]
      },
      {
        day: 3,
        title: "Serengeti National Park to Karatu",
        description: "Morning game drive in the Serengeti before traveling back to Karatu. Enjoy the scenery and wildlife sightings along the way.",
        accommodation: {
          name: "Kankari Lodge",
          type: "Lodge",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Comfortable rooms", "Restaurant", "Bar", "Pool"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti drive", "Transfer to Karatu", "Relaxation"]
      },
      {
        day: 4,
        title: "Ngorongoro Crater to Arusha",
        description: "Descend into the Ngorongoro Crater for a spectacular morning game drive before ascending and returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Wildlife viewing", "Return to Arusha"]
      }
    ],
    included: [
      "Park fees",
      "Guide",
      "Vehicle",
      "Accommodation",
      "Meals",
      "Water",
      "Transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Personal items"
    ],
    accommodation: "Lodges & Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },
  {
    id: "4-day-golden-plains",
    title: "4-DAY TANZANIA SAFARI – GOLDEN PLAINS & LUXURY",
    duration: 4,
    image: golden1,
    images: [golden2, golden3, golden4, golden1],
    price: "From $4,800 per person",
    destinations: ["Tarangire National Park", "Serengeti National Park", "Ngorongoro Crater"],
    description: "Experience luxury safari at its finest with stays at premium lodges including the renowned Four Seasons Safari Lodge Serengeti.",
    highlights: [
      "Four Seasons luxury",
      "Premium game viewing",
      "Tarangire elephants",
      "Ngorongoro Crater",
      "Five-star service"
    ],
    itinerary: [
      {
        day: 1,
        title: "Game drive in Tarangire National Park",
        description: "Full day game drive in Tarangire National Park, famous for its elephant herds. Evening at the luxurious Retreat at Ngorongoro.",
        accommodation: {
          name: "The Retreat at Ngorongoro Lodge",
          type: "Luxury Lodge",
          image: tarangireElephants,
          rating: 5,
          amenities: ["Luxury suites", "Spa", "Fine dining", "Infinity pool"]
        },
        meals: "Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant viewing", "Luxury lodge experience"]
      },
      {
        day: 2,
        title: "Game drive Serengeti National Park",
        description: "Journey to the Serengeti and check into the magnificent Four Seasons Safari Lodge. Afternoon game drive in the surrounding area.",
        accommodation: {
          name: "Four Seasons Safari Lodge Serengeti",
          type: "Ultra-Luxury Lodge",
          image: safariLions,
          rating: 5,
          amenities: ["Infinity pool", "Spa", "Water hole views", "Fine dining"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transfer to Serengeti", "Afternoon game drive", "Lodge amenities"]
      },
      {
        day: 3,
        title: "Full-day game drive in Serengeti National Park",
        description: "Spend a complete day exploring the Serengeti's abundant wildlife with morning and afternoon game drives from your luxury base.",
        accommodation: {
          name: "Four Seasons Safari Lodge Serengeti",
          type: "Ultra-Luxury Lodge",
          image: safariLions,
          rating: 5,
          amenities: ["Infinity pool", "Spa", "Water hole views", "Fine dining"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Spa relaxation"]
      },
      {
        day: 4,
        title: "Game drive in the Ngorongoro Crater",
        description: "Descend into the Ngorongoro Crater for a morning of spectacular wildlife viewing before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Big Five viewing", "Return transfer"]
      }
    ],
    included: [
      "Luxury accommodation",
      "All park fees",
      "Expert guide",
      "All meals",
      "Game drives",
      "Premium vehicle",
      "Transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Premium drinks",
      "Spa treatments",
      "Tips"
    ],
    accommodation: "Ultra-Luxury Lodges",
    meals: "Full Board Premium",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private luxury safari"
  },
  {
    id: "4-day-inspiring-landscapes",
    title: "4-DAY TANZANIA WILDLIFE SAFARI – INSPIRING LANDSCAPES",
    duration: 4,
    image: inspiring1,
    images: [inspiring2, inspiring3, inspiring4, inspiring1],
    price: "From $2,600 per person",
    destinations: ["Tarangire National Park", "Serengeti National Park", "Lake Manyara National Park", "Maasai Village"],
    description: "Combine wildlife safaris with cultural experiences in this inspiring journey through Tanzania's northern circuit with a Maasai village visit.",
    highlights: [
      "Tarangire elephants",
      "Serengeti wildlife",
      "Maasai cultural visit",
      "Lake Manyara birdlife",
      "Quality accommodations"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description: "Drive to Tarangire National Park for a full day of game viewing. Famous for its elephant herds and baobab trees.",
        accommodation: {
          name: "Ngorongoro Corridor Lodge",
          type: "Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Restaurant", "Bar", "Garden", "Pool"]
        },
        meals: "Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Photography"]
      },
      {
        day: 2,
        title: "Tarangire to Serengeti National Park",
        description: "Journey to the Serengeti with game viewing en route. Arrive at your camp in the heart of the Serengeti ecosystem.",
        accommodation: {
          name: "Golden Safari Camps",
          type: "Tented Camp",
          image: safariLions,
          rating: 4,
          amenities: ["Comfortable tents", "Dining tent", "Bush experience"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit game drive", "Serengeti arrival", "Wildlife viewing"]
      },
      {
        day: 3,
        title: "Serengeti to Ngorongoro Crater – Karatu",
        description: "Morning Serengeti game drive before traveling to the Ngorongoro area. Enjoy scenic views en route.",
        accommodation: {
          name: "Ngorongoro Corridor Lodge",
          type: "Lodge",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Restaurant", "Bar", "Garden", "Pool"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti drive", "Transfer to Karatu", "Relaxation"]
      },
      {
        day: 4,
        title: "Lake Manyara National Park - Maasai Village – Arusha",
        description: "Visit Lake Manyara National Park and experience Maasai culture at a traditional village before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariGiraffes,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Lake Manyara game drive", "Maasai village visit", "Cultural experience"]
      }
    ],
    included: [
      "Park fees",
      "Guide",
      "Vehicle",
      "Accommodation",
      "Meals",
      "Maasai visit",
      "Water"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Souvenirs"
    ],
    accommodation: "Lodges & Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private or small group"
  },

  // ========== 5-DAY SAFARIS ==========
  {
    id: "5-day-predator-tracking",
    title: "5-DAY SAFARI TANZANIA – PREDATOR TRACKING ADVENTURE",
    duration: 5,
    image: predator1,
    images: [predator2, predator1, animalKingdom3],
    price: "From $3,400 per person",
    destinations: ["Tarangire", "Lake Manyara", "Ngorongoro Crater", "Serengeti"],
    description: "A predator-focused safari exploring Tanzania's prime wildlife areas. Track lions, leopards, and cheetahs across diverse ecosystems.",
    highlights: [
      "Predator tracking focus",
      "Multiple ecosystems",
      "Lake Manyara tree lions",
      "Serengeti big cats",
      "Fly-out convenience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tarangire game drive",
        description: "Begin your adventure in Tarangire National Park, searching for lions and leopards among the baobabs and elephant herds.",
        accommodation: {
          name: "Tarangire Simba Lodge",
          type: "Safari Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Pool", "Restaurant", "Bar", "Savanna views"]
        },
        meals: "Lunch, Dinner",
        activities: ["Full day game drive", "Predator tracking", "Wildlife viewing"]
      },
      {
        day: 2,
        title: "Lake Manyara National Park",
        description: "Explore Lake Manyara National Park, famous for its tree-climbing lions and diverse habitats from forests to lake shores.",
        accommodation: {
          name: "Farm of Dreams Lodge",
          type: "Farm Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Farm setting", "Restaurant", "Gardens", "Peaceful"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lake Manyara game drive", "Tree lion search", "Bird watching"]
      },
      {
        day: 3,
        title: "Ngorongoro Crater",
        description: "Descend into Ngorongoro Crater where predators thrive. Track lions, spotted hyenas, and possibly black-backed jackals.",
        accommodation: {
          name: "Rhino Lodge",
          type: "Crater Rim Lodge",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Crater views", "Restaurant", "Fireplace", "Bar"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater game drive", "Predator viewing", "Big Five encounters"]
      },
      {
        day: 4,
        title: "Serengeti National Park",
        description: "Enter the Serengeti, ultimate predator territory. Track lions, leopards, cheetahs across the endless plains.",
        accommodation: {
          name: "Into Wild Africa Luxury Safari Camp Serengeti",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Prime location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Serengeti", "Big cat tracking", "Predator photography"]
      },
      {
        day: 5,
        title: "Serengeti to airstrip",
        description: "Final morning game drive in the Serengeti before flying out. Last chances for predator sightings.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariLions,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Morning game drive", "Flight departure", "Safari conclusion"]
      }
    ],
    included: [
      "Flight from Serengeti",
      "All park fees",
      "Professional guide",
      "4x4 vehicle",
      "Accommodation",
      "All meals",
      "Water"
    ],
    excluded: [
      "International flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Personal expenses"
    ],
    accommodation: "Lodges & Luxury Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy to Moderate",
    groupSize: "Private safari"
  },
  {
    id: "5-day-signature-safari",
    title: "5-DAY SIGNATURE SAFARI TANZANIA",
    duration: 5,
    image: signature1,
    images: [signature2, signature1,],
    price: "From $3,100 per person",
    destinations: ["Tarangire", "Ngorongoro Crater", "Serengeti", "Lake Manyara"],
    description: "Our signature safari experience covering all major northern circuit parks with comfortable accommodations and expert guiding.",
    highlights: [
      "Complete northern circuit",
      "Varied accommodations",
      "Expert wildlife guiding",
      "Diverse ecosystems",
      "Comprehensive experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Transferred to the lodge",
        description: "Arrive in Arusha and transfer to your lodge for rest and safari briefing. Prepare for your upcoming adventure.",
        accommodation: {
          name: "Mtoni River Lodge",
          type: "River Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["River views", "Restaurant", "Bar", "Gardens"]
        },
        meals: "Dinner",
        activities: ["Airport transfer", "Safari briefing", "Relaxation"]
      },
      {
        day: 2,
        title: "Arusha to Tarangire National Park",
        description: "Drive to Tarangire National Park for your first day of wildlife viewing. Experience the park's famous elephant herds.",
        accommodation: {
          name: "Eileen's Trees Inn",
          type: "Country Inn",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Garden setting", "Restaurant", "Comfortable rooms"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Tarangire game drive", "Elephant watching", "Photography"]
      },
      {
        day: 3,
        title: "Ngorongoro Crater to Serengeti National Park",
        description: "Visit Ngorongoro Crater in the morning before continuing to the Serengeti. Game viewing en route.",
        accommodation: {
          name: "Embalakai Serengeti Camp",
          type: "Tented Camp",
          image: safariLions,
          rating: 4,
          amenities: ["Comfortable tents", "Dining area", "Bush setting"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater visit", "Transit to Serengeti", "Evening game drive"]
      },
      {
        day: 4,
        title: "Serengeti National Park to Karatu",
        description: "Morning game drive in the Serengeti before returning to Karatu area for overnight near the crater.",
        accommodation: {
          name: "Eileen's Trees Inn",
          type: "Country Inn",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Garden setting", "Restaurant", "Comfortable rooms"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti drive", "Transfer to Karatu", "Relaxation"]
      },
      {
        day: 5,
        title: "Lake Manyara National Park to Arusha",
        description: "Visit Lake Manyara National Park for morning game viewing before returning to Arusha for your departure.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariGiraffes,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Lake Manyara drive", "Bird watching", "Return to Arusha"]
      }
    ],
    included: [
      "All park fees",
      "Professional guide",
      "Safari vehicle",
      "Accommodation",
      "All meals",
      "Water",
      "Transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Alcoholic drinks",
      "Personal expenses"
    ],
    accommodation: "Lodges & Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private or small group"
  },
  {
    id: "5-day-migration-ndutu",
    title: "5-DAY TANZANIA MIGRATION SAFARI – NDUTU WONDERS",
    duration: 5,
    image: ndutu4,
    images: [ndutu1, ndutu2, ndutu3, ndutu5],
    price: "From $3,600 per person",
    destinations: ["Ndutu", "Ngorongoro Crater", "Tarangire"],
    description: "Experience the wildebeest calving season in Ndutu (December-March). Witness thousands of newborns and intense predator action.",
    highlights: [
      "Calving season spectacle",
      "Ndutu plains wildlife",
      "Predator concentrations",
      "Ngorongoro Crater",
      "Tarangire elephants"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Ndutu",
        description: "Fly or drive to Ndutu in the southern Serengeti. Arrive in time for afternoon game viewing during the calving season.",
        accommodation: {
          name: "Masek Tented Lodge",
          type: "Tented Lodge",
          image: wildebeestMigration,
          rating: 4,
          amenities: ["Seasonal camp", "Restaurant", "Migration views"]
        },
        meals: "Lunch, Dinner",
        activities: ["Arrival", "Afternoon game drive", "Calving season viewing"]
      },
      {
        day: 2,
        title: "Full Game Drive in Ndutu",
        description: "Full day exploring Ndutu plains. Witness thousands of wildebeest calves being born and predators taking advantage.",
        accommodation: {
          name: "Masek Tented Lodge",
          type: "Tented Lodge",
          image: wildebeestMigration,
          rating: 4,
          amenities: ["Seasonal camp", "Restaurant", "Migration views"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Calving observation", "Predator tracking"]
      },
      {
        day: 3,
        title: "Ndutu to Ngorongoro Crater",
        description: "Morning in Ndutu before traveling to Ngorongoro Conservation Area. Settle into your lodge near the crater.",
        accommodation: {
          name: "Ngorongoro Farm House",
          type: "Farm Lodge",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Farm setting", "Restaurant", "Gardens", "Coffee tour"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Ndutu drive", "Transfer", "Farm relaxation"]
      },
      {
        day: 4,
        title: "Karatu to Tarangire",
        description: "Descend into Ngorongoro Crater for morning game viewing before continuing to Tarangire National Park.",
        accommodation: {
          name: "Tarangire Safari Lodge",
          type: "Safari Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Pool", "Restaurant", "Park views"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater game drive", "Transfer to Tarangire", "Evening viewing"]
      },
      {
        day: 5,
        title: "Morning Game in Tarangire to Arusha",
        description: "Final morning game drive in Tarangire before returning to Arusha for your onward journey.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: tarangireElephants,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Morning Tarangire drive", "Return to Arusha", "Departure"]
      }
    ],
    included: [
      "All park fees",
      "Expert guide",
      "4x4 vehicle",
      "Accommodation",
      "All meals",
      "Water",
      "Transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Personal expenses"
    ],
    accommodation: "Lodges & Seasonal Camps",
    meals: "Full Board",
    bestTime: "December to March (calving season)",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },
  {
    id: "5-day-natures-masterpiece",
    title: "5-DAY TANZANIA SAFARI – NATURE'S MASTERPIECE",
    duration: 5,
    image: masterpiece1,
    images: [masterpiece2, masterpiece3, masterpiece4, masterpiece1],
    price: "From $2,400 per person",
    destinations: ["Tarangire", "Mto wa Mbu", "Serengeti", "Ngorongoro", "Lake Manyara"],
    description: "An affordable yet comprehensive safari using public campsites. Experience Tanzania's natural masterpieces on a budget-friendly adventure.",
    highlights: [
      "Budget-friendly camping",
      "All major parks",
      "Authentic bush experience",
      "Small group camping",
      "Expert camp chef"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description: "Drive to Tarangire for a full day of game viewing. Camp under the stars in a public campsite.",
        accommodation: {
          name: "Public Campsite",
          type: "Camping",
          image: tarangireElephants,
          rating: 3,
          amenities: ["Basic facilities", "Bush camping", "Shared facilities"]
        },
        meals: "Lunch, Dinner",
        activities: ["Tarangire game drive", "Bush camping", "Stargazing"]
      },
      {
        day: 2,
        title: "Mto wa Mbu to Serengeti National Park",
        description: "Travel from Mto wa Mbu area to the Serengeti. Game drive en route and camp in the Serengeti.",
        accommodation: {
          name: "Public Campsite",
          type: "Camping",
          image: safariLions,
          rating: 3,
          amenities: ["Basic facilities", "Bush camping", "Shared facilities"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Game viewing", "Camp setup"]
      },
      {
        day: 3,
        title: "Serengeti National Park to Ngorongoro Crater",
        description: "Morning Serengeti game drive before traveling to Ngorongoro. Camp on the crater rim.",
        accommodation: {
          name: "Public Campsite",
          type: "Camping",
          image: ngorongoroCrater,
          rating: 3,
          amenities: ["Basic facilities", "Crater rim location", "Shared facilities"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transfer", "Crater rim camping"]
      },
      {
        day: 4,
        title: "Ngorongoro Crater",
        description: "Full day in Ngorongoro Crater. Descend for extensive game viewing and return to crater rim camp.",
        accommodation: {
          name: "Public Campsite",
          type: "Camping",
          image: ngorongoroCrater,
          rating: 3,
          amenities: ["Basic facilities", "Crater rim location", "Shared facilities"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full crater day", "Big Five viewing", "Crater rim camping"]
      },
      {
        day: 5,
        title: "Lake Manyara National Park to Arusha",
        description: "Visit Lake Manyara National Park for morning game viewing before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariGiraffes,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Lake Manyara drive", "Return to Arusha", "Departure"]
      }
    ],
    included: [
      "Park fees",
      "Camping fees",
      "Guide/cook",
      "Safari vehicle",
      "Camping equipment",
      "All meals",
      "Water"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Sleeping bags"
    ],
    accommodation: "Public Campsites",
    meals: "Full Board (camp meals)",
    bestTime: "Year-round",
    fitnessLevel: "Moderate (camping)",
    groupSize: "Small group camping"
  },
  {
    id: "5-day-wild-encounters",
    title: "5-DAY TANZANIA SAFARI – WILD ENCOUNTERS & WATERFALLS",
    duration: 5,
    image: waterfall4,
    images: [waterfall3, waterfall2, waterfall1, waterfall4],
    price: "From $2,700 per person",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro", "Mount Kilimanjaro"],
    description: "Combine wildlife safaris with a visit to Mount Kilimanjaro area. Experience diverse landscapes from savanna to mountain forests.",
    highlights: [
      "Wildlife & scenery combo",
      "Tarangire game viewing",
      "Serengeti exploration",
      "Ngorongoro Crater",
      "Kilimanjaro visit"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Tarangire National Park",
        description: "Begin your safari with a full day in Tarangire National Park. Famous for elephants and baobabs.",
        accommodation: {
          name: "Highview Hotel",
          type: "Hotel",
          image: tarangireElephants,
          rating: 3,
          amenities: ["Basic comfort", "Restaurant", "Town location"]
        },
        meals: "Lunch, Dinner",
        activities: ["Tarangire game drive", "Elephant viewing", "Photography"]
      },
      {
        day: 2,
        title: "Serengeti National Park",
        description: "Travel to the Serengeti. Enjoy game viewing en route and arrive at your bush camp.",
        accommodation: {
          name: "Serengeti Wild Camp",
          type: "Bush Camp",
          image: safariLions,
          rating: 3,
          amenities: ["Basic tented camp", "Dining tent", "Bush experience"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Game viewing", "Bush camping"]
      },
      {
        day: 3,
        title: "Central Serengeti National Park",
        description: "Full day exploring the Central Serengeti. Track predators and observe the diverse wildlife.",
        accommodation: {
          name: "Ngorongoro Wild Camp",
          type: "Bush Camp",
          image: ngorongoroCrater,
          rating: 3,
          amenities: ["Basic tented camp", "Dining area", "Bush setting"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full Serengeti exploration", "Wildlife tracking", "Photography"]
      },
      {
        day: 4,
        title: "Ngorongoro Crater",
        description: "Descend into Ngorongoro Crater for extensive game viewing on the crater floor.",
        accommodation: {
          name: "Highview Hotel",
          type: "Hotel",
          image: ngorongoroCrater,
          rating: 3,
          amenities: ["Basic comfort", "Restaurant", "Town location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater game drive", "Big Five viewing", "Return to hotel"]
      },
      {
        day: 5,
        title: "Mount Kilimanjaro",
        description: "Visit the Kilimanjaro area. Enjoy views of Africa's highest peak and explore the surrounding region.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariGiraffes,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Kilimanjaro area visit", "Mountain views", "Departure"]
      }
    ],
    included: [
      "Park fees",
      "Guide",
      "Vehicle",
      "Accommodation",
      "All meals",
      "Water",
      "Kilimanjaro visit"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Drinks",
      "Personal expenses"
    ],
    accommodation: "Hotels & Bush Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Small group or private"
  },
  {
    id: "5-day-wildlife-flyout",
    title: "5-DAY WILDLIFE SAFARI TANZANIA FLY OUT",
    duration: 5,
    image: fly2,
    images: [fly1, fly2, waterfall4],
    price: "From $3,900 per person",
    destinations: ["Tarangire", "Lake Manyara", "Ngorongoro", "Serengeti"],
    description: "Comprehensive northern circuit safari with convenient fly-out from Serengeti. Maximize time with wildlife, minimize driving.",
    highlights: [
      "Fly-out convenience",
      "Quality lodge stays",
      "Four premier parks",
      "Time-efficient routing",
      "Comfortable accommodations"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire",
        description: "Depart for Tarangire National Park. Full day of game viewing with elephants and diverse wildlife.",
        accommodation: {
          name: "Tarangire Sopa Lodge",
          type: "Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Pool", "Restaurant", "Bar", "Park views"]
        },
        meals: "Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Wildlife photography"]
      },
      {
        day: 2,
        title: "Tarangire to Lake Manyara",
        description: "Morning game drive in Tarangire before continuing to Lake Manyara National Park.",
        accommodation: {
          name: "Farm of Dreams Lodge",
          type: "Farm Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Farm setting", "Restaurant", "Gardens", "Pool"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Tarangire", "Lake Manyara afternoon", "Bird watching"]
      },
      {
        day: 3,
        title: "Karatu to Ngorongoro Crater",
        description: "Descend into Ngorongoro Crater for a full day of game viewing before ascending to your crater rim lodge.",
        accommodation: {
          name: "Ngorongoro Serena Safari Lodge",
          type: "Lodge",
          image: ngorongoroCrater,
          rating: 5,
          amenities: ["Crater rim", "Restaurant", "Bar", "Spectacular views"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full crater day", "Big Five viewing", "Crater rim evening"]
      },
      {
        day: 4,
        title: "Ngorongoro to Serengeti",
        description: "Travel to the Serengeti with game viewing en route. Arrive at your luxury camp in the afternoon.",
        accommodation: {
          name: "Into Wild Africa Luxury Safari Camp Serengeti",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Premium service"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit game drive", "Serengeti arrival", "Evening drive"]
      },
      {
        day: 5,
        title: "Game in Serengeti",
        description: "Morning game drive in the Serengeti before flying out to Arusha. Convenient conclusion to your safari.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: safariLions,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Morning Serengeti drive", "Flight to Arusha", "Departure"]
      }
    ],
    included: [
      "Flight from Serengeti",
      "All park fees",
      "Expert guide",
      "4x4 vehicle",
      "Quality accommodation",
      "All meals",
      "Water"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visas",
      "Alcoholic drinks",
      "Tips",
      "Personal expenses"
    ],
    accommodation: "Quality Lodges & Luxury Camp",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },

  // ========== 6-DAY SAFARIS ==========
  {
    id: "6-day-kilimanjaro-to-serengeti",
    title: "6-DAY SAFARI TANZANIA KILIMANJARO TO SERENGETI PLAINS",
    duration: 6,
    image:  kilimanjaro5 ,
    images: [kilimanjaro1, kilimanjaro2,kilimanjaro3 , kilimanjaro4],
    price: "From $4,200 per person",
    destinations: ["West Kilimanjaro", "Lake Manyara", "Serengeti", "Ngorongoro"],
    description: "Unique safari combining Kilimanjaro region cultural experiences with classic wildlife viewing in Tanzania's premier parks.",
    highlights: [
      "Kilimanjaro region culture",
      "Maasai encounters",
      "Serengeti wildlife",
      "Ngorongoro Crater",
      "Quality lodges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive - West Kilimanjaro",
        description: "Arrive and transfer to West Kilimanjaro area. Settle into your Maasai-style lodge with views of Kilimanjaro.",
        accommodation: {
          name: "Osiligilai Maasai Lodge",
          type: "Cultural Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Maasai design", "Kilimanjaro views", "Cultural experience"]
        },
        meals: "Dinner",
        activities: ["Arrival", "Lodge settling", "Cultural orientation"]
      },
      {
        day: 2,
        title: "Cultural Tour - Manyara National Park",
        description: "Morning cultural tour in Maasai area before continuing to Lake Manyara National Park for afternoon game viewing.",
        accommodation: {
          name: "Marera Valley Lodge",
          type: "Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Valley views", "Restaurant", "Bar", "Pool"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Cultural tour", "Lake Manyara drive", "Tree lion search"]
      },
      {
        day: 3,
        title: "Karatu - Serengeti National Park",
        description: "Journey to the Serengeti. Game viewing en route as you travel to your luxury camp in the heart of the wilderness.",
        accommodation: {
          name: "Suenos de Africa Luxury Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Premium location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Game viewing", "Camp arrival"]
      },
      {
        day: 4,
        title: "Serengeti National Park",
        description: "Full day exploring the Serengeti. Extended game drives to maximize your wildlife encounters.",
        accommodation: {
          name: "Suenos de Africa Luxury Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Premium location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Photography"]
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description: "Travel to Ngorongoro. Descend into the crater for extensive game viewing before ascending to your crater rim lodge.",
        accommodation: {
          name: "Ngorongoro Coffee Lodge",
          type: "Boutique Lodge",
          image: ngorongoroCrater,
          rating: 5,
          amenities: ["Coffee plantation", "Fine dining", "Crater views", "Boutique setting"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater game drive", "Big Five viewing", "Lodge arrival"]
      },
      {
        day: 6,
        title: "Departure",
        description: "Morning at leisure or optional coffee tour before transferring to Arusha for your departure.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast",
        activities: ["Optional coffee tour", "Transfer to Arusha", "Departure"]
      }
    ],
    included: [
      "All park fees",
      "Cultural tour",
      "Professional guide",
      "Luxury accommodation",
      "All meals",
      "4x4 vehicle",
      "Water"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Alcoholic drinks",
      "Tips",
      "Personal expenses"
    ],
    accommodation: "Boutique Lodges & Luxury Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },
  {
    id: "6-day-majestic-moments",
    title: "6-DAY TANZANIA SAFARI – MAJESTIC MOMENTS",
    duration: 6,
    image: magic1,
    images: [magic2, magic3, magic4, magic1],
    price: "From $4,600 per person",
    destinations: ["Tarangire", "Lake Manyara", "Serengeti", "Ngorongoro"],
    description: "Experience majestic moments across Tanzania's premier destinations with luxury accommodations throughout your journey.",
    highlights: [
      "Luxury camp experience",
      "Extended Serengeti stay",
      "Quality lodges",
      "Comprehensive game viewing",
      "Comfort & wildlife combined"
    ],
    itinerary: [
      {
        day: 1,
        title: "Game drive in Tarangire",
        description: "Full day game drive in Tarangire National Park. Evening at your beautiful lakeside lodge.",
        accommodation: {
          name: "Lake Burunge Tented Lodge",
          type: "Tented Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Lake views", "Restaurant", "Bar", "Scenic location"]
        },
        meals: "Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant viewing", "Lodge relaxation"]
      },
      {
        day: 2,
        title: "Game drive in Lake Manyara",
        description: "Explore Lake Manyara National Park with its diverse habitats and famous tree-climbing lions.",
        accommodation: {
          name: "Eileen's Trees Inn",
          type: "Country Inn",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Garden setting", "Restaurant", "Peaceful location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lake Manyara game drive", "Bird watching", "Forest exploration"]
      },
      {
        day: 3,
        title: "Lake Manyara to Serengeti",
        description: "Journey to the Serengeti. Check into your luxury camp and enjoy an afternoon game drive.",
        accommodation: {
          name: "Serengeti Sametu Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Premium service"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Afternoon game drive", "Camp settling"]
      },
      {
        day: 4,
        title: "Full game drive in Serengeti",
        description: "Entire day exploring the Serengeti. Extended game drives during optimal viewing times.",
        accommodation: {
          name: "Serengeti Sametu Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Premium service"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Bush lunch"]
      },
      {
        day: 5,
        title: "Game drive in Ngorongoro Crater",
        description: "Travel to Ngorongoro and descend into the crater for exceptional wildlife viewing.",
        accommodation: {
          name: "Ngorongoro Lion's Paw Camp",
          type: "Tented Camp",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Crater views", "Restaurant", "Comfortable tents"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater game drive", "Big Five encounters", "Crater rim camp"]
      },
      {
        day: 6,
        title: "Local lunch, transfer to airport",
        description: "Leisurely morning before enjoying a local lunch and transferring to the airport for departure.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Morning leisure", "Local lunch experience", "Airport transfer"]
      }
    ],
    included: [
      "All park fees",
      "Professional guide",
      "Luxury accommodation",
      "All meals",
      "4x4 vehicle",
      "Water",
      "Transfers"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Alcoholic beverages",
      "Tips",
      "Personal expenses"
    ],
    accommodation: "Luxury Camps & Quality Lodges",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },
  {
    id: "6-day-materuni-falls",
    title: "6-DAY TANZANIA SAFARI – MATERUNI FALLS VISIT",
    duration: 6,
    image: mateuni1,
    images: [mateuni2, mateuni3],
    price: "From $3,400 per person",
    destinations: ["Arusha", "Materuni Waterfalls", "Tarangire", "Serengeti", "Ngorongoro"],
    description: "Unique safari combining wildlife viewing with a visit to the stunning Materuni Waterfalls near Kilimanjaro.",
    highlights: [
      "Materuni Waterfalls",
      "Coffee tour experience",
      "Wildlife safaris",
      "Cultural encounters",
      "Diverse landscapes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrive in Arusha and transfer to your farmhouse lodge. Rest and prepare for your adventure.",
        accommodation: {
          name: "Arusha Farm House",
          type: "Farm Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Farm setting", "Restaurant", "Gardens", "Pool"]
        },
        meals: "Dinner",
        activities: ["Airport transfer", "Safari briefing", "Lodge relaxation"]
      },
      {
        day: 2,
        title: "Materuni Waterfalls",
        description: "Visit Materuni Waterfalls, hike through lush forests, and enjoy a traditional coffee tour with local Chagga people.",
        accommodation: {
          name: "Arusha Farm House",
          type: "Farm Lodge",
          image: safariGiraffes,
          rating: 4,
          amenities: ["Farm setting", "Restaurant", "Gardens", "Pool"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Waterfall hike", "Coffee tour", "Cultural experience"]
      },
      {
        day: 3,
        title: "Arusha to Tarangire National Park",
        description: "Depart for Tarangire National Park. Full day of game viewing with elephants and diverse wildlife.",
        accommodation: {
          name: "Suricata Boma Lodge",
          type: "Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Restaurant", "Bar", "Pool", "Garden"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Photography"]
      },
      {
        day: 4,
        title: "Tarangire to Serengeti National Park",
        description: "Journey to the Serengeti. Game viewing en route and arrival at your bush camp.",
        accommodation: {
          name: "Land of Nature Camp",
          type: "Bush Camp",
          image: safariLions,
          rating: 4,
          amenities: ["Comfortable tents", "Dining tent", "Bush setting"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Game viewing", "Camp arrival"]
      },
      {
        day: 5,
        title: "Serengeti to Karatu",
        description: "Morning game drive in the Serengeti before returning to Karatu area near Ngorongoro.",
        accommodation: {
          name: "Farm of Dreams Lodge",
          type: "Farm Lodge",
          image: ngorongoroCrater,
          rating: 4,
          amenities: ["Farm setting", "Restaurant", "Gardens", "Pool"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti drive", "Transfer to Karatu", "Farm relaxation"]
      },
      {
        day: 6,
        title: "Ngorongoro Crater to Arusha",
        description: "Descend into Ngorongoro Crater for morning game viewing before returning to Arusha.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Big Five viewing", "Return to Arusha"]
      }
    ],
    included: [
      "All park fees",
      "Materuni Falls visit",
      "Coffee tour",
      "Professional guide",
      "Accommodation",
      "All meals",
      "Water"
    ],
    excluded: [
      "Flights",
      "Insurance",
      "Visas",
      "Tips",
      "Alcoholic drinks",
      "Personal expenses"
    ],
    accommodation: "Farm Lodges & Bush Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Moderate (waterfall hike)",
    groupSize: "Private or small group"
  },
  {
    id: "6-day-wildebeest-migration",
    title: "6-DAY WILDEBEEST MIGRATION SAFARI TANZANIA",
    duration: 6,
    image: wildebeestMigration,
    images: [wildebeestMigration, safariLions, tarangireElephants, ngorongoroCrater, safariGiraffes],
    price: "From $5,200 per person",
    destinations: ["Tarangire", "Central Serengeti", "Northern Serengeti", "Ngorongoro"],
    description: "Witness the Great Migration! Track the herds from Central to Northern Serengeti, experiencing the dramatic Mara River crossings.",
    highlights: [
      "Great Migration tracking",
      "Mara River crossings",
      "Northern Serengeti",
      "Luxury accommodations",
      "Expert migration guides"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Arusha",
        description: "Arrive in Arusha and transfer to your luxury hotel. Rest and prepare for your migration safari.",
        accommodation: {
          name: "Gran Meliá Arusha",
          type: "Luxury Hotel",
          image: safariGiraffes,
          rating: 5,
          amenities: ["Luxury rooms", "Spa", "Fine dining", "Pool", "Gardens"]
        },
        meals: "Dinner",
        activities: ["VIP transfer", "Safari briefing", "Hotel relaxation"]
      },
      {
        day: 2,
        title: "Arusha to Tarangire National Park",
        description: "Drive to Tarangire National Park for a full day of game viewing before the migration adventure begins.",
        accommodation: {
          name: "Kitela Lodge",
          type: "Lodge",
          image: tarangireElephants,
          rating: 4,
          amenities: ["Restaurant", "Bar", "Pool", "Garden setting"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Wildlife viewing"]
      },
      {
        day: 3,
        title: "Central Serengeti National Park",
        description: "Fly or drive to Central Serengeti. Begin tracking the migration herds with expert guides.",
        accommodation: {
          name: "Signature Serengeti Luxury Tented Safari Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Premium location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Migration tracking", "Game drives", "Wildlife photography"]
      },
      {
        day: 4,
        title: "Central Serengeti to Northern Serengeti Park",
        description: "Journey to Northern Serengeti's Mara River region. Position for potential river crossings.",
        accommodation: {
          name: "Gnu Mara River Camp",
          type: "Migration Camp",
          image: wildebeestMigration,
          rating: 5,
          amenities: ["River views", "Luxury tents", "Prime migration location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Travel to Mara River", "River crossing observation", "Migration spectacle"]
      },
      {
        day: 5,
        title: "Northern to Central Serengeti National Park",
        description: "Final morning at Mara River before returning to Central Serengeti. Continue migration tracking.",
        accommodation: {
          name: "Signature Serengeti Luxury Tented Safari Camp",
          type: "Luxury Camp",
          image: safariLions,
          rating: 5,
          amenities: ["Luxury tents", "Fine dining", "Bar", "Premium location"]
        },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Mara River", "Return to Central", "Afternoon game drive"]
      },
      {
        day: 6,
        title: "Ngorongoro Crater",
        description: "Travel to Ngorongoro Crater for a morning game drive before departing Tanzania.",
        accommodation: {
          name: "End of safari",
          type: "N/A",
          image: ngorongoroCrater,
          rating: 0,
          amenities: []
        },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Big Five viewing", "Departure"]
      }
    ],
    included: [
      "Domestic flight (if applicable)",
      "All park fees",
      "Migration expert guide",
      "Luxury accommodation",
      "All meals",
      "Premium vehicle",
      "Water"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visas",
      "Alcoholic beverages",
      "Tips",
      "Personal expenses"
    ],
    accommodation: "Luxury Hotels & Migration Camps",
    meals: "Full Board Premium",
    bestTime: "July to October (Mara River crossings)",
    fitnessLevel: "Easy",
    groupSize: "Private luxury safari"
  },

  // ========== 7-DAY SAFARIS ==========
  {
    id: "7-day-affordable-wildlife",
    title: "7-DAY AFFORDABLE WILDLIFE SAFARI IN TANZANIA",
    duration: 7,
    image: ngorongoroCrater,
    images: [ngorongoroCrater, safariLions, tarangireElephants, wildebeestMigration, safariGiraffes],
    price: "From $3,200 per person",
    destinations: ["Lake Manyara", "Serengeti (Mara River)", "Central Serengeti", "Ngorongoro", "Tarangire"],
    description: "Budget-friendly camping safari covering all major parks. Experience the Mara River crossing and comprehensive northern circuit on a camping adventure.",
    highlights: [
      "Budget camping safari",
      "Mara River wildebeest crossing",
      "All major parks",
      "Public campsites",
      "Full week adventure"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Lake Manyara National Park",
        description: "Begin your affordable safari adventure with a drive to Lake Manyara National Park. Full day game viewing before camping.",
        accommodation: { name: "Public Campsite", type: "Camping", image: safariGiraffes, rating: 3, amenities: ["Basic facilities", "Shared amenities", "Bush camping"] },
        meals: "Lunch, Dinner",
        activities: ["Lake Manyara game drive", "Tree lion search", "Bush camping"]
      },
      {
        day: 2,
        title: "Lake Manyara to Serengeti National Park",
        description: "Travel to the Serengeti with game viewing en route. Camp in the Serengeti wilderness.",
        accommodation: { name: "Public Campsite", type: "Camping", image: safariLions, rating: 3, amenities: ["Basic facilities", "Bush camping"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Game viewing", "Camping"]
      },
      {
        day: 3,
        title: "Full game drive in Mara River wildebeest crossing",
        description: "Full day at the Mara River region witnessing the dramatic wildebeest crossings (seasonal July-October).",
        accommodation: { name: "Public Campsite", type: "Camping", image: wildebeestMigration, rating: 3, amenities: ["Basic facilities", "Mara River proximity"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Mara River crossings", "Migration viewing", "Predator watching"]
      },
      {
        day: 4,
        title: "Full day in central Serengeti",
        description: "Explore the Central Serengeti with its resident wildlife and predator concentrations.",
        accommodation: { name: "Public Campsite", type: "Camping", image: safariLions, rating: 3, amenities: ["Basic facilities", "Central location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Central Serengeti exploration", "Predator tracking", "Kopje viewing"]
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description: "Descend into Ngorongoro Crater for extensive game viewing. Camp on the crater rim.",
        accommodation: { name: "Public Campsite", type: "Camping", image: ngorongoroCrater, rating: 3, amenities: ["Crater rim location", "Basic facilities"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater floor game drive", "Big Five viewing", "Crater rim camping"]
      },
      {
        day: 6,
        title: "Ngorongoro to Tarangire",
        description: "Travel to Tarangire National Park. Game drive and camp among the baobabs and elephants.",
        accommodation: { name: "Public Campsite", type: "Camping", image: tarangireElephants, rating: 3, amenities: ["Basic facilities", "Bush camping"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Tarangire game drive", "Elephant watching", "Camping"]
      },
      {
        day: 7,
        title: "Tarangire to Arusha",
        description: "Final morning game drive in Tarangire before returning to Arusha.",
        accommodation: { name: "End of safari", type: "N/A", image: tarangireElephants, rating: 0, amenities: [] },
        meals: "Breakfast, Lunch",
        activities: ["Morning game drive", "Return to Arusha", "Departure"]
      }
    ],
    included: ["All park fees", "Camping fees", "Guide/cook", "Safari vehicle", "Camping equipment", "All meals", "Water"],
    excluded: ["Flights", "Insurance", "Visas", "Tips", "Drinks", "Sleeping bags"],
    accommodation: "Public Campsites",
    meals: "Full Board (camping meals)",
    bestTime: "July-October for Mara River crossings",
    fitnessLevel: "Moderate (camping)",
    groupSize: "Small group camping safari"
  },
  {
    id: "7-day-discover-northern",
    title: "7-DAY DISCOVER NORTHERN TANZANIA SAFARI ADVENTURE",
    duration: 7,
    image: safariLions,
    images: [safariLions, tarangireElephants, safariGiraffes, ngorongoroCrater, wildebeestMigration],
    price: "From $4,800 per person",
    destinations: ["Tarangire", "Lake Manyara", "Serengeti", "Ngorongoro"],
    description: "Comprehensive northern circuit safari with quality lodge accommodations and extended time in each park for thorough wildlife exploration.",
    highlights: [
      "Quality lodge stays",
      "Extended park time",
      "Gran Meliá luxury",
      "All major parks",
      "Professional guiding"
    ],
    itinerary: [
      {
        day: 1,
        title: "Airport to Gran Meliá",
        description: "Arrive and transfer to the luxurious Gran Meliá Arusha. Rest and prepare for your adventure.",
        accommodation: { name: "Gran Meliá Arusha", type: "Luxury Hotel", image: safariGiraffes, rating: 5, amenities: ["Spa", "Fine dining", "Pool", "Luxury rooms"] },
        meals: "Dinner",
        activities: ["VIP transfer", "Safari briefing", "Hotel relaxation"]
      },
      {
        day: 2,
        title: "Arusha to Tarangire National Park",
        description: "Full day exploring Tarangire with its elephant herds and ancient baobab trees.",
        accommodation: { name: "Tarangire Safari Lodge", type: "Safari Lodge", image: tarangireElephants, rating: 4, amenities: ["Pool", "Restaurant", "Bar", "Park views"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Photography"]
      },
      {
        day: 3,
        title: "Tarangire to Lake Manyara",
        description: "Morning Tarangire game drive before continuing to Lake Manyara National Park.",
        accommodation: { name: "Kitela Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Restaurant", "Bar", "Pool", "Gardens"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Tarangire", "Lake Manyara afternoon", "Bird watching"]
      },
      {
        day: 4,
        title: "From Lake Manyara to Serengeti",
        description: "Journey to the Serengeti. Arrive at your tented lodge in the wilderness.",
        accommodation: { name: "Lahia Tented Lodge", type: "Tented Lodge", image: safariLions, rating: 4, amenities: ["Comfortable tents", "Restaurant", "Bush setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Afternoon game drive", "Lodge arrival"]
      },
      {
        day: 5,
        title: "Full game drive in Serengeti",
        description: "Complete day exploring the Serengeti's diverse wildlife and spectacular landscapes.",
        accommodation: { name: "Lahia Tented Lodge", type: "Tented Lodge", image: safariLions, rating: 4, amenities: ["Comfortable tents", "Restaurant", "Bush setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Predator viewing"]
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater",
        description: "Morning Serengeti drive before traveling to Ngorongoro. Arrive at your crater area lodge.",
        accommodation: { name: "Kitela Lodge", type: "Lodge", image: ngorongoroCrater, rating: 4, amenities: ["Restaurant", "Bar", "Pool", "Gardens"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transfer to Ngorongoro", "Lodge relaxation"]
      },
      {
        day: 7,
        title: "Karatu to African Tulip Hotel",
        description: "Descend into Ngorongoro Crater for morning game drive before returning to Arusha.",
        accommodation: { name: "End of safari", type: "N/A", image: ngorongoroCrater, rating: 0, amenities: [] },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Big Five viewing", "Return to Arusha"]
      }
    ],
    included: ["All park fees", "Professional guide", "Quality accommodation", "All meals", "4x4 vehicle", "Water", "Transfers"],
    excluded: ["Flights", "Insurance", "Visas", "Alcoholic drinks", "Tips", "Personal expenses"],
    accommodation: "Quality Lodges",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private or small group"
  },
  {
    id: "7-day-southern-wild-paths",
    title: "7-DAY SOUTHERN TANZANIA SAFARI – WILD PATHS",
    duration: 7,
    image: tarangireElephants,
    images: [tarangireElephants, safariGiraffes, safariLions, ngorongoroCrater, wildebeestMigration],
    price: "From $4,200 per person",
    destinations: ["Tarangire", "Lake Manyara", "Serengeti", "Ngorongoro"],
    description: "Explore Tanzania's wild paths with comfortable lodges and extended game viewing opportunities across all major northern parks.",
    highlights: [
      "Comfortable lodges",
      "Extended Serengeti",
      "Four major parks",
      "Comprehensive wildlife",
      "Quality accommodations"
    ],
    itinerary: [
      {
        day: 1,
        title: "Airport to Lodge",
        description: "Arrive and transfer to your lodge in Arusha. Rest and safari briefing.",
        accommodation: { name: "Arusha Planet Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Garden", "Restaurant", "Comfortable rooms"] },
        meals: "Dinner",
        activities: ["Airport transfer", "Safari briefing", "Relaxation"]
      },
      {
        day: 2,
        title: "Game in Tarangire National Park",
        description: "Full day game viewing in Tarangire National Park among elephants and baobabs.",
        accommodation: { name: "Sangaiwe Tented Lodge", type: "Tented Lodge", image: tarangireElephants, rating: 4, amenities: ["Tented rooms", "Restaurant", "Pool"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant herds", "Wildlife photography"]
      },
      {
        day: 3,
        title: "Game Drive in Lake Manyara",
        description: "Explore Lake Manyara National Park with its diverse ecosystems and birdlife.",
        accommodation: { name: "Baghayo Garden Suites", type: "Garden Lodge", image: safariGiraffes, rating: 4, amenities: ["Gardens", "Restaurant", "Peaceful setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lake Manyara game drive", "Bird watching", "Tree lion search"]
      },
      {
        day: 4,
        title: "From Lake Manyara to Serengeti",
        description: "Journey to the Serengeti. Arrive at your luxury safari camp.",
        accommodation: { name: "Into Wild Africa Luxury Safari Camp Serengeti", type: "Luxury Camp", image: safariLions, rating: 5, amenities: ["Luxury tents", "Fine dining", "Premium service"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Afternoon game drive", "Luxury camp"]
      },
      {
        day: 5,
        title: "Full day game Drive in Serengeti",
        description: "Complete day exploring the Serengeti with morning and afternoon game drives.",
        accommodation: { name: "Into Wild Africa Luxury Safari Camp Serengeti", type: "Luxury Camp", image: safariLions, rating: 5, amenities: ["Luxury tents", "Fine dining", "Premium service"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Bush lunch"]
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater",
        description: "Morning Serengeti game drive before traveling to the Ngorongoro area.",
        accommodation: { name: "Baghayo Garden Suites", type: "Garden Lodge", image: ngorongoroCrater, rating: 4, amenities: ["Gardens", "Restaurant", "Peaceful setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transfer", "Lodge arrival"]
      },
      {
        day: 7,
        title: "Ngorongoro to Airport",
        description: "Descend into Ngorongoro Crater for final game drive before airport transfer.",
        accommodation: { name: "End of safari", type: "N/A", image: ngorongoroCrater, rating: 0, amenities: [] },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Big Five viewing", "Airport transfer"]
      }
    ],
    included: ["All park fees", "Professional guide", "Quality lodges", "All meals", "4x4 vehicle", "Water", "Transfers"],
    excluded: ["Flights", "Insurance", "Visas", "Tips", "Alcoholic drinks", "Personal expenses"],
    accommodation: "Lodges & Luxury Camps",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },
  {
    id: "7-day-migration-mara-river",
    title: "7-DAY TANZANIA SAFARI – MIGRATION CROSSING MARA RIVER",
    duration: 7,
    image: wildebeestMigration,
    images: [wildebeestMigration, safariLions, ngorongoroCrater, tarangireElephants, safariGiraffes],
    price: "From $5,800 per person",
    destinations: ["Mara River (Kogatende)", "Central Serengeti", "Ngorongoro", "Tarangire"],
    description: "Fly directly to the Mara River region for three days of migration viewing. Experience the dramatic river crossings and predator action.",
    highlights: [
      "Fly-in to Mara River",
      "3 days at Mara River",
      "River crossing spectacle",
      "Luxury camps",
      "Migration focus"
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Kogatende (Mara River)",
        description: "Fly directly to Kogatende airstrip in Northern Serengeti. Transfer to your camp near the Mara River.",
        accommodation: { name: "Kontiki Kogatende Camp", type: "Migration Camp", image: wildebeestMigration, rating: 5, amenities: ["River views", "Luxury tents", "Prime migration location"] },
        meals: "Lunch, Dinner",
        activities: ["Flight to Kogatende", "Afternoon Mara River viewing", "Camp arrival"]
      },
      {
        day: 2,
        title: "Full Day Game Drive in Mara River",
        description: "Entire day at the Mara River observing crossing attempts and predator activity.",
        accommodation: { name: "Kontiki Kogatende Camp", type: "Migration Camp", image: wildebeestMigration, rating: 5, amenities: ["River views", "Luxury tents", "Prime migration location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Mara River", "Crossing observations", "Predator tracking"]
      },
      {
        day: 3,
        title: "Full Day Game Drive in Mara River",
        description: "Second full day at the Mara River maximizing your chances of witnessing crossings.",
        accommodation: { name: "Kontiki Kogatende Camp", type: "Migration Camp", image: wildebeestMigration, rating: 5, amenities: ["River views", "Luxury tents", "Prime migration location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day migration viewing", "River crossings", "Photography"]
      },
      {
        day: 4,
        title: "Central Serengeti",
        description: "Travel to Central Serengeti for game viewing in the Seronera region.",
        accommodation: { name: "Into Wild Africa Luxury Safari Camp Serengeti", type: "Luxury Camp", image: safariLions, rating: 5, amenities: ["Luxury tents", "Fine dining", "Central location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Central", "Afternoon game drive", "Kopje exploration"]
      },
      {
        day: 5,
        title: "Central Serengeti to Ngorongoro",
        description: "Morning Central Serengeti game drive before traveling to Ngorongoro area.",
        accommodation: { name: "Farm of Dreams Lodge", type: "Farm Lodge", image: ngorongoroCrater, rating: 4, amenities: ["Farm setting", "Restaurant", "Gardens"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transfer to Karatu", "Farm relaxation"]
      },
      {
        day: 6,
        title: "From Ngorongoro to Tarangire",
        description: "Descend into Ngorongoro Crater before continuing to Tarangire National Park.",
        accommodation: { name: "Tarangire Simba Lodge", type: "Safari Lodge", image: tarangireElephants, rating: 4, amenities: ["Pool", "Restaurant", "Park views"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater game drive", "Transfer to Tarangire", "Lodge arrival"]
      },
      {
        day: 7,
        title: "Tarangire to Arusha/Airport",
        description: "Final morning game drive in Tarangire before returning to Arusha.",
        accommodation: { name: "End of safari", type: "N/A", image: tarangireElephants, rating: 0, amenities: [] },
        meals: "Breakfast, Lunch",
        activities: ["Morning Tarangire", "Return to Arusha", "Departure"]
      }
    ],
    included: ["Flight to Kogatende", "All park fees", "Migration expert guide", "Luxury accommodation", "All meals", "Premium vehicle", "Water"],
    excluded: ["International flights", "Insurance", "Visas", "Alcoholic drinks", "Tips", "Personal expenses"],
    accommodation: "Luxury Migration Camps & Lodges",
    meals: "Full Board Premium",
    bestTime: "July to October (Mara River crossings)",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },

  // ========== 8-DAY SAFARIS ==========
  {
    id: "8-day-tracks-in-dust",
    title: "8-DAY TANZANIA SAFARI – TRACKS IN THE DUST",
    duration: 8,
    image: safariLions,
    images: [safariLions, safariGiraffes, ngorongoroCrater, wildebeestMigration, tarangireElephants],
    price: "From $5,200 per person",
    destinations: ["Lake Manyara", "Lake Natron", "Northern Serengeti", "Central Serengeti", "Ngorongoro", "Tarangire"],
    description: "Adventurous safari including the remote Lake Natron region. Experience diverse landscapes from soda lakes to the Serengeti plains.",
    highlights: [
      "Lake Natron adventure",
      "Northern Serengeti",
      "Diverse ecosystems",
      "Flamingo colonies",
      "Comprehensive circuit"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrive and transfer to your lodge. Rest and prepare for your extended safari adventure.",
        accommodation: { name: "Mtoni River Lodge", type: "River Lodge", image: safariGiraffes, rating: 4, amenities: ["River views", "Restaurant", "Gardens"] },
        meals: "Dinner",
        activities: ["Airport transfer", "Safari briefing", "Lodge relaxation"]
      },
      {
        day: 2,
        title: "Arusha to Lake Manyara National Park",
        description: "Drive to Lake Manyara for game viewing in this diverse park.",
        accommodation: { name: "Mawe Mawe Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Restaurant", "Bar", "Scenic views"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lake Manyara game drive", "Bird watching", "Tree lion search"]
      },
      {
        day: 3,
        title: "Lake Natron",
        description: "Journey to the remote Lake Natron, home to millions of flamingos and dramatic landscapes.",
        accommodation: { name: "Africa Safari Lake Natron Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Lake views", "Restaurant", "Swimming pool"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lake Natron exploration", "Flamingo viewing", "Waterfall hike optional"]
      },
      {
        day: 4,
        title: "Lake Natron to Northern Serengeti National Park",
        description: "Travel to Northern Serengeti via scenic route. Arrive at your camp for migration viewing.",
        accommodation: { name: "Intimate Camp Seronera", type: "Tented Camp", image: wildebeestMigration, rating: 4, amenities: ["Comfortable tents", "Dining area", "Bush setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Scenic drive", "Northern Serengeti arrival", "Evening game drive"]
      },
      {
        day: 5,
        title: "Lake Natron to Northern Serengeti National Park",
        description: "Full day exploring Northern Serengeti and Mara River region.",
        accommodation: { name: "Intimate Camp Seronera", type: "Tented Camp", image: wildebeestMigration, rating: 4, amenities: ["Comfortable tents", "Dining area", "Bush setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Northern Serengeti", "Mara River viewing", "Wildlife tracking"]
      },
      {
        day: 6,
        title: "Central Serengeti National Park",
        description: "Travel to Central Serengeti for game viewing in the Seronera region.",
        accommodation: { name: "Embalakai Serengeti Camp", type: "Tented Camp", image: safariLions, rating: 4, amenities: ["Comfortable tents", "Restaurant", "Central location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Central Serengeti game drive", "Kopje exploration", "Predator tracking"]
      },
      {
        day: 7,
        title: "Serengeti to Ngorongoro Crater",
        description: "Morning Serengeti drive before traveling to Ngorongoro Conservation Area.",
        accommodation: { name: "Eileen's Trees Inn", type: "Country Inn", image: ngorongoroCrater, rating: 4, amenities: ["Garden setting", "Restaurant", "Comfortable rooms"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transfer to Karatu", "Lodge relaxation"]
      },
      {
        day: 8,
        title: "Tarangire National Park to Arusha",
        description: "Descend into Ngorongoro Crater before visiting Tarangire and returning to Arusha.",
        accommodation: { name: "End of safari", type: "N/A", image: ngorongoroCrater, rating: 0, amenities: [] },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Tarangire visit", "Return to Arusha"]
      }
    ],
    included: ["All park fees", "Professional guide", "4x4 vehicle", "Accommodation", "All meals", "Water", "Lake Natron visit"],
    excluded: ["Flights", "Insurance", "Visas", "Tips", "Alcoholic drinks", "Personal expenses"],
    accommodation: "Lodges & Tented Camps",
    meals: "Full Board",
    bestTime: "Year-round, July-October for migration",
    fitnessLevel: "Moderate (Lake Natron adventure)",
    groupSize: "Private or small group"
  },
  {
    id: "8-day-ultimate-experience",
    title: "8-DAY TANZANIA SAFARI – THE ULTIMATE EXPERIENCE",
    duration: 8,
    image: wildebeestMigration,
    images: [wildebeestMigration, safariLions, tarangireElephants, ngorongoroCrater, safariGiraffes],
    price: "From $5,800 per person",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro", "Lake Manyara"],
    description: "The ultimate Tanzania safari experience with extended time in each park, luxury accommodations, and comprehensive wildlife viewing.",
    highlights: [
      "Extended park time",
      "Luxury accommodations",
      "Two full Serengeti days",
      "All major parks",
      "Comprehensive wildlife"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrive and transfer to your lodge in Arusha. Welcome and safari briefing.",
        accommodation: { name: "Arusha Planet Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Garden", "Restaurant", "Comfortable rooms"] },
        meals: "Dinner",
        activities: ["VIP transfer", "Safari briefing", "Lodge relaxation"]
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description: "Full day exploring Tarangire National Park with its elephant herds and baobabs.",
        accommodation: { name: "Farm of Dreams Lodge", type: "Farm Lodge", image: tarangireElephants, rating: 4, amenities: ["Farm setting", "Restaurant", "Pool", "Gardens"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Wildlife photography"]
      },
      {
        day: 3,
        title: "Tarangire to Serengeti",
        description: "Journey to the Serengeti. Arrive at your luxury bush camp.",
        accommodation: { name: "Tanzania Bush Camps - Central Serengeti", type: "Bush Camp", image: safariLions, rating: 5, amenities: ["Luxury tents", "Fine dining", "Premium location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Afternoon game drive", "Luxury camp"]
      },
      {
        day: 4,
        title: "Full game drive in Serengeti",
        description: "Complete day exploring the Serengeti with morning and afternoon game drives.",
        accommodation: { name: "Tanzania Bush Camps - Central Serengeti", type: "Bush Camp", image: safariLions, rating: 5, amenities: ["Luxury tents", "Fine dining", "Premium location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Bush lunch"]
      },
      {
        day: 5,
        title: "Serengeti to Ngorongoro",
        description: "Morning Serengeti game drive before traveling to Ngorongoro area.",
        accommodation: { name: "Ang'ata Ngorongoro Camp", type: "Tented Camp", image: ngorongoroCrater, rating: 4, amenities: ["Crater views", "Restaurant", "Comfortable tents"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transfer to Ngorongoro", "Crater rim views"]
      },
      {
        day: 6,
        title: "Ngorongoro Crater to Karatu",
        description: "Descend into Ngorongoro Crater for extensive game viewing.",
        accommodation: { name: "Farm of Dreams Lodge", type: "Farm Lodge", image: ngorongoroCrater, rating: 4, amenities: ["Farm setting", "Restaurant", "Pool", "Gardens"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full crater day", "Big Five viewing", "Picnic lunch"]
      },
      {
        day: 7,
        title: "Karatu to Lake Manyara",
        description: "Visit Lake Manyara National Park for game viewing.",
        accommodation: { name: "Arusha Planet Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Garden", "Restaurant", "Comfortable rooms"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lake Manyara game drive", "Bird watching", "Return to Arusha"]
      },
      {
        day: 8,
        title: "Transfer to Airport",
        description: "Leisure morning before airport transfer for your departure.",
        accommodation: { name: "End of safari", type: "N/A", image: safariGiraffes, rating: 0, amenities: [] },
        meals: "Breakfast",
        activities: ["Morning leisure", "Airport transfer", "Departure"]
      }
    ],
    included: ["All park fees", "Professional guide", "Luxury accommodation", "All meals", "4x4 vehicle", "Water", "Transfers"],
    excluded: ["Flights", "Insurance", "Visas", "Alcoholic drinks", "Tips", "Personal expenses"],
    accommodation: "Luxury Camps & Farm Lodges",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },

  // ========== 9-DAY SAFARIS ==========
  {
    id: "9-day-essence-mara-river",
    title: "9-DAY TANZANIA SAFARI – ESSENCE OF MARA RIVER",
    duration: 9,
    image: wildebeestMigration,
    images: [wildebeestMigration, safariLions, tarangireElephants, ngorongoroCrater, safariGiraffes],
    price: "From $6,500 per person",
    destinations: ["Arusha NP", "Tarangire", "Lake Manyara", "Lake Natron", "Northern Serengeti", "Central Serengeti", "Ngorongoro"],
    description: "Comprehensive safari including Arusha National Park, Lake Natron, and extended Mara River viewing for migration enthusiasts.",
    highlights: [
      "Arusha NP walking safari",
      "Lake Natron flamingos",
      "3 days Mara River region",
      "Complete northern circuit",
      "Migration focus"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrive and transfer to your lodge in Arusha. Rest and safari orientation.",
        accommodation: { name: "Arusha Planet Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Garden", "Restaurant", "Comfortable rooms"] },
        meals: "Dinner",
        activities: ["VIP transfer", "Safari briefing", "Relaxation"]
      },
      {
        day: 2,
        title: "Arusha National Park",
        description: "Explore Arusha National Park with walking safari and canoe options.",
        accommodation: { name: "Arusha Planet Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Garden", "Restaurant", "Comfortable rooms"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Arusha NP game drive", "Walking safari", "Momella Lakes"]
      },
      {
        day: 3,
        title: "Tarangire National Park",
        description: "Full day in Tarangire National Park famous for elephants and baobabs.",
        accommodation: { name: "Tarangire Simba Lodge", type: "Safari Lodge", image: tarangireElephants, rating: 4, amenities: ["Pool", "Restaurant", "Park views"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant herds", "Photography"]
      },
      {
        day: 4,
        title: "Lake Manyara National Park",
        description: "Explore Lake Manyara before continuing to Lake Natron.",
        accommodation: { name: "Africa Safari Lake Natron Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Lake views", "Restaurant", "Pool"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lake Manyara morning", "Drive to Lake Natron", "Flamingo viewing"]
      },
      {
        day: 5,
        title: "Serengeti National Park",
        description: "Travel to Northern Serengeti's Mara River region for migration viewing.",
        accommodation: { name: "Kontiki Kogatende Camp", type: "Migration Camp", image: wildebeestMigration, rating: 5, amenities: ["River views", "Luxury tents", "Prime location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Afternoon Mara River", "Migration positioning"]
      },
      {
        day: 6,
        title: "Serengeti National Park",
        description: "Full day at Mara River observing crossings and predator activity.",
        accommodation: { name: "Kontiki Kogatende Camp", type: "Migration Camp", image: wildebeestMigration, rating: 5, amenities: ["River views", "Luxury tents", "Prime location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Mara River", "Crossing observations", "Wildlife photography"]
      },
      {
        day: 7,
        title: "Central Serengeti National Park",
        description: "Travel to Central Serengeti for game viewing in the Seronera region.",
        accommodation: { name: "Into Wild Africa Luxury Safari Camp Serengeti", type: "Luxury Camp", image: safariLions, rating: 5, amenities: ["Luxury tents", "Fine dining", "Central location"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Central", "Afternoon game drive", "Kopje exploration"]
      },
      {
        day: 8,
        title: "Ngorongoro Crater",
        description: "Descend into Ngorongoro Crater for comprehensive game viewing.",
        accommodation: { name: "Baghayo Garden Suites", type: "Garden Lodge", image: ngorongoroCrater, rating: 4, amenities: ["Gardens", "Restaurant", "Peaceful setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full crater day", "Big Five viewing", "Picnic lunch"]
      },
      {
        day: 9,
        title: "Transfer to the airport or lodge",
        description: "Leisure morning before airport transfer or optional extension.",
        accommodation: { name: "End of safari", type: "N/A", image: ngorongoroCrater, rating: 0, amenities: [] },
        meals: "Breakfast",
        activities: ["Morning leisure", "Airport transfer", "Departure"]
      }
    ],
    included: ["All park fees", "Professional guide", "Luxury accommodation", "All meals", "4x4 vehicle", "Water", "Lake Natron visit"],
    excluded: ["Flights", "Insurance", "Visas", "Tips", "Alcoholic drinks", "Personal expenses"],
    accommodation: "Luxury Camps & Lodges",
    meals: "Full Board",
    bestTime: "July-October for Mara River crossings",
    fitnessLevel: "Moderate",
    groupSize: "Private safari"
  },
  {
    id: "9-day-land-of-giants",
    title: "9-DAY TANZANIA SAFARI – LAND OF GIANTS",
    duration: 9,
    image: tarangireElephants,
    images: [tarangireElephants, safariLions, ngorongoroCrater, safariGiraffes, wildebeestMigration],
    price: "From $6,200 per person",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti", "Lake Manyara", "Zanzibar"],
    description: "Complete safari experience combined with Zanzibar beach extension. Wildlife adventures followed by tropical island relaxation.",
    highlights: [
      "Safari & beach combo",
      "All major parks",
      "Zanzibar extension",
      "Sunset cruise",
      "Snorkeling & dolphins"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Transfer to Arusha",
        description: "Arrive and transfer to your lodge in Arusha for rest and briefing.",
        accommodation: { name: "Arusha Planet Lodge", type: "Lodge", image: safariGiraffes, rating: 4, amenities: ["Garden", "Restaurant", "Comfortable rooms"] },
        meals: "Dinner",
        activities: ["Airport transfer", "Safari briefing", "Relaxation"]
      },
      {
        day: 2,
        title: "Arusha to Tarangire National Park",
        description: "Full day exploring Tarangire National Park with its elephant populations.",
        accommodation: { name: "Farm of Dreams Lodge", type: "Farm Lodge", image: tarangireElephants, rating: 4, amenities: ["Farm setting", "Restaurant", "Gardens"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day Tarangire", "Elephant watching", "Photography"]
      },
      {
        day: 3,
        title: "Ngorongoro Crater",
        description: "Descend into Ngorongoro Crater for extensive wildlife viewing.",
        accommodation: { name: "Serengeti Classic View Camp", type: "Camp", image: ngorongoroCrater, rating: 4, amenities: ["Comfortable tents", "Dining area", "Bush setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Crater game drive", "Big Five viewing", "Continue to Serengeti"]
      },
      {
        day: 4,
        title: "Full Game drive in Serengeti",
        description: "Complete day exploring the Serengeti with extended game drives.",
        accommodation: { name: "Serengeti Classic View Camp", type: "Camp", image: safariLions, rating: 4, amenities: ["Comfortable tents", "Dining area", "Bush setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Full day game drives", "Wildlife tracking", "Predator viewing"]
      },
      {
        day: 5,
        title: "Drive in Serengeti to Karatu",
        description: "Morning Serengeti game drive before returning to Karatu area.",
        accommodation: { name: "Farm of Dreams Lodge", type: "Farm Lodge", image: ngorongoroCrater, rating: 4, amenities: ["Farm setting", "Restaurant", "Gardens"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transfer to Karatu", "Farm relaxation"]
      },
      {
        day: 6,
        title: "Walking safari in Lake Manyara NP then Fly to Zanzibar Island",
        description: "Morning walking safari at Lake Manyara before flying to Zanzibar for beach extension.",
        accommodation: { name: "Marafiki Bungalows", type: "Beach Bungalows", image: safariGiraffes, rating: 4, amenities: ["Beach front", "Restaurant", "Bar", "Water sports"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Walking safari", "Flight to Zanzibar", "Beach arrival"]
      },
      {
        day: 7,
        title: "Morning Leisure / Sunset Cruise",
        description: "Relaxation day with optional activities and sunset dhow cruise.",
        accommodation: { name: "Marafiki Bungalows", type: "Beach Bungalows", image: safariGiraffes, rating: 4, amenities: ["Beach front", "Restaurant", "Bar", "Water sports"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Beach relaxation", "Sunset cruise", "Swimming"]
      },
      {
        day: 8,
        title: "Snorkeling and Dolphin Tour",
        description: "Full day marine activities including snorkeling and dolphin watching.",
        accommodation: { name: "Marafiki Bungalows", type: "Beach Bungalows", image: safariGiraffes, rating: 4, amenities: ["Beach front", "Restaurant", "Bar", "Water sports"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Snorkeling", "Dolphin tour", "Beach time"]
      },
      {
        day: 9,
        title: "Morning Leisure / Depart",
        description: "Final morning at leisure before airport transfer for departure.",
        accommodation: { name: "End of safari", type: "N/A", image: safariGiraffes, rating: 0, amenities: [] },
        meals: "Breakfast",
        activities: ["Morning beach time", "Airport transfer", "Departure"]
      }
    ],
    included: ["All park fees", "Flight to Zanzibar", "Professional guide", "All accommodation", "All meals", "Sunset cruise", "Snorkeling tour", "Water"],
    excluded: ["International flights", "Insurance", "Visas", "Tips", "Alcoholic drinks", "Personal expenses", "Optional Zanzibar activities"],
    accommodation: "Lodges, Camps & Beach Bungalows",
    meals: "Full Board",
    bestTime: "Year-round",
    fitnessLevel: "Easy",
    groupSize: "Private safari"
  },

  // ========== 10-DAY SAFARIS ==========
  {
    id: "10-day-kilimanjaro-big-five",
    title: "10-DAY KILIMANJARO & BIG FIVE SAFARI TANZANIA",
    duration: 10,
    image: tarangireElephants,
    images: [tarangireElephants, safariLions, ngorongoroCrater, wildebeestMigration, safariGiraffes],
    price: "From $3,800 per person",
    destinations: ["Mount Kilimanjaro", "Serengeti National Park", "Ngorongoro Conservation Area"],
    description: "Combine Kilimanjaro trekking with wildlife safari. Summit Africa's highest peak via Machame Route before exploring Tanzania's premier wildlife parks.",
    highlights: [
      "Kilimanjaro summit attempt",
      "Machame Route trek",
      "Big Five safari",
      "Serengeti & Ngorongoro",
      "Ultimate adventure combo"
    ],
    itinerary: [
      {
        day: 1,
        title: "Moshi - Machame Gate – Machame Camp",
        description: "Begin Kilimanjaro trek via Machame Route. Hike through rainforest to Machame Camp (3,000m).",
        accommodation: { name: "Public Mountain Camp", type: "Mountain Camping", image: safariGiraffes, rating: 3, amenities: ["Tents", "Basic facilities", "Mountain setting"] },
        meals: "Lunch, Dinner",
        activities: ["Machame Gate registration", "Rainforest trek", "Altitude acclimatization"]
      },
      {
        day: 2,
        title: "Machame Camp to Shira Camp",
        description: "Trek through moorland to Shira Camp (3,840m) with spectacular views.",
        accommodation: { name: "Public Mountain Camp", type: "Mountain Camping", image: safariGiraffes, rating: 3, amenities: ["Tents", "Basic facilities", "Mountain setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Moorland trek", "Altitude gain", "Mountain views"]
      },
      {
        day: 3,
        title: "Shira Camp to Barranco Valley",
        description: "Trek to Lava Tower (4,600m) for acclimatization before descending to Barranco Camp (3,960m).",
        accommodation: { name: "Public Mountain Camp", type: "Mountain Camping", image: safariGiraffes, rating: 3, amenities: ["Tents", "Basic facilities", "Mountain setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Lava Tower acclimatization", "Barranco Wall viewing", "Camp setup"]
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        description: "Climb the famous Barranco Wall and trek to Karanga Camp (3,995m).",
        accommodation: { name: "Public Mountain Camp", type: "Mountain Camping", image: safariGiraffes, rating: 3, amenities: ["Tents", "Basic facilities", "Mountain setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Barranco Wall climb", "Ridge trek", "Rest and acclimatization"]
      },
      {
        day: 5,
        title: "Karanga Camp To Barafu Base Camp",
        description: "Short trek to Barafu Camp (4,673m). Rest and prepare for summit attempt.",
        accommodation: { name: "Public Mountain Camp", type: "Mountain Camping", image: safariGiraffes, rating: 3, amenities: ["Tents", "Basic facilities", "Mountain setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Trek to base camp", "Early dinner", "Summit preparation"]
      },
      {
        day: 6,
        title: "Barafu Camp To Uhuru Peak To Mweka Camp",
        description: "Midnight summit push to Uhuru Peak (5,895m) - roof of Africa! Descend to Mweka Camp (3,100m).",
        accommodation: { name: "Public Mountain Camp", type: "Mountain Camping", image: safariGiraffes, rating: 3, amenities: ["Tents", "Basic facilities", "Mountain setting"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Summit attempt", "Uhuru Peak", "Descent to Mweka"]
      },
      {
        day: 7,
        title: "Mweka Camp To Mweka Gate To Moshi",
        description: "Final descent through rainforest to Mweka Gate. Receive summit certificates and transfer to Moshi hotel.",
        accommodation: { name: "Public Hotel", type: "Basic Hotel", image: safariGiraffes, rating: 3, amenities: ["Hot shower", "Restaurant", "Rest facilities"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Forest descent", "Certificate ceremony", "Celebration dinner"]
      },
      {
        day: 8,
        title: "Moshi To Serengeti National Park",
        description: "Drive to Serengeti National Park. Begin your wildlife safari after mountain adventure.",
        accommodation: { name: "Public Campsite", type: "Camping", image: safariLions, rating: 3, amenities: ["Basic facilities", "Bush camping"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Transit to Serengeti", "Afternoon game drive", "Bush camping"]
      },
      {
        day: 9,
        title: "Serengeti National Park and Ngorongoro Conservation Area",
        description: "Morning Serengeti game drive before traveling to Ngorongoro.",
        accommodation: { name: "Public Campsite", type: "Camping", image: ngorongoroCrater, rating: 3, amenities: ["Basic facilities", "Crater rim camping"] },
        meals: "Breakfast, Lunch, Dinner",
        activities: ["Morning Serengeti", "Transit to Ngorongoro", "Crater rim camping"]
      },
      {
        day: 10,
        title: "Ngorongoro Crater To Moshi",
        description: "Descend into Ngorongoro Crater for final game drive before returning to Moshi.",
        accommodation: { name: "End of safari", type: "N/A", image: ngorongoroCrater, rating: 0, amenities: [] },
        meals: "Breakfast, Lunch",
        activities: ["Crater game drive", "Big Five viewing", "Return to Moshi"]
      }
    ],
    included: ["Kilimanjaro climbing permits", "Mountain guides and porters", "All camping equipment for mountain", "All park fees", "Safari guide", "Safari vehicle", "All meals", "Water"],
    excluded: ["Flights", "Insurance", "Visas", "Tips for guides/porters", "Personal climbing gear", "Sleeping bags", "Personal expenses"],
    accommodation: "Mountain Camps & Public Campsites",
    meals: "Full Board",
    bestTime: "January-March & June-October (best climbing seasons)",
    fitnessLevel: "Challenging (requires good fitness for Kilimanjaro)",
    groupSize: "Small group"
  }

];
