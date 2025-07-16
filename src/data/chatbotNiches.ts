
export interface ChatbotNiche {
  id: string;
  name: string;
  icon: string;
  description: string;
  keyBenefits: string[];
  useCases: string[];
  exampleInteractions: string[];
  features: string[];
  ctaText: string;
}

export interface NicheCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  niches: ChatbotNiche[];
}

export const chatbotNiches: NicheCategory[] = [
  {
    id: "business-professional",
    name: "Business & Professional Services",
    icon: "🏢",
    description: "Automate client interactions and streamline professional services",
    niches: [
      {
        id: "real-estate",
        name: "Real Estate Agents",
        icon: "🏡",
        description: "Qualify leads, schedule viewings, and provide property information 24/7",
        keyBenefits: ["Lead Qualification", "Property Matching", "Viewing Scheduler", "Market Updates"],
        useCases: ["Property search assistance", "Lead capture from website", "Appointment booking", "Market analysis requests"],
        exampleInteractions: [
          "User: 'I'm looking for a 3-bedroom house under $400k'",
          "Bot: 'Great! I found 12 properties matching your criteria. Would you like to see them?'"
        ],
        features: ["CRM Integration", "Property Database Sync", "Lead Scoring", "Automated Follow-ups"],
        ctaText: "Get Real Estate Bot"
      },
      {
        id: "law-firms",
        name: "Law Firms",
        icon: "⚖️",
        description: "Screen potential clients and provide initial case information",
        keyBenefits: ["Client Screening", "Case Information", "Appointment Booking", "FAQ Responses"],
        useCases: ["Initial consultations", "Case type identification", "Document collection", "Fee estimates"],
        exampleInteractions: [
          "User: 'I need help with a personal injury case'",
          "Bot: 'I can help connect you with our personal injury team. When did the incident occur?'"
        ],
        features: ["Confidential Screening", "Calendar Integration", "Document Upload", "Case Routing"],
        ctaText: "Get Legal Bot"
      },
      {
        id: "insurance",
        name: "Insurance Agencies",
        icon: "🛡️",
        description: "Generate quotes, explain policies, and handle claims inquiries",
        keyBenefits: ["Quote Generation", "Policy Explanation", "Claims Processing", "Coverage Comparison"],
        useCases: ["Insurance quotes", "Policy renewals", "Claims status", "Coverage questions"],
        exampleInteractions: [
          "User: 'I need car insurance for a new vehicle'",
          "Bot: 'I'll help you get a quote. What's your vehicle's make, model, and year?'"
        ],
        features: ["Quote Calculator", "Policy Database", "Claims Tracking", "Multi-carrier Comparison"],
        ctaText: "Get Insurance Bot"
      },
      {
        id: "financial-advisors",
        name: "Financial Advisors",
        icon: "💰",
        description: "Qualify prospects and provide investment guidance",
        keyBenefits: ["Prospect Qualification", "Investment Screening", "Appointment Setting", "Portfolio Reviews"],
        useCases: ["Risk assessment", "Investment goals", "Retirement planning", "Portfolio analysis"],
        exampleInteractions: [
          "User: 'I want to start investing for retirement'",
          "Bot: 'Excellent! What's your target retirement age and current savings amount?'"
        ],
        features: ["Risk Profiling", "Goal Tracking", "Market Updates", "Compliance Monitoring"],
        ctaText: "Get Finance Bot"
      },
      {
        id: "consultants",
        name: "Consultants",
        icon: "📊",
        description: "Qualify leads and schedule discovery calls",
        keyBenefits: ["Lead Qualification", "Service Explanation", "Discovery Calls", "Project Scoping"],
        useCases: ["Service inquiries", "Project requirements", "Capability matching", "Proposal requests"],
        exampleInteractions: [
          "User: 'I need help with digital transformation'",
          "Bot: 'I can connect you with our digital transformation experts. What's your company size?'"
        ],
        features: ["Service Catalog", "Capability Matching", "Project Estimator", "Resource Planning"],
        ctaText: "Get Consulting Bot"
      }
    ]
  },
  {
    id: "ecommerce-retail",
    name: "E-commerce & Retail",
    icon: "🛒",
    description: "Boost sales and provide personalized shopping experiences",
    niches: [
      {
        id: "online-stores",
        name: "Online Stores",
        icon: "🛍️",
        description: "Guide customers through purchases and handle support queries",
        keyBenefits: ["Product Recommendations", "Order Tracking", "Support Tickets", "Upselling"],
        useCases: ["Product discovery", "Size/compatibility help", "Order status", "Return processing"],
        exampleInteractions: [
          "User: 'I'm looking for running shoes'",
          "Bot: 'Great! What's your preferred running surface and foot type?'"
        ],
        features: ["Product Catalog Integration", "Inventory Sync", "Order Management", "Review Collection"],
        ctaText: "Get E-commerce Bot"
      },
      {
        id: "fashion-brands",
        name: "Fashion Brands",
        icon: "👗",
        description: "Provide style advice and size recommendations",
        keyBenefits: ["Style Consultation", "Size Guide", "Trend Updates", "Personal Shopping"],
        useCases: ["Outfit suggestions", "Size matching", "Style preferences", "Seasonal collections"],
        exampleInteractions: [
          "User: 'What should I wear to a business casual event?'",
          "Bot: 'Let me suggest some business casual outfits from our latest collection!'"
        ],
        features: ["Style Profiling", "Size Predictor", "Trend Analytics", "Visual Search"],
        ctaText: "Get Fashion Bot"
      },
      {
        id: "electronics",
        name: "Electronics",
        icon: "📱",
        description: "Help customers find compatible products and provide tech support",
        keyBenefits: ["Compatibility Check", "Tech Specs", "Troubleshooting", "Warranty Info"],
        useCases: ["Product compatibility", "Technical specifications", "Setup assistance", "Warranty claims"],
        exampleInteractions: [
          "User: 'Will this cable work with my iPhone 15?'",
          "Bot: 'Yes! This USB-C cable is fully compatible with iPhone 15. Would you like to add it to cart?'"
        ],
        features: ["Compatibility Database", "Spec Comparison", "Troubleshooting Guide", "Warranty Tracker"],
        ctaText: "Get Electronics Bot"
      },
      {
        id: "cosmetics",
        name: "Cosmetics",
        icon: "💄",
        description: "Provide beauty advice and product recommendations",
        keyBenefits: ["Shade Matching", "Skin Analysis", "Beauty Tips", "Product Recommendations"],
        useCases: ["Skin tone matching", "Product selection", "Beauty routines", "Ingredient information"],
        exampleInteractions: [
          "User: 'I have oily skin, what foundation should I use?'",
          "Bot: 'For oily skin, I recommend our matte finish foundations. What's your skin tone?'"
        ],
        features: ["Shade Matcher", "Skin Analyzer", "Ingredient Scanner", "Beauty Quiz"],
        ctaText: "Get Beauty Bot"
      },
      {
        id: "home-decor",
        name: "Home Decor",
        icon: "🏠",
        description: "Help customers design spaces and find matching items",
        keyBenefits: ["Style Matching", "Room Planning", "Color Coordination", "Space Optimization"],
        useCases: ["Room design", "Color matching", "Furniture sizing", "Style consultation"],
        exampleInteractions: [
          "User: 'I need furniture for a small living room'",
          "Bot: 'I can help you maximize your space! What are the room dimensions?'"
        ],
        features: ["Room Planner", "Style Guide", "Color Palette", "Space Calculator"],
        ctaText: "Get Home Decor Bot"
      }
    ]
  },
  {
    id: "healthcare-wellness",
    name: "Healthcare & Wellness",
    icon: "🏥",
    description: "Streamline patient care and appointment management",
    niches: [
      {
        id: "medical-clinics",
        name: "Medical Clinics",
        icon: "🩺",
        description: "Handle appointment booking and provide basic health information",
        keyBenefits: ["Appointment Booking", "Symptom Assessment", "Insurance Verification", "Patient Education"],
        useCases: ["Appointment scheduling", "Symptom checking", "Prescription refills", "Test results"],
        exampleInteractions: [
          "User: 'I need to book an appointment for next week'",
          "Bot: 'I can help you schedule. What type of appointment do you need?'"
        ],
        features: ["EHR Integration", "Insurance Checker", "Symptom Triage", "Appointment Reminders"],
        ctaText: "Get Medical Bot"
      },
      {
        id: "dentists",
        name: "Dentists",
        icon: "🦷",
        description: "Schedule cleanings and provide dental care information",
        keyBenefits: ["Cleaning Reminders", "Treatment Info", "Emergency Triage", "Insurance Coverage"],
        useCases: ["Routine cleanings", "Emergency assessments", "Treatment explanations", "Insurance questions"],
        exampleInteractions: [
          "User: 'I have tooth pain, is this an emergency?'",
          "Bot: 'I'll help assess your situation. Can you describe the type and intensity of pain?'"
        ],
        features: ["Treatment Database", "Emergency Protocols", "Insurance Navigator", "Care Instructions"],
        ctaText: "Get Dental Bot"
      },
      {
        id: "therapists",
        name: "Therapists",
        icon: "🧠",
        description: "Screen clients and provide mental health resources",
        keyBenefits: ["Client Screening", "Resource Sharing", "Crisis Support", "Appointment Scheduling"],
        useCases: ["Initial assessments", "Resource recommendations", "Crisis intervention", "Session booking"],
        exampleInteractions: [
          "User: 'I'm struggling with anxiety'",
          "Bot: 'I understand, and I'm here to help connect you with support. Are you in immediate crisis?'"
        ],
        features: ["Mental Health Screening", "Crisis Protocols", "Resource Library", "Therapist Matching"],
        ctaText: "Get Therapy Bot"
      },
      {
        id: "veterinary",
        name: "Veterinary Clinics",
        icon: "🐕",
        description: "Handle pet health inquiries and appointment booking",
        keyBenefits: ["Pet Health Assessment", "Appointment Booking", "Vaccination Reminders", "Emergency Triage"],
        useCases: ["Health concerns", "Vaccination schedules", "Emergency situations", "Preventive care"],
        exampleInteractions: [
          "User: 'My dog won't eat and seems lethargic'",
          "Bot: 'These symptoms need attention. How long has your dog been showing these signs?'"
        ],
        features: ["Pet Health Database", "Vaccination Tracker", "Emergency Guidelines", "Species-Specific Care"],
        ctaText: "Get Pet Care Bot"
      }
    ]
  },
  {
    id: "hospitality-local",
    name: "Hospitality & Local Services",
    icon: "🏨",
    description: "Enhance customer experience and streamline bookings",
    niches: [
      {
        id: "restaurants",
        name: "Restaurants",
        icon: "🍽️",
        description: "Handle reservations, orders, and menu inquiries",
        keyBenefits: ["Reservation System", "Menu Information", "Order Taking", "Special Requests"],
        useCases: ["Table reservations", "Menu questions", "Dietary restrictions", "Takeout orders"],
        exampleInteractions: [
          "User: 'I'd like a table for 4 tonight at 7pm'",
          "Bot: 'I can check availability for you. Do you have any seating preferences?'"
        ],
        features: ["Reservation Manager", "Menu Database", "Allergy Alerts", "Wait Time Updates"],
        ctaText: "Get Restaurant Bot"
      },
      {
        id: "hotels",
        name: "Hotels / Airbnb Hosts",
        icon: "🛏️",
        description: "Manage bookings and provide guest assistance",
        keyBenefits: ["Booking Management", "Guest Services", "Local Recommendations", "Check-in/out"],
        useCases: ["Room availability", "Amenity information", "Local attractions", "Service requests"],
        exampleInteractions: [
          "User: 'What time is check-in and what amenities do you have?'",
          "Bot: 'Check-in is at 3 PM. We offer a pool, gym, spa, and complimentary breakfast!'"
        ],
        features: ["Booking System", "Amenity Guide", "Local Directory", "Concierge Services"],
        ctaText: "Get Hospitality Bot"
      },
      {
        id: "salons-spas",
        name: "Salons & Spas",
        icon: "💆",
        description: "Book appointments and suggest treatments",
        keyBenefits: ["Appointment Booking", "Service Recommendations", "Stylist Matching", "Package Deals"],
        useCases: ["Service bookings", "Treatment advice", "Stylist preferences", "Package options"],
        exampleInteractions: [
          "User: 'I need a haircut and color, who's available?'",
          "Bot: 'I can help you book with our color specialists. What's your preferred date and time?'"
        ],
        features: ["Booking Calendar", "Service Menu", "Stylist Profiles", "Treatment Advisor"],
        ctaText: "Get Salon Bot"
      },
      {
        id: "fitness",
        name: "Fitness Coaches / Gyms",
        icon: "💪",
        description: "Handle memberships and provide workout guidance",
        keyBenefits: ["Membership Sales", "Class Booking", "Workout Plans", "Progress Tracking"],
        useCases: ["Membership inquiries", "Class schedules", "Personal training", "Equipment guidance"],
        exampleInteractions: [
          "User: 'I want to start working out, what membership options do you have?'",
          "Bot: 'Great! We have several membership tiers. What are your fitness goals?'"
        ],
        features: ["Membership Portal", "Class Scheduler", "Workout Library", "Progress Tracker"],
        ctaText: "Get Fitness Bot"
      }
    ]
  },
  {
    id: "education-training",
    name: "Education & Training",
    icon: "🎓",
    description: "Support learning and streamline educational processes",
    niches: [
      {
        id: "online-courses",
        name: "Online Course Creators",
        icon: "📚",
        description: "Guide students through courses and answer questions",
        keyBenefits: ["Course Guidance", "Progress Tracking", "Q&A Support", "Assignment Help"],
        useCases: ["Course selection", "Learning paths", "Technical support", "Progress updates"],
        exampleInteractions: [
          "User: 'Which course should I take to learn web development?'",
          "Bot: 'Based on your background, I recommend starting with our HTML/CSS fundamentals course!'"
        ],
        features: ["Course Catalog", "Learning Paths", "Progress Analytics", "Study Reminders"],
        ctaText: "Get Education Bot"
      },
      {
        id: "tutors",
        name: "Tutors",
        icon: "👨‍🏫",
        description: "Schedule sessions and provide learning support",
        keyBenefits: ["Session Booking", "Subject Matching", "Progress Reports", "Resource Sharing"],
        useCases: ["Tutor matching", "Session scheduling", "Subject help", "Progress tracking"],
        exampleInteractions: [
          "User: 'I need help with calculus, when are you available?'",
          "Bot: 'I can connect you with our calculus specialists. What specific topics are challenging?'"
        ],
        features: ["Tutor Directory", "Subject Expertise", "Session Scheduler", "Learning Resources"],
        ctaText: "Get Tutoring Bot"
      }
    ]
  },
  {
    id: "trades-home-services",
    name: "Trades & Home Services",
    icon: "🏗️",
    description: "Schedule services and provide expert consultations",
    niches: [
      {
        id: "plumbers",
        name: "Plumbers",
        icon: "🔧",
        description: "Diagnose issues and schedule emergency repairs",
        keyBenefits: ["Issue Diagnosis", "Emergency Scheduling", "Cost Estimates", "Maintenance Tips"],
        useCases: ["Emergency repairs", "Installation quotes", "Maintenance advice", "Service scheduling"],
        exampleInteractions: [
          "User: 'My toilet is overflowing, can someone come today?'",
          "Bot: 'This sounds like an emergency. I can schedule our next available plumber within 2 hours.'"
        ],
        features: ["Emergency Dispatcher", "Issue Diagnostics", "Cost Calculator", "Maintenance Scheduler"],
        ctaText: "Get Plumbing Bot"
      },
      {
        id: "electricians",
        name: "Electricians",
        icon: "⚡",
        description: "Handle electrical consultations and safety assessments",
        keyBenefits: ["Safety Assessment", "Code Compliance", "Installation Quotes", "Emergency Response"],
        useCases: ["Electrical problems", "Installation planning", "Safety inspections", "Code questions"],
        exampleInteractions: [
          "User: 'My outlets stopped working in the kitchen'",
          "Bot: 'This could be a circuit issue. For safety, I recommend our emergency service. Are other areas affected?'"
        ],
        features: ["Safety Protocols", "Code Database", "Load Calculator", "Emergency Dispatch"],
        ctaText: "Get Electrical Bot"
      },
      {
        id: "hvac",
        name: "HVAC Services",
        icon: "🌡️",
        description: "Provide climate control solutions and maintenance scheduling",
        keyBenefits: ["System Diagnosis", "Maintenance Scheduling", "Energy Efficiency", "Emergency Repairs"],
        useCases: ["System problems", "Maintenance plans", "Energy audits", "Installation quotes"],
        exampleInteractions: [
          "User: 'My AC isn't cooling properly'",
          "Bot: 'Let me help diagnose the issue. When did you last change the filter and what's the thermostat reading?'"
        ],
        features: ["System Diagnostics", "Maintenance Tracker", "Energy Calculator", "Service Scheduler"],
        ctaText: "Get HVAC Bot"
      }
    ]
  },
  {
    id: "events-entertainment",
    name: "Events & Entertainment",
    icon: "🎟️",
    description: "Manage bookings and enhance event experiences",
    niches: [
      {
        id: "event-planners",
        name: "Event Planners",
        icon: "🎉",
        description: "Coordinate events and manage vendor relationships",
        keyBenefits: ["Event Coordination", "Vendor Management", "Timeline Planning", "Budget Tracking"],
        useCases: ["Event planning", "Vendor selection", "Timeline creation", "Budget management"],
        exampleInteractions: [
          "User: 'I need help planning a corporate event for 100 people'",
          "Bot: 'I'd love to help! What type of corporate event and what's your preferred date range?'"
        ],
        features: ["Event Templates", "Vendor Network", "Timeline Builder", "Budget Planner"],
        ctaText: "Get Event Bot"
      },
      {
        id: "photographers",
        name: "Photographers",
        icon: "📸",
        description: "Showcase portfolios and book photography sessions",
        keyBenefits: ["Portfolio Showcase", "Session Booking", "Package Selection", "Gallery Sharing"],
        useCases: ["Session booking", "Package information", "Portfolio viewing", "Availability checking"],
        exampleInteractions: [
          "User: 'I need a wedding photographer for next summer'",
          "Bot: 'Congratulations! I'd love to capture your special day. What's your wedding date and style preference?'"
        ],
        features: ["Portfolio Gallery", "Booking Calendar", "Package Builder", "Client Portal"],
        ctaText: "Get Photography Bot"
      }
    ]
  },
  {
    id: "technology-saas",
    name: "Technology & SaaS",
    icon: "🌐",
    description: "Provide technical support and product guidance",
    niches: [
      {
        id: "saas-tools",
        name: "SaaS Tools",
        icon: "💻",
        description: "Onboard users and provide product support",
        keyBenefits: ["User Onboarding", "Feature Guidance", "Troubleshooting", "Upgrade Assistance"],
        useCases: ["Product demos", "Feature explanations", "Technical support", "Billing questions"],
        exampleInteractions: [
          "User: 'How do I set up automated workflows?'",
          "Bot: 'I'll guide you through setting up workflows. Which trigger would you like to start with?'"
        ],
        features: ["Interactive Tutorials", "Feature Discovery", "Troubleshooting Guide", "Usage Analytics"],
        ctaText: "Get SaaS Bot"
      },
      {
        id: "web-dev-agencies",
        name: "Web Dev Agencies",
        icon: "🖥️",
        description: "Qualify projects and provide technical consultations",
        keyBenefits: ["Project Scoping", "Technology Matching", "Timeline Estimation", "Portfolio Showcase"],
        useCases: ["Project requirements", "Technology advice", "Cost estimates", "Portfolio reviews"],
        exampleInteractions: [
          "User: 'I need a website for my restaurant'",
          "Bot: 'Great! I can help scope your project. Do you need online ordering, reservations, or just information?'"
        ],
        features: ["Project Estimator", "Technology Advisor", "Portfolio Browser", "Requirement Collector"],
        ctaText: "Get Web Dev Bot"
      }
    ]
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: "🚗",
    description: "Streamline sales and service processes",
    niches: [
      {
        id: "car-dealerships",
        name: "Car Dealerships",
        icon: "🚙",
        description: "Help customers find vehicles and schedule test drives",
        keyBenefits: ["Vehicle Matching", "Test Drive Booking", "Finance Options", "Trade-in Valuation"],
        useCases: ["Car shopping", "Financing questions", "Trade-in estimates", "Service appointments"],
        exampleInteractions: [
          "User: 'I'm looking for a family SUV under $40k'",
          "Bot: 'I can help you find the perfect family SUV! How many passengers do you need to seat?'"
        ],
        features: ["Inventory Search", "Finance Calculator", "Trade Estimator", "Test Drive Scheduler"],
        ctaText: "Get Auto Sales Bot"
      },
      {
        id: "auto-service",
        name: "Service Centers",
        icon: "🔧",
        description: "Schedule maintenance and diagnose vehicle issues",
        keyBenefits: ["Service Scheduling", "Issue Diagnosis", "Maintenance Reminders", "Cost Estimates"],
        useCases: ["Service appointments", "Problem diagnosis", "Maintenance planning", "Warranty questions"],
        exampleInteractions: [
          "User: 'My car is making a strange noise when I brake'",
          "Bot: 'Brake issues need immediate attention. I can schedule you for our next available brake inspection.'"
        ],
        features: ["Service Scheduler", "Diagnostic Guide", "Maintenance Tracker", "Parts Locator"],
        ctaText: "Get Service Bot"
      }
    ]
  }
];
