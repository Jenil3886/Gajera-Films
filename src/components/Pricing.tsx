import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Silver",
    price: "₹50,000",
    description: "Intimate ceremonies & pre-functions",
    features: [
      "6 hours hybrid coverage",
      "1 photographer + 1 filmmaker",
      "200+ hand-edited stills",
      "Highlight film (3-5 mins)",
      "Private online gallery",
      "Signature color toning",
    ],
    popular: false,
  },
  {
    name: "Gold",
    price: "₹1,00,000",
    description: "Full-day premium wedding coverage",
    features: [
      "Full-day (12 hrs) coverage",
      "2 photographers + 2 filmmakers",
      "500+ curated stills",
      "Cinematic film (10-15 mins)",
      "Drone cinematography",
      "Premium lay-flat album (30 pages)",
      "Same-day edit teaser",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹2,00,000",
    description: "Multi-day luxury celebrations",
    features: [
      "3-day multi-event coverage",
      "Dedicated creative director",
      "Unlimited artist team + assistants",
      "Feature film (20-30 mins)",
      "Extended aerial + FPV coverage",
      "Luxury album set (His + Hers)",
      "Pre-wedding film included",
      "Live streaming & social edits",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="luxury-section bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">
            Pricing
          </p>
          <h2>Collections designed for every celebration</h2>
          <p>
            Transparent starting prices. Every package can be tailored with
            additional days, deliverables, or travel.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-black/80 backdrop-blur ${
                pkg.popular ? "ring-2 ring-primary/60 shadow-gold" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full luxury-gradient text-xs tracking-[0.3em] uppercase text-black">
                  Most Loved
                </div>
              )}
              <CardHeader className="text-center space-y-3 pt-10">
                <CardTitle className="text-3xl text-white">
                  {pkg.name}
                </CardTitle>
                <p className="text-soft-grey text-sm uppercase tracking-[0.3em]">
                  {pkg.description}
                </p>
                <div className="text-4xl font-display text-primary">
                  {pkg.price}
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-soft-grey">
                  Starting investment
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-soft-grey"
                  >
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full mt-6 rounded-full ${
                    pkg.popular
                      ? "bg-primary text-black hover:bg-primary/90"
                      : "border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  Reserve Date
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-soft-grey mt-12 text-sm tracking-[0.3em] uppercase">
          Flexible payment plans · Travel & destination fees quoted separately
        </p>
      </div>
    </section>
  );
};

export default Pricing;
