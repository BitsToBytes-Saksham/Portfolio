import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-xl text-white w-full">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sakshamgupta.1107@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:text-primary transition"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-lg font-medium">E-Mail</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918707200000"
                className="flex items-center gap-4 group hover:text-primary transition"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-lg font-medium">Phone No.</span>
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/place/Bengaluru,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:text-primary transition"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-lg font-medium">Location</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-10 text-center">
              <h4 className="font-medium text-white mb-4">Connect With Me</h4>
              <div className="flex justify-center gap-6 items-center">
                <a
                  href="https://www.linkedin.com/in/sakshamgupta0711/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/SakshamGupta_X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/sakshamgupta.11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-card p-10 rounded-2xl shadow-xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none focus:ring-2 focus:ring-primary"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
