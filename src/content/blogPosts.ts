export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Voice AI' | 'Arabic NLP' | 'Engineering Notes';
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'latency-is-a-product-decision',
    title: 'Latency is a product decision, not only a serving benchmark',
    excerpt: 'For conversational voice experiences, every millisecond shapes whether the system feels responsive, interruptible, and natural to use.',
    category: 'Voice AI',
    publishedAt: 'August 2026',
    readingTime: '4 min read',
    featured: true,
    sections: [
      {
        heading: 'Why response time changes the conversation',
        paragraphs: [
          'In text interfaces, a small delay can be tolerable because the user can keep reading. In voice, silence is interpreted differently. It can sound like uncertainty, a failed connection, or a system that is simply not listening.',
          'That is why I treat time-to-first-audio as a product metric. It affects turn-taking, user confidence, and how quickly a voice agent recovers from interruption. The goal is not to optimize a number in isolation; it is to make the interaction feel continuous.'
        ]
      },
      {
        heading: 'The system is more than the TTS model',
        paragraphs: [
          'A fast model is only one part of a responsive voice pipeline. Text normalization, tokenization, voice activity detection, networking, audio buffering, and inference scheduling all contribute to perceived latency.',
          'The useful question is therefore: where does the user wait? Measuring the full request path makes it possible to prioritize work that is visible in the actual conversation rather than work that only improves an offline benchmark.'
        ]
      },
      {
        heading: 'What I optimize first',
        paragraphs: [
          'I start by separating time-to-first-audio from total generation time. A system can begin speaking quickly while continuing to synthesize a longer response in the background. This makes streaming a core design decision rather than an implementation detail.',
          'From there, the work becomes practical: simplify the text path, batch only when the product allows it, keep warm infrastructure ready, and profile the places where audio waits before reaching the listener.'
        ]
      }
    ]
  },
  {
    slug: 'arabic-speech-data-checklist',
    title: 'A practical checklist before fine-tuning Arabic speech models',
    excerpt: 'The most valuable speech dataset work happens before a training job begins: dialect intent, transcription policy, normalization, and quality review.',
    category: 'Arabic NLP',
    publishedAt: 'July 2026',
    readingTime: '5 min read',
    sections: [
      {
        heading: 'Start with the speech you actually need',
        paragraphs: [
          'Arabic is not a single deployment setting. A model meant for Saudi Arabic voice agents has different requirements from one intended for Egyptian entertainment content or Modern Standard Arabic narration.',
          'Before collecting or filtering data, I define the desired dialect, domain, speaking style, microphone conditions, and intended interaction length. This makes trade-offs visible early and prevents a large but unfocused corpus from dictating product behavior.'
        ]
      },
      {
        heading: 'Make text policy explicit',
        paragraphs: [
          'Arabic text requires deliberate decisions around diacritics, number expansion, mixed-language phrases, abbreviations, and regional pronunciation. Inconsistent text policy becomes inconsistent acoustic supervision.',
          'A small written normalization policy is more useful than a collection of one-off fixes. It gives annotators and engineers a shared reference and makes new data easier to audit.'
        ]
      },
      {
        heading: 'Review quality as a pipeline',
        paragraphs: [
          'Quality control should not depend on a final manual pass. I prefer staged checks: source review, transcript confidence, alignment or duration checks, duplicate detection, and targeted listening samples.',
          'The objective is not perfect data. It is a dataset where the remaining errors are understood, measurable, and unlikely to dominate the behavior of the deployed model.'
        ]
      }
    ]
  },
  {
    slug: 'designing-voice-agents-for-interruption',
    title: 'Voice agents become more useful when users can interrupt them',
    excerpt: 'Barge-in is not merely a feature toggle. It is a coordination problem across voice activity detection, speech output, session state, and conversation design.',
    category: 'Engineering Notes',
    publishedAt: 'June 2026',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Natural conversations are not one-way',
        paragraphs: [
          'People interrupt, correct themselves, add context, and change their mind mid-sentence. A voice agent that keeps speaking through every interruption feels less like a collaborator and more like a recording.',
          'Supporting barge-in allows the user to reclaim the conversational turn. It is one of the small capabilities that makes an agent feel more respectful and easier to control.'
        ]
      },
      {
        heading: 'The pipeline needs a shared state',
        paragraphs: [
          'Reliable interruption handling connects several components: VAD must detect new user speech, playback must stop cleanly, the transcript must be retained correctly, and the orchestration layer needs to decide what context is still valid.',
          'Treating these as independent modules often creates edge cases: the agent speaks after it was interrupted, the user’s correction is lost, or the next response includes text that was never heard.'
        ]
      },
      {
        heading: 'A simple design principle',
        paragraphs: [
          'Optimize for graceful recovery, not only detection. The best outcome after an interruption is that the system acknowledges the new turn quickly and responds using the context the user actually experienced.',
          'This keeps the engineering objective tied to the person using the system rather than the individual components inside it.'
        ]
      }
    ]
  }
];
