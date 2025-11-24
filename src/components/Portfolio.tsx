import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Category = "wedding" | "prewedding" | "events" | "films";

type PortfolioItem = {
  category: Category;
  title: string;
  location: string;
  image: string;
  video?: string;
};

const categories: { id: Category; label: string }[] = [
  { id: "wedding", label: "Wedding" },
  { id: "prewedding", label: "Pre-Wedding" },
  { id: "events", label: "Events" },
  { id: "films", label: "Films" },
];

const portfolioItems: PortfolioItem[] = [
  {
    category: "wedding",
    title: "Midnight Pheras, Udaipur",
    location: "Udaipur Palace",
    image:
      "https://images.unsplash.com/photo-1520854223473-68ce3b149f9c?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "wedding",
    title: "Sangeet Grandeur",
    location: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "wedding",
    title: "Sacred Fire Rituals",
    location: "Surat",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "prewedding",
    title: "Desert Dunes Romance",
    location: "Jaisalmer",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "prewedding",
    title: "Parisian Affair",
    location: "Paris",
    image:
      "https://images.unsplash.com/photo-1520854223473-68ce3b149f9c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    category: "prewedding",
    title: "Monsoon Garden Stills",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "events",
    title: "Intimate Mehendi",
    location: "Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "events",
    title: "Luxury Reception",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "events",
    title: "Couture Cocktail Night",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f417f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "films",
    title: "Saanjh · Wedding Film",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/embed/0Q7DV-bZcKg",
  },
  {
    category: "films",
    title: "Aakas · Cinematic Prelude",
    location: "Surat",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/embed/MKq4CwV4JqQ",
  },
  {
    category: "films",
    title: "Raabta · The Vow Edit",
    location: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/embed/a1HnHyjLduw",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("wedding");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [openLightbox, setOpenLightbox] = useState(false);

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  const handleOpen = (item: PortfolioItem) => {
    setSelectedItem(item);
    setOpenLightbox(true);
  };

  return (
    <section id="portfolio" className="luxury-section bg-black">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="section-heading animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.45em] text-primary mb-4">
            Portfolio
          </p>
          <h2>Masonry Gallery</h2>
          <p>Wedding · Pre-Wedding · Events · Films</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-lg mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.25em] transition-all w-full sm:w-auto min-w-[140px] text-center ${
                activeCategory === cat.id
                  ? "bg-primary text-black shadow-[0_10px_30px_rgba(201,168,106,0.35)]"
                  : "border border-white/20 text-soft-grey hover:border-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              onClick={() => handleOpen(item)}
              className="group relative w-full overflow-hidden rounded-[28px] block break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <p className="text-xs uppercase tracking-[0.4em] text-soft-grey">
                  {item.location}
                </p>
                <h3 className="text-2xl font-display text-white">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={openLightbox} onOpenChange={setOpenLightbox}>
        <DialogContent className="max-w-5xl w-full bg-black border-white/10 p-0 overflow-hidden">
          {selectedItem && (
            <div className="space-y-4">
              <div className="relative aspect-video bg-black">
                {selectedItem.video ? (
                  <iframe
                    src={selectedItem.video}
                    title={selectedItem.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 border border-white/20" />
              </div>
              <div className="px-6 pb-6 text-left space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-soft-grey">
                  {selectedItem.location}
                </p>
                <h3 className="text-2xl font-display text-white">
                  {selectedItem.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
