import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const fullText = "Hii, I'm Saksham Gupta";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, []);

  // Proper index slicing based on actual character positions:
  // "Hi, I'm Saksham Gupta"
  //  01234567890123456789
  //        ^8        ^16
  const hiPart = typedText.slice(0, 7); // "Hi, I'm"
  const sakshamPart = typedText.slice(7, 15); // " Saksham"
  const guptaPart = typedText.slice(15); // " Gupta"

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
            <span>{hiPart}</span>
            <span className="text-primary">{sakshamPart}</span>
            <span className="text-gradient">{guptaPart}</span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A 3rd Year CSE Student.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
