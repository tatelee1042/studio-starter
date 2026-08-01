# Design Workspace

Reference material and in-progress design exploration for this portfolio.
This folder is scratch space — nothing here ships. Production assets live in `src/assets/`.

## `inspiration/`

Reference images only. Gitignored — these aren't yours to publish, so they never get committed.

For every file you drop in `design/inspiration/`, add a row below:

| Filename | Source URL | What I like | What not to copy |
|---|---|---|---|
| `reference1.jpg` | https://desingbridge.vercel.app/posts/aesthetic-wallpaper-japanese-background/ | **Composition:** steep, descending perspective that pulls the eye through a layered neighborhood. **Typography:** none; the architectural linework carries the hierarchy. **Color temperature:** warm pink sky balanced by cool cyan and fresh green. **Texture:** hand-drawn outlines and lightly imperfect fills. **Density:** detailed edges around an open central path. **Mood:** curious, welcoming, and distinctly urban. | Do not reproduce the exact street, figure, buildings, railings, or telephone poles. Do not turn Japanese residential scenery into decorative shorthand. Carry forward the sense of depth, edge detail, and warm-cool balance instead. |
| `reference2.jpg` | https://www.instagram.com/p/CpPyHCmps4s/ | **Composition:** an intimate room framed by shelving and plants, with two stools creating a simple foreground rhythm. **Typography:** none; repeated horizontal blinds, tiles, and shelves provide structure. **Color temperature:** cool cyan and blue with soft pink highlights. **Texture:** smooth, softly glowing surfaces with a slight dreamlike haze. **Density:** moderate, with many small objects organized around a clear center. **Mood:** calm, personable, nostalgic, and lived-in. | Do not copy the room layout, stools, props, shelving, or exact lighting setup. Avoid using plants or retro electronics as arbitrary decoration. Preserve the approachable atmosphere and disciplined cyan-pink relationship. |
| `reference3.jpg` | https://www.reddit.com/r/80sdesign/comments/dwbqiw/neon_sunset_vaporwave_landscape/ | **Composition:** a dominant central sun, dark framing foliage, and a wireframe foreground that creates strong depth. **Typography:** none; the scene relies on iconic geometric hierarchy. **Color temperature:** hot magenta and yellow contrasted with electric cyan on near-black. **Texture:** scanlines, grain, and deliberately synthetic grid lines. **Density:** visually dense foreground with a simple focal center. **Mood:** energetic, retro-futurist, dramatic, and escapist. | Do not reproduce the exact sun, palm silhouettes, Tron mountains, wireframe landscape, or standard vaporwave poster formula. Avoid nostalgia that overwhelms recruiter readability. Carry forward the focal hierarchy, controlled glow, and layered depth. |
| `reference4.jpeg` | https://blenderartists.org/t/welcome-to-night-city/1319858 | **Composition:** low-angle city canyon with a centered human silhouette and luminous signs surrounding the focal path. **Typography:** signage at multiple scales creates environmental rhythm and urgency. **Color temperature:** dark, cool city base punctuated by neon purple, cyan, red, orange, and yellow. **Texture:** rain-slick surfaces, haze, bloom, grain, and reflected light. **Density:** extremely high, but organized around the central figure and street opening. **Mood:** cinematic, ambitious, immersive, and nocturnal. | Do not copy the city, character, cars, corporate marks, Japanese signs, or cyberpunk franchise language. Do not use Japanese characters as surface decoration disconnected from Tate's actual study. Preserve the depth, selective illumination, and sense of ambition without sacrificing professionalism or accessibility. |


## `directions/`

Your own exploratory work: palette drafts, generated mockups, anything you're allowed to commit because you made it or generated it. Tracked normally.

## Selected direction

### Neon Descent

- **Selected mock:** `design/directions/01-direction.png`
- **Locked palette artifact:** `design/directions/00-palette.png`
- **Viewport represented:** 1536 × 1024 desktop

