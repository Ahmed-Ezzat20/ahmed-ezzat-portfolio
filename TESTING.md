# Portfolio Verification Notes

## Automated checks

- `npm test` passed on 2026-08-16: 4 component tests verified the updated Voice AI hero copy, CV-aligned project cards, and the GitHub, LinkedIn, and email destinations.
- `npm run build` passed on 2026-08-16 with Vite production output generated successfully.

## Local interface review

The portfolio was reviewed locally at `http://localhost:8080/ahmed-ezzat-portfolio/`. The terminal/hacker design rendered correctly with a black background, neon green and cyan accents, monospace typography, terminal-window panels, command-line section headers, responsive navigation, and the animated role typing treatment.

The visual review confirmed that the hero, About Me section, structured skills list, experience log, selected projects, and contact terminal use a cohesive visual system. The LinkedIn hero button was clicked and navigated directly to `https://www.linkedin.com/in/mrezzat/`.

## Content review

The redesigned page reflects the supplied CV, including the hams.ai TTS Lead role, 13.6k speech-training-hours metric, 154ms time-to-first-audio result, F5-TTS/TensorRT specialization, GenArabia work, selected Voice AI projects, publication, and Manus/IEEE volunteering.

## Live deployment review

The production portfolio was published to the `gh-pages` branch and verified at `https://ahmed-ezzat20.github.io/ahmed-ezzat-portfolio/?v=terminal-2026`. The live hero rendered the terminal theme and exposed the GitHub, LinkedIn, email, Scholar, experience, contact, and CV controls. The CV button was clicked successfully and opened `https://ahmed-ezzat20.github.io/ahmed-ezzat-portfolio/Ahmed_Ezzat_CV.pdf`, confirming that the supplied two-page CV is publicly accessible from the portfolio.

The live LinkedIn control was also clicked successfully. LinkedIn presented its public authentication wall, while preserving the intended destination in `sessionRedirect=https://www.linkedin.com/in/mrezzat/`; this verifies that the portfolio now uses the confirmed LinkedIn URL rather than the prior incorrect profile.

## Blog verification

The local Voice AI Signal portfolio was reviewed after adding the blog section. The page displays a dedicated **Field Notes** area with a featured Voice AI article, two additional article cards, topic and reading-time metadata, and a visual waveform treatment that matches the overall portfolio design. The navigation includes a Blog destination. Automated interaction coverage verified that selecting **Read note** opens the featured article reader and displays its article content.

The production site was checked at `https://ahmed-ezzat20.github.io/ahmed-ezzat-portfolio/?v=blog-2026`. The Blog navigation item and the complete Field Notes blog index are live, including the featured article, category metadata, article cards, and the authoring guidance panel. The article-reader interaction is also covered by the automated component suite.

## Dedicated publication routes

The new editorial endpoints were reviewed locally. `/blog` renders a clean Field Notes landing page with a featured story and linked story index. `/blog/latency-is-a-product-decision` renders a focused long-form reading page with editorial serif typography, author/date/reading-time metadata, a share control, and a LinkedIn follow call-to-action. The visual layout matches the requested Medium-style reading experience while retaining Ahmed’s Voice AI visual identity.

The GitHub Pages deployment was verified directly at both shareable endpoints: `/blog` and `/blog/latency-is-a-product-decision`. The index loaded with the Field Notes editorial layout, and the individual article loaded with its correct article-specific browser title and Medium-style long-form reading view. This confirms that direct route access works through the GitHub Pages SPA fallback.

## Arabic RTL review

The local portfolio was opened with `?lang=ar`. Arabic labels, RTL navigation, Arabic typography, and inline English technical terms such as TTS, ASR, TensorRT, and GPU rendered correctly. The Arabic hero waveform panel remains present in the RTL grid (measured as a visible 489.6 × 380px panel); at the first viewport height it begins below the text area on the left, consistent with the responsive two-column layout.

The Arabic publication was also reviewed locally at `/blog?lang=ar` and at an Arabic article URL. Both pages render a right-to-left editorial layout with Arabic headings and body text. Article links correctly retain `?lang=ar`, while embedded technical language such as Voice AI, TTS, ASR, TensorRT, GPU, and LinkedIn remains readable in context.
