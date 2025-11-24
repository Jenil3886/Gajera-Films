import { Camera, Film, Award, MapPin } from "lucide-react";

const owners = [
  {
    name: "Gajera Darshan",
    title: "Lead Cinematographer",
    phone: "9904113173",
    portrait:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Gajera Prince",
    title: "Creative Director",
    phone: "8347977413",
    portrait:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
];

const highlights = [
  { icon: Camera, label: "Cinematic Wedding Collectives", value: "600+" },
  { icon: Film, label: "Feature-Length Films Delivered", value: "150+" },
  { icon: Award, label: "Years of Storytelling Experience", value: "10+" },
];

const About = () => {
  return (
    <section
      id="about"
      className="luxury-section parallax"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(201,168,106,0.3),_transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Story */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">
              Surat · Gujarat · India
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Crafted cinema, soulful photography, and stories that feel like
              luxury films.
            </h2>
            <div className="h-1 w-20 luxury-gradient mt-6" />
          </div>

          <p className="text-soft-grey text-lg leading-relaxed">
            Gajera Films is a boutique photography house led by brothers Darshan
            and Prince. We merge documentary instincts with editorial polish,
            weaving together analog textures, medium-format inspired framing,
            and modern motion techniques. From pheras to champagne toasts, our
            crew is obsessed with preserving feeling in the quiet in-between
            moments.
          </p>
          <p className="text-soft-grey/90 text-base leading-relaxed">
            Our signature approach layers creamy highlights, deep cinematic
            blacks, and handheld energy to deliver imagery that feels intimate,
            opulent, and timeless. Every deliverable is handcrafted from Surat,
            ready for global celebrations.
          </p>

          <div className="grid gap-5 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-soft-grey">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-soft-grey">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Studio HQ · Surat, Gujarat, India · Travel worldwide</span>
          </div>
        </div>

        {/* Founders */}
        <div className="space-y-6 animate-fade-in">
          {owners.map((owner) => (
            <div
              key={owner.name}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black/60 p-6 backdrop-blur-lg"
            >
              <div className="w-36 h-36 rounded-2xl overflow-hidden shrink-0 gold-glow">
                <img
                  src={owner.portrait}
                  alt={owner.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <p className="text-sm uppercase tracking-[0.5em] text-soft-grey/80">
                  Co-Founder
                </p>
                <h3 className="text-2xl font-semibold">{owner.name}</h3>
                <p className="text-soft-grey">{owner.title}</p>
                <a
                  href={`tel:+91${owner.phone}`}
                  className="inline-flex items-center gap-2 text-primary text-sm tracking-[0.2em]"
                >
                  {owner.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
