import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { History } from "@/components/sections/History";
import { MachineLearning } from "@/components/sections/MachineLearning";
import { DeepLearning } from "@/components/sections/DeepLearning";
import { Glossary } from "@/components/sections/Glossary";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <History />
        <MachineLearning />
        <DeepLearning />
        <Glossary />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border mt-12 bg-muted/30">
        <div className="container px-4">
          <p className="font-medium">© 2026 給國中生的人工智慧入門</p>
          <p className="text-sm opacity-60 mt-2">Built with curiosity & code</p>
        </div>
      </footer>
    </div>
  );
}
