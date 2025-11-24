import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const showcaseVideo =
  "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4";
const showcasePoster =
  "https://images.unsplash.com/photo-1520854223473-68ce3b149f9c?auto=format&fit=crop&w=1600&q=80";

const heroHighlights = [
  { label: "Films Delivered", value: "480+" },
  { label: "Destinations", value: "23 Cities" },
  { label: "Avg. Turnaround", value: "21 Days" },
];

const heroSlides = [
  {
    title: "Timeless Wedding Cinema",
    description:
      "Moody palettes, handheld intimacy, and color-grading that feels like celluloid.",
  },
  {
    title: "Editorial Photography",
    description:
      "Clean compositions, couture styling, and frames ready for global publications.",
  },
  {
    title: "Immersive Storytelling",
    description:
      "Narratives woven with vows, speeches, and ambient textures recorded on-site.",
  },
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 sm:pt-[110px]- sm:pb-28"
    >
      {/* Cinematic video background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={showcaseVideo}
          poster={showcasePoster}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,168,106,0.25),_transparent_55%)] blur-3xl"></div>
      </div>

      {/* Parallax gold glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-32 right-10 h-72 w-72 bg-primary/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <p className="uppercase tracking-[0.55em] sm:tracking-[0.7em] text-[0.7rem] sm:text-xs text-soft-grey">
              Surat · Gujarat · India
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.3rem] font-semibold leading-tight text-balance text-gradient-gold pb-2">
              Gajera Films
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-soft-grey/90 font-light leading-relaxed">
              — Cinematic Photography & Filmmaking
            </p>
            <p className="text-base sm:text-lg md:text-xl text-soft-grey/90 font-light leading-relaxed">
              Luxury wedding storytellers crafting immersive frames with soulful
              color grading, buttery motion, and sentimental audio layers for
              couples who love modern heritage.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={scrollToPortfolio}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-5 text-xs sm:text-sm uppercase tracking-[0.35em] w-full sm:w-auto"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-white border-white/30 hover:border-white hover:bg-white/5 rounded-full px-8 py-5 text-xs sm:text-sm uppercase tracking-[0.35em] w-full sm:w-auto"
              >
                Book A Film
              </Button>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 text-center"
                >
                  <p className="text-soft-grey text-xs uppercase tracking-[0.4em]">
                    {item.label}
                  </p>
                  <p className="text-2xl text-white font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg animate-scale-in">
            <div className="rounded-[28px] sm:rounded-[32px] border border-white/10 bg-black/40 backdrop-blur p-6 sm:p-8 space-y-6">
              <p className="text-xs uppercase tracking-[0.5em] text-soft-grey">
                Signature Lookbooks
              </p>
              <div className="min-h-[140px] transition-all duration-500">
                <p className="text-2xl font-semibold text-white leading-snug">
                  {heroSlides[slideIndex].title}
                </p>
                <p className="text-soft-grey mt-3">
                  {heroSlides[slideIndex].description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {heroSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === slideIndex
                        ? "w-10 bg-primary"
                        : "w-4 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 p-4 flex flex-col sm:flex-row gap-4 text-sm text-soft-grey text-left">
                <div>
                  <p className="text-white text-nowrap text-xs uppercase tracking-[0.4em]">
                    Direct Lines
                  </p>
                  <a href="tel:+919904113173" className="text-white block">
                    +91 99041 13173
                  </a>
                  <a href="tel:+918347977413" className="text-white block">
                    +91 83479 77413
                  </a>
                </div>
                <div className="sm:border-l sm:border-white/10 sm:pl-4">
                  <p className="text-white text-xs uppercase tracking-[0.4em]">
                    Films & Travel
                  </p>
                  <p>Available for global destinations · 2025 calendar open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in-up">
        <span className="text-xs uppercase tracking-[0.4em] text-soft-grey mb-3">
          Scroll
        </span>
        <div className="w-9 h-14 border border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-[2px] h-4 bg-primary rounded-full animate-[scrollBounce_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
