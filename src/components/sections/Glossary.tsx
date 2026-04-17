import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

const terms = [
  {
    term: "演算法 (Algorithm)",
    def: "就像是解決問題的「步驟」或「食譜」。告訴電腦第一步做什麼、第二步做什麼，最後就能算出答案。"
  },
  {
    term: "大數據 (Big Data)",
    def: "非常巨大、複雜的資料庫。AI 就像大胃王，需要吃下這些海量的資料（大數據）才能學會聰明地思考。"
  },
  {
    term: "GPU (圖形處理器)",
    def: "原本是用來玩遊戲顯示畫面的硬體，但科學家發現它「同時處理很多小事情」的能力超強，剛好適合用來訓練 AI！"
  },
  {
    term: "模型 (Model)",
    def: "AI 學習後的「成果」。就像你讀完書考完試，腦袋裡留下的知識結構，這就是 AI 的模型，可以用來回答問題。"
  },
  {
    term: "幻覺 (Hallucination)",
    def: "有時候生成式 AI (如 ChatGPT) 會一本正經地胡說八道，講出完全錯誤的事實，這就被稱為「幻覺」。所以使用 AI 時要記得查證喔！"
  }
];

export function Glossary() {
  return (
    <section id="glossary" className="py-24 bg-background">
      <div className="container px-4 max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-12">
          <BookOpen className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">AI 小字典</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {terms.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium hover:text-primary hover:no-underline px-4">
                {item.term}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed px-4 pb-4">
                {item.def}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
