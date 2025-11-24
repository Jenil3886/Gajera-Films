import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ServiceDetail {
  title: string;
  icon: any;
  description: string;
  intro: string;
  included: string[];
  addOns: string[];
  startingPrice: string;
  images: string[];
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceDetailModal = ({ service, open, onOpenChange }: ServiceDetailModalProps) => {
  if (!service) return null;

  const handleBookNow = () => {
    onOpenChange(false);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-[#050505] border-white/10 overflow-hidden">
        <ScrollArea className="h-[90vh]">
          {/* Header Banner */}
          <div className="relative h-64 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${service.images[0]})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/80" />
            </div>
            <div className="relative text-center z-10">
              <service.icon className="w-16 h-16 text-primary mx-auto mb-4" />
              <DialogTitle className="text-4xl font-display text-white">
                {service.title}
              </DialogTitle>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Intro */}
            <div>
              <p className="text-lg text-soft-grey leading-relaxed">
                {service.intro}
              </p>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-display text-foreground mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-primary" />
                What's Included
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {service.included.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-soft-grey text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-Ons */}
            <div>
              <h3 className="text-2xl font-display text-foreground mb-4 flex items-center gap-2">
                <Plus className="w-6 h-6 text-primary" />
                Available Add-Ons
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {service.addOns.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 border border-white/10 rounded-2xl hover:border-primary/70 transition-colors duration-300 backdrop-blur"
                  >
                    <Plus className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-soft-grey text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Images */}
            <div>
              <h3 className="text-2xl font-display text-foreground mb-4">
                Sample Work
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {service.images.slice(0, 6).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden group"
                  >
                    <img
                      src={image}
                      alt={`${service.title} sample ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="bg-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <p className="text-3xl font-display text-primary">{service.startingPrice}</p>
              </div>
              <Button
                size="lg"
                onClick={handleBookNow}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto rounded-full px-8"
              >
                Book This Service
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              * Prices may vary based on location, duration, and custom requirements. Contact us for a personalized quote.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
