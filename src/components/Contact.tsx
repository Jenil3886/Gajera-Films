import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Instagram, Youtube } from "lucide-react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { emailjsConfig } from "../lib/constant";

const owners = [
  { name: "Gajera Darshan", phone: "9904113173" },
  { name: "Gajera Prince", phone: "8347977413" },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    shootType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ===========================
  // 📩 SEND EMAIL FUNCTION
  // ===========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      event_date: formData.date || "Not specified",
      shoot_type: formData.shootType || "Not specified",
      message: formData.message,
      to_email: "gajerajenil08@gmail.com",
    };

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully!",
            description: "We will respond within 24 hours.",
          });

          setFormData({
            name: "",
            email: "",
            date: "",
            shootType: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          toast({
            title: "Failed to send",
            description: "Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="luxury-section bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="section-heading animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.45em] text-primary mb-4">
            Contact
          </p>
          <h2>Reserve your date with Gajera Films</h2>
          <p>Mobile-first experience · Replies within 24 hrs · Travel ready</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-gradient-to-br from-white/5 to-black/80 border border-white/10 rounded-[32px] backdrop-blur">
            <CardContent className="p-8 md:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.3em] text-soft-grey">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="mt-2 bg-black/40 border-white/15 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.3em] text-soft-grey">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="mt-2 bg-black/40 border-white/15 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.3em] text-soft-grey">Event Date</label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-2 bg-black/40 border-white/15 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.3em] text-soft-grey">Shoot Type</label>
                    <Input
                      name="shootType"
                      value={formData.shootType}
                      onChange={handleChange}
                      placeholder="Wedding / Pre-Wedding / Event"
                      className="mt-2 bg-black/40 border-white/15 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-soft-grey">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your celebration, locations, and vision."
                    className="mt-2 bg-black/40 border-white/15 text-white min-h-[140px]"
                    required
                  />
                </div>

                <Button className="w-full rounded-full bg-primary text-black hover:bg-primary/90">
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-[32px] border border-white/10 bg-black/40 backdrop-blur">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-white text-2xl font-semibold">Direct access</h3>

                <div className="space-y-4">
                  {owners.map((owner) => (
                    <div key={owner.phone}>
                      <p className="text-soft-grey text-xs uppercase tracking-[0.4em]">{owner.name}</p>
                      <a href={`tel:+91${owner.phone}`} className="text-lg text-white tracking-[0.2em]">
                        +91 {owner.phone}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-soft-grey">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:hello@gajerafilms.com">gajerafilms01@gmail.com</a>
                  </div>

                  <div className="flex items-center gap-3 text-soft-grey">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Surat, Gujarat, India · Available worldwide</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href="https://youtube.com"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[32px] border border-white/10 bg-black/30">
              <CardContent className="p-8 space-y-3">
                <h4 className="text-white text-lg tracking-[0.2em] uppercase">Studio Hours</h4>
                <p className="text-soft-grey text-sm">Monday – Saturday · 10 AM – 8 PM IST</p>
                <p className="text-soft-grey text-sm">Sunday · Destination events only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
