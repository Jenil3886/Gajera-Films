import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel.tsx";

const testimonials = [
  {
    name: "Priya & Rajesh",
    event: "Destination Wedding · Udaipur",
    text: "Every frame feels alive. The team blended in like family yet delivered an editorial masterpiece. We relive our pheras every time we watch the film.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Anjali Sharma",
    event: "Pre-Wedding · Cappadocia",
    text: "They understood our vibe instantly. Subtle direction, dreamy grading, and a film that made our parents cry happy tears.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vikram Patel",
    event: "Corporate Soirée · Mumbai",
    text: "Top-tier professionalism with cinematic flair. From drone establishing shots to candid interviews, everything felt elevated.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Niharika & Aman",
    event: "Luxury Reception · Dubai",
    text: "Their edit pacing and music curation are unmatched. We trusted them completely and were blown away by the storytelling.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="luxury-section bg-[#050505]">
      <div className="max-w-6xl mx-auto relative">
        <div className="section-heading animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.45em] text-primary mb-4">
            Testimonials
          </p>
          <h2>Whispers from our couples & clients</h2>
          <p>
            A rotating carousel of heartfelt notes, gold-rated experiences, and
            genuine love.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <Card className="bg-gradient-to-br from-white/5 to-black/80 border border-white/10 rounded-[28px] h-full">
                  <CardContent className="p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border border-white/30"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-white text-lg font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-xs uppercase tracking-[0.4em] text-soft-grey">
                          {testimonial.event}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-primary fill-primary"
                        />
                      ))}
                    </div>

                    <p className="text-soft-grey text-lg leading-relaxed italic">
                      “{testimonial.text}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-white/30 text-white hidden md:flex bg-black/40 hover:bg-black/70" />
          <CarouselNext className="border-white/30 text-white hidden md:flex bg-black/40 hover:bg-black/70" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
