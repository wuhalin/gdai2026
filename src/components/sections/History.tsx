import { websiteContent } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, Swords, Trophy, Sparkles } from "lucide-react";
import historyImg from "@/assets/images/history.jpeg";

const icons = {
  BrainCircuit,
  Lightbulb,
  Swords,
  Trophy,
  Sparkles
};

export function History() {
  return (
    <section id="history" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient inline-block">
            {websiteContent.history.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {websiteContent.history.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <img 
              src={historyImg} 
              alt="AI History Timeline" 
              className="w-full object-cover aspect-video lg:aspect-auto lg:h-full"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-medium text-lg">
                從巨型電腦到你的手機，AI 進化史
              </p>
            </div>
          </div>

          <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/20">
            {websiteContent.history.timeline.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons] || Lightbulb;
              return (
                <div key={index} className="relative animate-fade-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute -left-[3.25rem] bg-background p-2 rounded-full border border-border shadow-sm">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Card className="hover:shadow-lg transition-shadow border-primary/10">
                    <CardContent className="p-6">
                      <div className="text-sm font-bold text-primary mb-1 font-mono">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
