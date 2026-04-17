export const websiteContent = {
  hero: {
    title: "歡迎來到 AI 的未來世界",
    subtitle: "給國中生的人工智慧探索之旅",
    description: "你是否好奇，Siri 是怎麼聽懂你說話的？ChatGPT 為什麼能寫作文？這一切都源於「人工智慧」。讓我們一起揭開它的神秘面紗！",
    cta: "開始探索",
  },
  history: {
    title: "AI 的時光旅行",
    description: "人工智慧不是突然出現的，它已經發展了超過半個世紀！",
    timeline: [
      {
        year: "1950",
        title: "圖靈測試 (Turing Test)",
        content: "電腦科學之父艾倫·圖靈提出一個問題：「機器能思考嗎？」如果一台機器能透過對話讓你分不出來它是人還是機器，那它就通過了測試。",
        icon: "BrainCircuit"
      },
      {
        year: "1956",
        title: "AI 的誕生日",
        content: "一群科學家在達特茅斯會議 (Dartmouth Conference) 上正式創造了「人工智慧」這個詞。當時大家以為 20 年內機器就能像人一樣聰明！",
        icon: "Lightbulb"
      },
      {
        year: "1997",
        title: "深藍 (Deep Blue)",
        content: "IBM 的超級電腦「深藍」在西洋棋比賽中擊敗了人類世界冠軍 Garry Kasparov。這是電腦第一次在複雜智力遊戲中戰勝人類。",
        icon: "Swords"
      },
      {
        year: "2016",
        title: "AlphaGo 的震撼",
        content: "Google 的 AlphaGo 在圍棋——這個比西洋棋複雜無數倍的遊戲上，以 4:1 擊敗了世界棋王李世石，震驚了全世界。",
        icon: "Trophy"
      },
      {
        year: "2022~現在",
        title: "生成式 AI 大爆發",
        content: "ChatGPT、Midjourney 橫空出世。AI 不再只是會「分類」或「下棋」，它現在會「創作」了！寫詩、畫圖、寫程式，它樣樣精通。",
        icon: "Sparkles"
      }
    ]
  },
  ml: {
    title: "機器學習 (Machine Learning)",
    subtitle: "不用寫死規則，讓電腦自己找答案",
    intro: "以前的程式設計像是寫食譜，一步步告訴電腦怎麼做。機器學習則是給電腦看一堆料理的照片，讓它自己學會什麼是「美味」！",
    analogy: {
      title: "傳統程式 vs 機器學習",
      traditional: "你想教電腦認貓，你必須寫：「如果有尖耳朵、有鬍鬚、有尾巴...就是貓」。但如果有隻貓把耳朵縮起來怎麼辦？程式就當機了。",
      ml: "你直接給電腦看 1000 張貓的照片和 1000 張狗的照片。電腦自己分析這些照片，找出人類可能都沒注意到的特徵（比如毛流的方向），最後學會分辨貓和狗。"
    },
    types: [
      {
        name: "監督式學習 (Supervised Learning)",
        desc: "像老師在考試前給你附答案的練習題。你給電腦照片（題目）並告訴它這是一隻貓（答案）。電腦透過比對答案來學習。",
        example: "分類垃圾郵件、分辨水果"
      },
      {
        name: "非監督式學習 (Unsupervised Learning)",
        desc: "像沒有老師自習。給電腦一堆資料，不告訴它答案，讓它自己去分類或找規律。",
        example: "把購買習慣相似的顧客分群"
      },
      {
        name: "強化學習 (Reinforcement Learning)",
        desc: "像訓練狗狗。做對了給餅乾（獎勵），做錯了沒餅乾（懲罰）。電腦透過不斷嘗試錯誤來學習。",
        example: "訓練馬利歐玩遊戲、AlphaGo 下圍棋"
      }
    ]
  },
  dl: {
    title: "深度學習 (Deep Learning)",
    subtitle: "模仿人腦的魔法",
    intro: "深度學習是機器學習的一種，但它更厲害！它是模仿人類大腦的運作方式設計的。",
    concept: {
      title: "神經網路 (Neural Network)",
      content: "我們的大腦由數億個「神經元」組成，深度學習也有「類神經網路」。",
      layers: "它有很多「層」(Layers)。想像你在看一隻狗：\n第一層神經元可能只看到了「線條」；\n第二層把線條組合成「形狀」（圓形、三角形）；\n第三層認出了「眼睛」和「耳朵」；\n最後一層整合所有資訊，告訴你：「這是一隻狗！」"
    },
    funFact: "為什麼叫「深度」學習？因為這些神經網路的層數非常多，疊得很「深」，所以才叫深度學習！"
  }
};
