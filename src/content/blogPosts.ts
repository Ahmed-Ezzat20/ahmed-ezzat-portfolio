export type LocalizedText = { en: string; ar: string };

export type BlogPost = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  category: LocalizedText;
  publishedAt: LocalizedText;
  readingTime: LocalizedText;
  featured?: boolean;
  sections: Array<{ heading: LocalizedText; paragraphs: LocalizedText[] }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'latency-is-a-product-decision', featured: true,
    title: { en: 'Latency is a product decision, not only a serving benchmark', ar: 'زمن التأخير قرار في المنتج، وليس مجرد رقم لأداء الخادم' },
    excerpt: { en: 'For conversational voice experiences, every millisecond shapes whether the system feels responsive, interruptible, and natural to use.', ar: 'في التجارب الصوتية الحوارية، تؤثر كل مللي ثانية في مدى استجابة النظام وقابليته للمقاطعة وطبيعية استخدامه.' },
    category: { en: 'Voice AI', ar: 'الذكاء الاصطناعي الصوتي' }, publishedAt: { en: 'August 2026', ar: 'أغسطس 2026' }, readingTime: { en: '4 min read', ar: 'قراءة 4 دقائق' },
    sections: [
      { heading: { en: 'Why response time changes the conversation', ar: 'لماذا يغيّر زمن الاستجابة طبيعة الحوار' }, paragraphs: [
        { en: 'In text interfaces, a small delay can be tolerable because the user can keep reading. In voice, silence is interpreted differently. It can sound like uncertainty, a failed connection, or a system that is simply not listening.', ar: 'في الواجهات النصية قد يكون التأخير البسيط مقبولاً لأن المستخدم يستطيع الاستمرار في القراءة. أما في الصوت، فيُفهم الصمت بصورة مختلفة؛ فقد يبدو تردداً أو اتصالاً فاشلاً أو نظاماً لا يستمع.' },
        { en: 'That is why I treat time-to-first-audio as a product metric. It affects turn-taking, user confidence, and how quickly a voice agent recovers from interruption. The goal is not to optimize a number in isolation; it is to make the interaction feel continuous.', ar: 'لهذا أتعامل مع زمن أول صوت كمؤشر للمنتج. فهو يؤثر في تبادل الأدوار وثقة المستخدم وسرعة استعادة الوكيل الصوتي للحوار بعد المقاطعة. الهدف ليس تحسين رقم منفصل، بل جعل التفاعل متصلاً.' }
      ] },
      { heading: { en: 'The system is more than the TTS model', ar: 'النظام أكبر من نموذج TTS' }, paragraphs: [
        { en: 'A fast model is only one part of a responsive voice pipeline. Text normalization, tokenization, voice activity detection, networking, audio buffering, and inference scheduling all contribute to perceived latency.', ar: 'النموذج السريع ليس سوى جزء من خط صوتي مستجيب. فتطبيع النص والتقسيم واكتشاف النشاط الصوتي والشبكات وتخزين الصوت المؤقت وجدولة الاستدلال، كلها تساهم في التأخير الذي يدركه المستخدم.' },
        { en: 'The useful question is therefore: where does the user wait? Measuring the full request path makes it possible to prioritize work that is visible in the actual conversation rather than work that only improves an offline benchmark.', ar: 'لذلك السؤال المفيد هو: أين ينتظر المستخدم؟ قياس المسار الكامل للطلب يسمح بتحديد أولويات العمل الذي يظهر أثره في المحادثة الحقيقية، بدلاً من العمل الذي يحسّن معياراً خارجياً فقط.' }
      ] },
      { heading: { en: 'What I optimize first', ar: 'ما الذي أبدأ بتحسينه' }, paragraphs: [
        { en: 'I start by separating time-to-first-audio from total generation time. A system can begin speaking quickly while continuing to synthesize a longer response in the background. This makes streaming a core design decision rather than an implementation detail.', ar: 'أبدأ بالفصل بين زمن أول صوت وزمن التوليد الكامل. يستطيع النظام البدء بالكلام سريعاً بينما يواصل توليد رد أطول في الخلفية. وهذا يجعل البث قرار تصميم أساسياً لا تفصيلاً تنفيذياً.' },
        { en: 'From there, the work becomes practical: simplify the text path, batch only when the product allows it, keep warm infrastructure ready, and profile the places where audio waits before reaching the listener.', ar: 'بعد ذلك يصبح العمل عملياً: تبسيط مسار النص، والتجميع فقط عندما يسمح المنتج بذلك، وإبقاء البنية التحتية دافئة، وتحليل المواضع التي ينتظر فيها الصوت قبل أن يصل إلى المستمع.' }
      ] }
    ]
  },
  {
    slug: 'arabic-speech-data-checklist',
    title: { en: 'A practical checklist before fine-tuning Arabic speech models', ar: 'قائمة عملية قبل تدريب نماذج الكلام العربية' },
    excerpt: { en: 'The most valuable speech dataset work happens before a training job begins: dialect intent, transcription policy, normalization, and quality review.', ar: 'أهم عمل في بيانات الكلام يحدث قبل بدء التدريب: هدف اللهجة، وسياسة النسخ، والتطبيع، ومراجعة الجودة.' },
    category: { en: 'Arabic NLP', ar: 'معالجة اللغة العربية' }, publishedAt: { en: 'July 2026', ar: 'يوليو 2026' }, readingTime: { en: '5 min read', ar: 'قراءة 5 دقائق' },
    sections: [
      { heading: { en: 'Start with the speech you actually need', ar: 'ابدأ بالكلام الذي تحتاجه فعلاً' }, paragraphs: [
        { en: 'Arabic is not a single deployment setting. A model meant for Saudi Arabic voice agents has different requirements from one intended for Egyptian entertainment content or Modern Standard Arabic narration.', ar: 'العربية ليست بيئة نشر واحدة. فالنموذج المخصص للوكلاء الصوتيين باللهجة السعودية له متطلبات مختلفة عن نموذج لمحتوى ترفيهي مصري أو لسرد العربية الفصحى.' },
        { en: 'Before collecting or filtering data, I define the desired dialect, domain, speaking style, microphone conditions, and intended interaction length. This makes trade-offs visible early and prevents a large but unfocused corpus from dictating product behavior.', ar: 'قبل جمع البيانات أو تنقيتها، أحدد اللهجة والمجال وأسلوب الحديث وظروف التسجيل وطول التفاعل المقصود. هذا يوضح المفاضلات مبكراً ويمنع مجموعة بيانات كبيرة وغير مركزة من فرض سلوك المنتج.' }
      ] },
      { heading: { en: 'Make text policy explicit', ar: 'اجعل سياسة النص واضحة' }, paragraphs: [
        { en: 'Arabic text requires deliberate decisions around diacritics, number expansion, mixed-language phrases, abbreviations, and regional pronunciation. Inconsistent text policy becomes inconsistent acoustic supervision.', ar: 'النص العربي يحتاج قرارات واعية بشأن التشكيل وتوسيع الأرقام والعبارات المختلطة لغوياً والاختصارات والنطق الإقليمي. سياسة النص غير المتسقة تتحول إلى إشراف صوتي غير متسق.' },
        { en: 'A small written normalization policy is more useful than a collection of one-off fixes. It gives annotators and engineers a shared reference and makes new data easier to audit.', ar: 'سياسة تطبيع مكتوبة ومختصرة أنفع من مجموعة إصلاحات فردية. فهي تمنح المراجعين والمهندسين مرجعاً مشتركاً وتجعل تدقيق البيانات الجديدة أسهل.' }
      ] },
      { heading: { en: 'Review quality as a pipeline', ar: 'راجع الجودة كخط عمل متكامل' }, paragraphs: [
        { en: 'Quality control should not depend on a final manual pass. I prefer staged checks: source review, transcript confidence, alignment or duration checks, duplicate detection, and targeted listening samples.', ar: 'لا ينبغي أن تعتمد مراقبة الجودة على مراجعة يدوية أخيرة فقط. أفضل فحوصات مرحلية: مراجعة المصدر، وثقة النص، وفحص المحاذاة أو المدة، واكتشاف التكرار، وعينات استماع موجهة.' },
        { en: 'The objective is not perfect data. It is a dataset where the remaining errors are understood, measurable, and unlikely to dominate the behavior of the deployed model.', ar: 'الهدف ليس بيانات مثالية؛ بل مجموعة بيانات تكون أخطاؤها المتبقية مفهومة وقابلة للقياس ومن غير المرجح أن تهيمن على سلوك النموذج المنشور.' }
      ] }
    ]
  },
  {
    slug: 'designing-voice-agents-for-interruption',
    title: { en: 'Voice agents become more useful when users can interrupt them', ar: 'يصبح الوكلاء الصوتيون أكثر فائدة حين يستطيع المستخدم مقاطعتهم' },
    excerpt: { en: 'Barge-in is not merely a feature toggle. It is a coordination problem across voice activity detection, speech output, session state, and conversation design.', ar: 'المقاطعة ليست مجرد خيار تشغيل. إنها مشكلة تنسيق بين اكتشاف النشاط الصوتي وإخراج الكلام وحالة الجلسة وتصميم المحادثة.' },
    category: { en: 'Engineering Notes', ar: 'ملاحظات هندسية' }, publishedAt: { en: 'June 2026', ar: 'يونيو 2026' }, readingTime: { en: '4 min read', ar: 'قراءة 4 دقائق' },
    sections: [
      { heading: { en: 'Natural conversations are not one-way', ar: 'المحادثات الطبيعية ليست أحادية الاتجاه' }, paragraphs: [
        { en: 'People interrupt, correct themselves, add context, and change their mind mid-sentence. A voice agent that keeps speaking through every interruption feels less like a collaborator and more like a recording.', ar: 'المستخدمون يقاطعون ويصححون أنفسهم ويضيفون سياقاً ويغيرون رأيهم في منتصف الجملة. الوكيل الذي يواصل الكلام رغم كل مقاطعة يبدو أقل تعاوناً وأكثر شبهاً بالتسجيل.' },
        { en: 'Supporting barge-in allows the user to reclaim the conversational turn. It is one of the small capabilities that makes an agent feel more respectful and easier to control.', ar: 'دعم المقاطعة يسمح للمستخدم باستعادة دوره في المحادثة. وهي من القدرات الصغيرة التي تجعل الوكيل أكثر احتراماً وأسهل في التحكم.' }
      ] },
      { heading: { en: 'The pipeline needs a shared state', ar: 'خط العمل يحتاج حالة مشتركة' }, paragraphs: [
        { en: 'Reliable interruption handling connects several components: VAD must detect new user speech, playback must stop cleanly, the transcript must be retained correctly, and the orchestration layer needs to decide what context is still valid.', ar: 'معالجة المقاطعة الموثوقة تربط عدة مكونات: يجب أن يكتشف VAD كلام المستخدم الجديد، وأن يتوقف التشغيل بسلاسة، وأن يُحفظ النص بصورة صحيحة، وأن تقرر طبقة التنسيق أي سياق ما زال صالحاً.' },
        { en: 'Treating these as independent modules often creates edge cases: the agent speaks after it was interrupted, the user’s correction is lost, or the next response includes text that was never heard.', ar: 'معاملة هذه المكونات كأجزاء مستقلة غالباً ما تنتج حالات طرفية: يتكلم الوكيل بعد مقاطعته، أو يضيع تصحيح المستخدم، أو يتضمن الرد التالي نصاً لم يسمعه المستخدم أصلاً.' }
      ] },
      { heading: { en: 'A simple design principle', ar: 'مبدأ تصميم بسيط' }, paragraphs: [
        { en: 'Optimize for graceful recovery, not only detection. The best outcome after an interruption is that the system acknowledges the new turn quickly and responds using the context the user actually experienced.', ar: 'حسّن الاستعادة السلسة، لا الاكتشاف فقط. أفضل نتيجة بعد المقاطعة أن يعترف النظام بالدور الجديد سريعاً ويستجيب مستخدماً السياق الذي اختبره المستخدم فعلاً.' },
        { en: 'This keeps the engineering objective tied to the person using the system rather than the individual components inside it.', ar: 'وهذا يبقي الهدف الهندسي مرتبطاً بالشخص الذي يستخدم النظام بدلاً من ارتباطه بالمكونات الفردية داخله.' }
      ] }
    ]
  }
];
