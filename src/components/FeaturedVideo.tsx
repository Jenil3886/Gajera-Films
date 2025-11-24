const featuredFilmUrl = "https://www.youtube.com/embed/LXb3EKWsInQ?rel=0&showinfo=0";

const FeaturedVideo = () => {
  return (
    <section id="films" className="luxury-section bg-[#080808]">
      <div className="max-w-6xl mx-auto text-center space-y-10 relative">
        <div className="section-heading animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.5em] text-primary mb-4">
            Featured Film
          </p>
          <h2>“Saanjh” — A Wedding Story</h2>
          <p>
            A 4-minute cinematic narrative blending handheld intimacy with
            sweeping aerials. Best experienced with sound on.
          </p>
        </div>

        <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-b from-white/5 to-black/80 p-4 animate-scale-in">
          <div className="absolute inset-x-10 -top-4 h-3 bg-black rounded-t-full border-x border-t border-white/10" />
          <div className="absolute inset-x-10 -bottom-4 h-3 bg-black rounded-b-full border-x border-b border-white/10" />

          <div className="relative aspect-video rounded-[28px] overflow-hidden border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <iframe
              src={featuredFilmUrl}
              title="Gajera Films Featured Wedding Film"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
