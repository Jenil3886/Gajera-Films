import { useState } from "react";
import { Heart, Users, Baby, Plane, Video, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import ServiceDetailModal from "./ServiceDetailModal";
import weddingImage from "@/assets/portfolio-wedding-1.jpg";
import preweddingImage from "@/assets/portfolio-prewedding-1.webp";
import eventImage from "@/assets/portfolio-event-1.webp";
import babyImage from "@/assets/portfolio-baby-1.webp";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceDetails = {
    wedding: {
      title: "Wedding Photography",
      icon: Heart,
      description: "Capture your special day with timeless elegance and romantic storytelling.",
      intro: "Your wedding day is one of the most important moments of your life. Our expert photographers specialize in capturing every precious moment, from intimate ceremonies to grand celebrations, with a perfect blend of candid shots and artistic compositions.",
      included: [
        "Full-day photography coverage (8-12 hours)",
        "2 professional photographers",
        "500+ high-resolution edited photos",
        "Online private gallery for sharing",
        "Pre-wedding consultation session",
        "Basic color correction and retouching",
        "USB with all edited images",
        "Print rights for all images"
      ],
      addOns: [
        "Additional photographer (+₹15,000)",
        "Premium photo album 40 pages (+₹25,000)",
        "Same-day edit video (+₹20,000)",
        "Bridal preparation coverage (+₹10,000)",
        "Extended hours coverage (+₹8,000/hour)",
        "Destination wedding coverage (custom pricing)"
      ],
      startingPrice: "₹75,000",
      images: [weddingImage, preweddingImage, weddingImage, preweddingImage, weddingImage, preweddingImage]
    },
    prewedding: {
      title: "Pre-Wedding Shoots",
      icon: Camera,
      description: "Create beautiful memories before your big day with artistic couple photography.",
      intro: "Celebrate your love story with a stunning pre-wedding photoshoot. We create romantic, cinematic images that capture your unique connection in breathtaking locations with perfect lighting and creative direction.",
      included: [
        "4-6 hours photoshoot session",
        "1-2 location changes",
        "150+ professionally edited photos",
        "Creative direction and posing guidance",
        "Online gallery with download access",
        "Outfit change assistance",
        "Basic props included",
        "High-resolution digital files"
      ],
      addOns: [
        "Additional location (+₹8,000)",
        "Drone coverage (+₹12,000)",
        "Premium album 30 pages (+₹20,000)",
        "Video highlights 2-3 min (+₹15,000)",
        "Professional makeup artist (+₹10,000)",
        "Printed photos package (+₹5,000)"
      ],
      startingPrice: "₹35,000",
      images: [preweddingImage, weddingImage, preweddingImage, weddingImage, preweddingImage, weddingImage]
    },
    events: {
      title: "Event Coverage",
      icon: Users,
      description: "Professional documentation of corporate events, parties, and celebrations.",
      intro: "From corporate conferences to birthday celebrations, we provide comprehensive event photography that captures the energy, emotions, and key moments of your special occasion with professional excellence.",
      included: [
        "Event duration coverage (4-8 hours)",
        "1-2 professional photographers",
        "300+ edited event photos",
        "Quick turnaround (3-5 days)",
        "Online gallery for guests",
        "Key moments documentation",
        "Candid and formal shots",
        "Digital delivery of all images"
      ],
      addOns: [
        "Videography coverage (+₹25,000)",
        "Photo booth setup (+₹15,000)",
        "Extended coverage (+₹6,000/hour)",
        "Rush delivery 24 hours (+₹10,000)",
        "Printed photo album (+₹18,000)",
        "Live social media posting (+₹8,000)"
      ],
      startingPrice: "₹30,000",
      images: [eventImage, weddingImage, eventImage, preweddingImage, eventImage, weddingImage]
    },
    baby: {
      title: "Baby & Family Shoots",
      icon: Baby,
      description: "Preserve precious moments of your growing family with tender photography.",
      intro: "Capture the innocence and joy of your little ones with our specialized baby and family photography. From newborn sessions to family portraits, we create timeless memories with gentle, patient, and creative approaches.",
      included: [
        "1-2 hours studio/outdoor session",
        "Newborn safety-trained photographer",
        "50+ beautifully edited photos",
        "Multiple outfit changes",
        "Props and accessories provided",
        "Comfortable studio environment",
        "Family group shots included",
        "Digital image delivery"
      ],
      addOns: [
        "Maternity shoot combo (+₹15,000)",
        "Milestone photography package (+₹12,000)",
        "Premium prints collection (+₹8,000)",
        "Custom photo book 20 pages (+₹15,000)",
        "Extended session (+₹5,000)",
        "Outdoor location shoot (+₹10,000)"
      ],
      startingPrice: "₹15,000",
      images: [babyImage, preweddingImage, babyImage, weddingImage, babyImage, eventImage]
    },
    drone: {
      title: "Drone Cinematography",
      icon: Plane,
      description: "Stunning aerial perspectives that add a cinematic dimension to your story.",
      intro: "Elevate your visual storytelling with breathtaking aerial footage. Our licensed drone pilots capture stunning overhead shots and cinematic sequences that add a professional, cinematic quality to any project.",
      included: [
        "2-4 hours drone coverage",
        "Licensed and insured pilot",
        "4K aerial video footage",
        "50+ aerial photographs",
        "Multiple angle coverage",
        "Weather contingency planning",
        "Edited aerial sequences",
        "Raw footage provided"
      ],
      addOns: [
        "Extended flight time (+₹8,000/hour)",
        "Multiple location coverage (+₹10,000)",
        "FPV drone footage (+₹15,000)",
        "360° aerial panoramas (+₹6,000)",
        "Rush delivery 24 hours (+₹8,000)",
        "Cinematic editing package (+₹12,000)"
      ],
      startingPrice: "₹20,000",
      images: [eventImage, weddingImage, preweddingImage, eventImage, weddingImage, preweddingImage]
    },
    films: {
      title: "Cinematic Films",
      icon: Video,
      description: "Full-length wedding films and promotional videos with professional editing.",
      intro: "Transform your special moments into a cinematic masterpiece. Our filmmaking team creates emotionally compelling, beautifully edited films that tell your unique story with professional cinematography, sound design, and post-production.",
      included: [
        "Full-day video coverage (8-12 hours)",
        "2-3 videographers with cinema cameras",
        "20-30 minute cinematic highlight film",
        "Professional audio recording",
        "Cinematic color grading",
        "Licensed background music",
        "Multiple edited versions",
        "4K video delivery"
      ],
      addOns: [
        "Documentary-style full event (+₹50,000)",
        "Drone cinematography (+₹20,000)",
        "Same-day edit screening (+₹25,000)",
        "Additional highlight reels (+₹15,000)",
        "Social media edit package (+₹10,000)",
        "Blu-ray and USB package (+₹5,000)"
      ],
      startingPrice: "₹1,00,000",
      images: [weddingImage, eventImage, preweddingImage, weddingImage, eventImage, preweddingImage]
    }
  };

  const services = [
    {
      id: "wedding",
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture your special day with timeless elegance and romantic storytelling."
    },
    {
      id: "prewedding",
      icon: Camera,
      title: "Pre-Wedding Shoots",
      description: "Create beautiful memories before your big day with artistic couple photography."
    },
    {
      id: "events",
      icon: Users,
      title: "Event Coverage",
      description: "Professional documentation of corporate events, parties, and celebrations."
    },
    {
      id: "baby",
      icon: Baby,
      title: "Baby & Family Shoots",
      description: "Preserve precious moments of your growing family with tender photography."
    },
    {
      id: "drone",
      icon: Plane,
      title: "Drone Cinematography",
      description: "Stunning aerial perspectives that add a cinematic dimension to your story."
    },
    {
      id: "films",
      icon: Video,
      title: "Cinematic Films",
      description: "Full-length wedding films and promotional videos with professional editing."
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceDetails[serviceId as keyof typeof serviceDetails]);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="services"
        className="luxury-section parallax bg-[#050505]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.95), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.webp')]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="section-heading animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.5em] text-primary mb-4">
              Bespoke offerings
            </p>
            <h2>Signature Services - Wedding Photography in Surat</h2>
            <p>
              Six meticulously curated experiences covering <a href="#portfolio" className="text-primary hover:underline">weddings</a>,
              celebrations, aerial storytelling, and luxe films. <a href="#contact" className="text-primary hover:underline">Contact us</a> to book your perfect package.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                onClick={() => handleServiceClick(service.id)}
                className="bg-gradient-to-br from-white/5 to-black/60 border border-white/10 hover:border-primary/80 transition-all duration-500 hover:-translate-y-1 group animate-fade-in cursor-pointer rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 group-hover:bg-primary/10 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-white">
                    {service.title}
                  </h3>
                  <p className="text-soft-grey leading-relaxed min-h-[72px]">
                    {service.description}
                  </p>
                  <span className="text-primary text-xs tracking-[0.4em] uppercase inline-flex items-center justify-center gap-2">
                    View Details
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailModal 
        service={selectedService}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

export default Services;
