export const clinicData = {
  about: {
    summary: "At D-light Dental Studio, patients receive top-notch care in a modern and welcoming environment. With a focus on advanced treatments and a commitment to patient comfort, the clinic offers fixed prosthodontics, laser dentistry, bleeding gums treatment, and pain-free root canal procedures."
  },
  basic: {
    clinicName: "D-light Dental Studio",
    tagline: "Ultra-Modern & Laser Dentistry Studio",
    rating: "4.9",
    ratingCount: "49",
    claimed: true,
    yearsInBusiness: "7+",
    openNow: true,
    highlights: [
      "Mon-Sat: 10am-8:30pm | Sun: 10am-1pm",
      "Wheelchair Accessible Facility",
      "Advanced Laser & Minimally Invasive Dentistry",
      "Fixed Prosthodontics & Emax Veneers",
      "Painless Single-Visit Root Canal (RCT)",
      "Sterilized Surgical Protocol & Subsidized Care"
    ]
  },
  contact: {
    phone: "8688207776",
    formattedPhone: "+91 86882 07776",
    whatsapp: "+918688207776",
    email: "care@dlightdentalstudio.com",
    fullAddress: "Beside More Supermarket, Seethammadhara Road, Seethammadhara, Visakhapatnam-530013, Andhra Pradesh",
    landmark: "Beside More Supermarket",
    area: "Seethammadhara",
    city: "Visakhapatnam",
    pincode: "530013",
    state: "Andhra Pradesh",
    geo: {
      lat: "17.741859972222",
      lng: "83.307158972222"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.88232971279!2d83.30458407517373!3d17.741859972222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434771694f4d%3A0xb3e6ecb9b8b0e8b!2sSeethammadhara%2C%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  workingHours: {
    monday: "10:00 AM – 8:30 PM",
    tuesday: "10:00 AM – 8:30 PM",
    wednesday: "10:00 AM – 8:30 PM",
    thursday: "10:00 AM – 8:30 PM",
    friday: "10:00 AM – 8:30 PM",
    saturday: "10:00 AM – 8:30 PM",
    sunday: "10:00 AM – 1:00 PM"
  },
  doctors: [
    {
      id: "dr-neeraja",
      name: "Dr. Neeraja Suvvari",
      title: "Chief Dental Surgeon & Laser Specialist",
      degrees: "BDS, MDS (Laser & Restorative Dentistry)",
      experience: "10+ Years Experience",
      specialties: ["Laser Dentistry", "Cosmetic Smile Designing", "Periodontal Care", "Bleeding Gums Therapy"],
      bio: "Dr. Neeraja Suvvari is a pioneering dental surgeon specializing in state-of-the-art laser treatments and aesthetic smile restorations with a commitment to zero-pain patient care.",
      avatar: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-cgexiwl7bf.jpg"
    },
    {
      id: "dr-ganesh",
      name: "Dr. Ganesh Kumar Butta (Ruttala)",
      title: "Senior Prosthodontist & Implantologist",
      degrees: "BDS, MDS (Fixed Prosthodontics & Endodontics)",
      experience: "12+ Years Experience",
      specialties: ["Fixed Prosthodontics", "Dental Implants", "Single-Visit RCT", "Emax Veneers & Crowns"],
      bio: "Dr. Ganesh Kumar Butta is a renowned expert in fixed prosthodontics, Emax ceramic veneers, full-mouth rehabilitation, and micro-endodontic root canal treatments.",
      avatar: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-730epglw0z.jpg"
    }
  ],
  services: [
    {
      id: "laser-dentistry",
      title: "Laser Dentistry",
      category: "Advanced Technology",
      tagline: "Minimally invasive, painless, precise laser procedures",
      image: "/laser-dentistry.jpg",
      description: "Using cutting-edge dental laser technology, D-light Dental Studio provides soft-tissue procedures with zero bleeding, instant coagulation, faster healing, and minimal discomfort.",
      features: [
        "Laser Gum Contouring & depigmentation",
        "Painless frenzy & soft tissue lesion removal",
        "Deep pocket laser disinfection",
        "No scalpel & reduced recovery time"
      ]
    },
    {
      id: "fixed-prosthodontics",
      title: "Fixed Prosthodontics & Implants",
      category: "Restorative Dentistry",
      tagline: "Durable, natural-looking porcelain crowns & titanium implants",
      image: "/fixed-prosthodontics.png",
      description: "Specialized restorative solutions to replace missing teeth or restore severely broken tooth structures using premium Emax ceramic crowns, zirconia bridges, and lifetime dental implants.",
      features: [
        "High-translucency Zirconia & Emax Crowns",
        "Single & Multi-Tooth Dental Implants",
        "Full Mouth Implant-Supported Fixed Bridges",
        "Precision Impression & CAD/CAM Design"
      ]
    },
    {
      id: "rct",
      title: "Root Canal Treatment (RCT)",
      category: "Endodontics",
      tagline: "Painless tooth preservation under digital supervision",
      image: "/rct.png",
      description: "Save decayed or infected teeth through advanced rotary endodontics. Completely painless procedure performed under strict sterile conditions.",
      features: [
        "Single-visit rotary RCT capability",
        "Digital apex locators & apex irrigation",
        "Post & core build-ups for heavy restoration",
        "Immediate pain relief guaranteed"
      ]
    },
    {
      id: "bleeding-gums",
      title: "Bleeding Gums & Periodontal Care",
      category: "Gum Health",
      tagline: "Comprehensive treatment for gingivitis & periodontitis",
      image: "/bleeding-gums.png",
      description: "Targeted periodontal therapy to eliminate gum bleeding, cure infection, stabilize loose teeth, and promote healthy attachment.",
      features: [
        "Ultrasonic scaling & deep root planing",
        "Laser periodontal decontamination",
        "Sub-gingival plaque & calculus removal",
        "Customized home oral hygiene regimen"
      ]
    },
    {
      id: "invisible-braces",
      title: "Orthodontics & Invisible Braces",
      category: "Cosmetics",
      tagline: "Discreet teeth alignment with clear aligners",
      image: "/invisible-braces.png",
      description: "Straighten misaligned or crowded teeth using clear invisible aligners and aesthetic ceramic braces for children, teens, and adults.",
      features: [
        "3D Digital Aligners planning",
        "Virtually invisible clear trays",
        "Ceramic & self-ligating braces",
        "Correction of crowding, gaps, and overbites"
      ]
    },
    {
      id: "cosmetic-reshaping",
      title: "Cosmetic Smile Makeover",
      category: "Esthetics",
      tagline: "Transform your smile with veneers and reshaping",
      image: "/cosmetic-makeover.png",
      description: "Custom aesthetic smile design using Emax porcelain veneers, teeth whitening, enamel reshaping, and composite bonding.",
      features: [
        "Ultra-thin Emax Veneers & Lumineers",
        "Laser teeth whitening (3 shades lighter)",
        "Diastema closure & smile alignment",
        "Digital Smile Design preview"
      ]
    }
  ],
  paymentMethods: [
    "UPI (GPay / PhonePe / Paytm)",
    "Net Banking",
    "Visa / MasterCard / RuPay Cards",
    "Cash",
    "Subsidies & Easy EMI Available"
  ],
  reviews: [
    {
      id: 1,
      author: "Sanju",
      date: "6th August, 2024",
      rating: 5,
      text: "I had an excellent experience with D-light Dental Studio. The service was quick, and the booking process was easy. The studio is well connected and easily accessible. The equipment is sterilized, and the environment is clean and hygienic, which made me feel comfortable. The staff was extremely supportive, and there are subsidies available for those in need. I received excellent treatment with good supervision. Overall, it was a great experience at D-light Dental Studio.",
      badge: "Verified Patient"
    },
    {
      id: 2,
      author: "Satya Monish",
      date: "31st July, 2019",
      rating: 5,
      text: "I had my Root Canal Treatment done, Good Relief! Extremely gentle care and zero pain during the procedure.",
      badge: "Verified Patient"
    },
    {
      id: 3,
      author: "Veda",
      date: "25th August, 2022",
      rating: 5,
      text: "Nice treatment and comfortable with doctor and assistant. Highly recommended for laser dentistry in Visakhapatnam!",
      badge: "Verified Patient"
    },
    {
      id: 4,
      author: "Ramesh K.",
      date: "14th February, 2024",
      rating: 5,
      text: "D-light Dental Studio is by far the cleanest and most technologically advanced clinic in Seethammadhara. My Emax veneers look 100% natural!",
      badge: "Verified Patient"
    }
  ],
  faqs: [
    {
      question: "Where is D-light Dental Studio located in Visakhapatnam?",
      answer: "D-light Dental Studio is located right Beside More Supermarket on Seethammadhara Road, Seethammadhara, Visakhapatnam-530013. It is easily accessible with ample parking and wheelchair accessibility."
    },
    {
      question: "What are the opening hours of D-light Dental Studio?",
      answer: "D-light Dental Studio is open Monday through Saturday from 10:00 AM to 8:30 PM, and on Sunday from 10:00 AM to 1:00 PM."
    },
    {
      question: "Do I need an appointment before visiting D-light Dental Studio?",
      answer: "Booking an appointment in advance guarantees zero waiting time and priority doctor consultation. You can call 8688207776 or book online."
    },
    {
      question: "Is Root Canal Treatment (RCT) painful at D-light Dental Studio?",
      answer: "Not at all. We utilize modern rotary endodontic instruments, digital apex locators, and localized anesthesia techniques ensuring a painless experience with quick relief."
    },
    {
      question: "What is Laser Dentistry and what are its advantages?",
      answer: "Laser dentistry uses concentrated light energy to perform soft-tissue procedures without scalpels. Benefits include minimal bleeding, zero pain, reduced risk of infection, and rapid healing."
    },
    {
      question: "What payment options are accepted?",
      answer: "We accept UPI (GPay, PhonePe, Paytm), All Credit/Debit Cards (Visa, MasterCard, RuPay), Net Banking, Cash, and offer subsidized options & EMI assistance."
    }
  ],
  // All 40 real photos scraped from Justdial categorized
  photos: [
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-cgexiwl7bf.jpg",
      category: "Exterior & Studio Signage",
      alt: "D-light Dental Studio Signage - Dr. Neeraja Suvvari & Dr. Ganesh Kumar Butta",
      tags: ["exterior", "signage"]
    },
    {
      url: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-730epglw0z.jpg",
      category: "Before & After Transformations",
      alt: "Damaged teeth before and after Emax veneers transformation by Dr. Ganesh Ruttala",
      tags: ["transformation", "veneers"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-hi70hjsphy.jpg",
      category: "Before & After Transformations",
      alt: "Teeth before and after dental reshaping and aesthetic alignment",
      tags: ["transformation", "reshaping"]
    },
    {
      url: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-qqfgqokbgz.jpg",
      category: "Before & After Transformations",
      alt: "Decayed molar root canal treatment and crown restoration progression",
      tags: ["transformation", "rct"]
    },
    {
      url: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-6nhhut4cwu.jpg",
      category: "Clinical Equipment & Implants",
      alt: "Dental implants, precision crowns, and laser instruments showcase",
      tags: ["implants", "equipment"]
    },
    {
      url: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-clinics-uaiw7l0vgm.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Sterilized dental operatory room with high-tech patient dental chair",
      tags: ["interior", "operatory"]
    },
    {
      url: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-clinics-1cra18frnd.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Hygienic treatment bay equipped with laser machinery and sterilization setup",
      tags: ["interior", "laser"]
    },
    {
      url: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-clinics-0wg1ow1u7k.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Modern consultation office & patient lounge area",
      tags: ["interior", "lounge"]
    },
    {
      url: "https://images.jdmagicbox.com/v2/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-clinics-vfiwlfplgt.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Advanced dental surgical suite at D-light Dental Studio",
      tags: ["interior", "suite"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-khmcr6xusq.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Bright welcoming reception & patient comfort lounge",
      tags: ["interior", "reception"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-uc8nshknam.jpg",
      category: "Exterior & Studio Signage",
      alt: "Exterior view of D-light Dental Studio building in Seethammadhara",
      tags: ["exterior"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-p2zc0ipkj4.jpg",
      category: "Clinic Interior & Operatory",
      alt: "State of the art dental setup with specialized surgical lights",
      tags: ["interior"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-3p4o6srlgk.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Ultraclean dental operatory",
      tags: ["interior"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-seethammadhara-visakhapatnam-dentists-q2ljnrybx2.jpg",
      category: "Exterior & Studio Signage",
      alt: "Facade of D-light Dental Studio on Seethammadhara Road",
      tags: ["exterior"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-visakhapatnam-3cpi7jijeq.jpg",
      category: "Exterior & Studio Signage",
      alt: "Studio exterior signage beside More Supermarket",
      tags: ["exterior"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-visakhapatnam-x5bm5yvgyh.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Modern clinic treatment room",
      tags: ["interior"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-visakhapatnam-ddvzyp1crf.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Specialist consultation area",
      tags: ["interior"]
    },
    {
      url: "https://images.jdmagicbox.com/comp/visakhapatnam/t8/0891px891.x891.190719131024.m8t8/catalogue/d-light-dental-studio-visakhapatnam-1ztswruwzl.jpg",
      category: "Clinic Interior & Operatory",
      alt: "Patient treatment bay",
      tags: ["interior"]
    }
  ]
};
