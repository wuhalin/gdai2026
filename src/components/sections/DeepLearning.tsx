import { websiteContent } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import dlImg from "@/assets/images/dl.jpeg";

export function DeepLearning() {
  return (
    <section id="dl" className="py-24 bg-slate-900 text-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[100px] rounded-full" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500 inline-block">
            {websiteContent.dl.title}
          </h2>
          <p className="text-xl text-slate-300">
            {websiteContent.dl.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <img 
              src={dlImg} 
              alt="Neural Network" 
              className="relative rounded-2xl shadow-2xl w-full border border-white/10"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-300">
                {websiteContent.dl.concept.title}
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                {websiteContent.dl.intro}
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-slate-200 whitespace-pre-line leading-loose">
                  {websiteContent.dl.concept.layers}
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 border-none text-white shadow-lg">
              <CardContent className="p-6 flex items-start gap-4">
                <span className="text-4xl">🤔</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">冷知識</h4>
                  <p className="opacity-90">{websiteContent.dl.funFact}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
