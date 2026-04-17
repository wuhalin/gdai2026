import { websiteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/images/hero.jpeg";

export function Hero() {
  const scrollToHistory = () => {
    const element = document.getElementById("history");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/90" />
        <img 
          src={heroImg} 
          alt="Future AI Classroom" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container px-4 text-center z-10 animate-fade-in-up">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium mb-6 text-sm backdrop-blur-sm border border-primary/20">
          {websiteContent.hero.subtitle}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          {websiteContent.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
          {websiteContent.hero.description}
        </p>
        <Button 
          size="lg" 
          onClick={scrollToHistory}
          className="rounded-full text-lg px-8 py-6 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          {websiteContent.hero.cta}
          <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
        </Button>
      </div>
    </section>
  );
}