Neon Descent is the approved homepage direction. It combines an airy illustrated-city sense of depth with precise retro-futurist geometry. The result should feel optimistic, ambitious, personable, and recruiter-readable rather than nostalgic or cyberpunk.

### Implementation handoff

#### Composition

- Use an asymmetric split hero.
- Keep the primary message in the upper-left portion of the viewport.
- Give the text block generous negative space and a readable line length.
- Place the signature city-grid pathway in the right side of the hero, then let it visually descend toward the next fold.
- Use a wide desktop navigation with Tate Lee on the left and the primary pages on the right.
- Begin the second fold with a horizontal evidence band rather than a collection of cards.
- Preserve a medium information density: energetic enough to feel distinctive, open enough for rapid recruiter scanning.

#### Hierarchy

- Lead with the eyebrow `ACCOUNTING + JAPANESE`.
- Make `Business, accounting, and Japanese.` the dominant statement.
- Follow immediately with the internship intent: `I’m Tate Lee, a student seeking an accounting internship.`
- Keep `ABOUT ME` as the primary action and `VIEW WORK` as the secondary action.
- Use `What I bring` as the second-fold heading.
- Present the three approved proof points with equal visual weight:
  - Accounting focus
  - Japanese double major
  - Personable, professional, friendly
- Treat `Projects coming soon.` as an honest supporting state, not as a featured accomplishment.

#### Imagery and signature motif

- Build the city-grid pathway as a code-native decorative motif rather than a raster background.
- Use thin perspective lines, stepped building-like outlines, and a central descending route.
- Use small signal nodes to introduce controlled moments of cyan, magenta, coral, and violet.
- Keep the motif visually separate from essential text and interactive controls.
- Treat the motif as decorative for accessibility and ensure it does not affect reading order.
- Reduce or simplify the motif on smaller screens rather than shrinking it into visual noise.

#### Typography

- Use **Bricolage Grotesque Semibold** for display headings and prominent navigation identity.
- Use **Atkinson Hyperlegible Regular** for body copy, labels, metadata, and controls.
- Use a large, high-contrast display scale with deliberate line breaks.
- Keep body copy comfortably readable and within the approved 65 to 75 character line length.
- Use uppercase sparingly for short navigational labels, the eyebrow, and action labels.

#### Locked palette

| Role | Name | Value |
|---|---|---|
| Background | Night Ink | `#050507` |
| Primary | Electric Cyan | `#35D9FF` |
| Accent 1 | Transit Magenta | `#FF4FB8` |
| Accent 2 | Signal Coral | `#FF6B57` |
| Support | Deep Violet | `#6246A8` |
| Text | Cloud White | `#F4F1FF` |

- Do not introduce yellow or green.
- Maintain WCAG AA contrast for all functional text and controls.
- Use neon colors as signals, rules, nodes, focus states, and restrained emphasis.
- Avoid large glowing text, uncontrolled bloom, or equal use of every accent.

#### Distinctive details

- A fine cyan rule beneath the active navigation item.
- Thin neutral dividers that organize the second fold without creating cards.
- Outlined actions with clear cyan and magenta role separation.
- Selective, soft glow around signal nodes and important pathway intersections.
- Subtle grain or scanline texture that never reduces text clarity.
- An open center path in the motif that reinforces forward movement and internship ambition.

### Inspiration, not literal specification

- Do not trace the exact skyline, route geometry, node positions, or perspective from the generated mock.
- Do not copy the calculator, book, profile, or construction-cone icons literally. Use simpler code-native marks only if they improve comprehension; text alone is acceptable.
- Do not reproduce exact mock dimensions, spacing, line breaks, or pixel positions without testing them responsively.
- Do not turn the city motif into a literal Japanese streetscape, vaporwave landscape, Tron environment, or cyberpunk scene.
- Do not add decorative Japanese characters, corporate signs, cars, people, or invented professional artifacts.
- Do not treat glow, grain, and scanlines as mandatory everywhere. They are atmosphere controls and should be reduced when they compete with recruiter clarity.
- Do not invent projects, employers, metrics, résumé claims, or personal opinions to fill the composition.
