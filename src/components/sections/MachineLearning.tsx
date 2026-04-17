import { websiteContent } from "@/lib/content";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mlImg from "@/assets/images/ml.jpeg";

export function MachineLearning() {
  return (
    <section id="ml" className="py-24">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-2 text-gradient inline-block">
              {websiteContent.ml.title}
            </h2>
            <h3 className="text-2xl font-medium text-primary mb-6">
              {websiteContent.ml.subtitle}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {websiteContent.ml.intro}
            </p>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🆚 {websiteContent.ml.analogy.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-bold text-destructive">傳統程式：</span>
                  <span className="text-muted-foreground ml-2">
                    {websiteContent.ml.analogy.traditional}
                  </span>
                </div>
                <div className="pt-2 border-t border-primary/10">
                  <span className="font-bold text-primary">機器學習：</span>
                  <span className="text-muted-foreground ml-2">
                    {websiteContent.ml.analogy.ml}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-8 ring-primary/10">
                <img src={mlImg} alt="Machine Learning Robot" className="w-full h-auto" />
             </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">機器學習的三種方式</h3>
          <Tabs defaultValue="supervised" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="supervised">監督式學習</TabsTrigger>
              <TabsTrigger value="unsupervised">非監督式學習</TabsTrigger>
              <TabsTrigger value="reinforcement">強化學習</TabsTrigger>
            </TabsList>
            {websiteContent.ml.types.map((type, index) => (
              <TabsContent key={index} value={index === 0 ? "supervised" : index === 1 ? "unsupervised" : "reinforcement"}>
                 <Card className="glass-card">
                   <CardContent className="p-8 text-center space-y-4">
                     <h4 className="text-2xl font-bold text-primary">{type.name}</h4>
                     <p className="text-xl text-foreground">{type.desc}</p>
                     <div className="inline-block bg-muted px-4 py-2 rounded-lg text-muted-foreground text-sm font-medium">
                       💡 例子：{type.example}
                     </div>
                   </CardContent>
                 </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
