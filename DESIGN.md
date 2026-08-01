---
name: Tate Lee Portfolio
description: A recruiter-readable accounting internship portfolio with a precise cosmic signal system.
colors:
  night-ink: "#050507"
  electric-cyan: "#35D9FF"
  transit-magenta: "#FF4FB8"
  signal-coral: "#FF6B57"
  deep-violet: "#6246A8"
  cloud-white: "#F4F1FF"
  cloud-dim: "#B8B6C7"
  night-raised: "#101329"
  night-border: "#343750"
  scanline: "#0D1024"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 4.7vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.5
    letterSpacing: "0.01em"
  label:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "8px"
  action: "2px"
spacing:
  none: "0"
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "96px"
  3xl: "128px"
components:
  action-primary:
    textColor: "{colors.electric-cyan}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "12px 24px"
    height: "48px"
  action-primary-hover:
    backgroundColor: "{colors.electric-cyan}"
    textColor: "{colors.night-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "12px 24px"
    height: "48px"
  action-secondary:
    textColor: "{colors.transit-magenta}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "12px 24px"
    height: "48px"
  action-secondary-hover:
    backgroundColor: "{colors.transit-magenta}"
    textColor: "{colors.night-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "12px 24px"
    height: "48px"
  closing-action:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.cloud-white}"
    padding: "48px"
---

# Design System: Tate Lee Portfolio

## Overview

**Creative North Star: "Neon Descent"**

Neon Descent is a dark, cosmic signal system built for a recruiter evaluating an accounting internship candidate. The page pairs an expansive NASA Crab Nebula composition with precise typography, generous negative space, thin route-like rules, and restrained neon accents. It should feel ambitious and personable while remaining direct enough to understand in ten seconds.

The system is mobile-first and flat by default. A centered page frame, readable measures, divider-led sections, and a single 48rem layout transition keep evaluation effortless. Color marks actions, navigation state, focus, and evidence structure; it is never a substitute for hierarchy or credible content.

It must never drift into a literal Japanese streetscape, vaporwave sun, Tron landscape, cyberpunk environment, generic glass UI, or decorative effects that obscure recruiter clarity.

**Key Characteristics:**

- Dark edge-matched cosmic imagery beside direct recruiter copy.
- Bricolage Grotesque display type paired with Atkinson Hyperlegible body type.
- Fine cyan, magenta, coral, and violet signals on a near-black field.
- Square, outlined actions with brief color inversion on interaction.
- Flat sections separated by lines, spacing, and tonal shifts rather than cards.
- Semantic HTML, visible focus, generous touch targets, and reduced-motion support.

## Colors

The full palette behaves like illuminated wayfinding on Night Ink: vivid hues are scarce signals, while Cloud White and Cloud Dim carry the reading experience.

### Primary

- **Electric Cyan:** Primary actions, active navigation rules, evidence accents, and interactive emphasis.

### Secondary

- **Transit Magenta:** Secondary actions, directional arrows, and alternate evidence signals.

### Tertiary

- **Signal Coral:** Focus outlines, internship-status nodes, and the closing signal glow.
- **Deep Violet:** Supporting geometry and quiet depth marks.

### Neutral

- **Night Ink:** Canonical page background, matched to the perimeter of the hero artwork.
- **Night Raised:** Subtle closing-section surface; never a default card fill.
- **Night Border:** Dividers, outlines, and quiet link underlines.
- **Scanline:** Low-contrast hero texture only.
- **Cloud White:** Primary text and headings.
- **Cloud Dim:** Supporting copy, captions, metadata, and footer text.

### Named Rules

**The Signal Color Rule.** Cyan, magenta, coral, and violet communicate action, state, or structure. Never spread them across large glowing text fields.

**The Edge Match Rule.** Night Ink must meet the dark edge of the Crab Nebula without a visible frame or recoloring the artwork.

## Typography

**Display Font:** Bricolage Grotesque (system-ui and sans-serif fallback)  
**Body Font:** Atkinson Hyperlegible (system-ui and sans-serif fallback)

**Character:** The display face is compact, confident, and slightly mechanical. The body face is open and highly legible, keeping the cosmic atmosphere professional and accessible.

### Hierarchy

- **Display** (600, fluid hero scale, 1.02 line-height): Hero statements only; tightly led and balanced within a 15ch measure.
- **Headline** (600, fluid section scale, 1.2 line-height): Major homepage sections and the closing internship statement.
- **Title** (600, 1.5rem, 1.2 line-height): Evidence items and content-page subheads.
- **Body** (400, 1rem, 1.5 line-height): Default reading text; cap long-form copy at 65ch.
- **Supporting Body** (400, 1.25rem, 1.5 line-height): Hero introductions and concise section statements.
- **Label** (700, 0.875rem, 0.12em tracking): Short uppercase actions and system labels only.
- **Caption** (400, 0.75rem, 1.5 line-height): Image credit and compact metadata.

### Named Rules

**The Two-Voice Rule.** Bricolage Grotesque makes the impression; Atkinson Hyperlegible carries information. Do not introduce a third type family.

**The Label Restraint Rule.** Uppercase tracked text is reserved for navigation, actions, and short labels. It is forbidden for sentences or body copy.

## Elevation

This is a flat system. It has no general shadow scale and no floating cards. Depth comes from Night Raised tonal layering, thin Night Border rules, the hero scanline texture, negative space, and the unframed Crab Nebula. The only glow is the small Signal Coral status node used in the homepage closing action.

### Shadow Vocabulary

- **Signal glow** (`0 0 16px Signal Coral`): A zero-offset glow on the small closing status node only.

### Named Rules

**The Flat-by-Default Rule.** Surfaces stay flush and border-led. Never add ambient drop shadows, glass blur, or decorative elevation.

**The One Glow Rule.** Glow belongs to a small signal node, never to headings, panels, imagery, or entire actions.

## Components

### Primary and Secondary Actions

- **Shape:** Nearly square corners using the action radius, with a fine one-pixel outline and a minimum 48px target.
- **Primary:** Electric Cyan text and border on a transparent background; used for the preferred next step.
- **Secondary:** Transit Magenta text and border on a transparent background; used for a meaningful alternate route.
- **Hover / Focus:** Invert to a solid signal-color field with Night Ink text. Global focus adds a two-pixel Signal Coral outline offset by four pixels.
- **Motion:** Color changes use the fast 160ms exponential ease-out; reduced-motion preferences remove the transition.

### Text Links

- **Style:** Compact uppercase label, 700 weight, wide tracking, Electric Cyan text, and a Transit Magenta arrow.
- **Behavior:** The arrow shifts four pixels horizontally on hover or keyboard focus; the text remains explicit without relying on the arrow.

### Shared Navigation

- **Structure:** Tate Lee wordmark on the left and Home, Work, About on the right inside the shared page frame.
- **Typography:** Uppercase label treatment with minimum 48px targets.
- **Active state:** A fine Electric Cyan rule spans the current navigation item.
- **Responsive behavior:** Links wrap when needed; spacing expands at the 48rem breakpoint.

### Hero

- **Composition:** Recruiter message on the left and the locally stored NASA Crab Nebula on the right at tablet and desktop widths; a single vertical sequence on mobile.
- **Texture:** A subtle Scanline repeating gradient sits behind the section.
- **Imagery:** Artwork is eager-loaded, responsive, unframed, unrecolored, and followed by a visible source credit.
- **Actions:** About is primary in the hero; Work is secondary.

### Evidence Band

- **Structure:** An ordered list of three factual qualifications, stacked on mobile and arranged as equal columns from 48rem.
- **Detail:** Each item receives a short top signal rule and numbered label; the signal rotates through cyan, magenta, and coral.
- **Content:** Evidence must be factual and approved. Personality claims, invented metrics, and unsupported experience are forbidden.

### Closing Action

- **Structure:** A full-width Night Raised section with a coral signal node, large internship statement, supporting sentence, and primary email action.
- **Responsive behavior:** One column on mobile; signal, message, and action align in a row from 48rem.
- **Purpose:** This is the homepage conversion point. It must provide a direct recruiter contact path.

### Shared Footer

- **Structure:** Internship availability with a coral status node, repeated primary navigation, and a quiet copyright line.
- **Style:** Night Border top rule, Cloud Dim supporting text, and the same label treatment as the header navigation.
- **Accessibility:** Navigation has its own label; links preserve the minimum target height.

## Do's and Don'ts

### Do:

- **Do** make Tate's accounting internship intent understandable within ten seconds.
- **Do** use the actual tokens in `src/styles/tokens.css`; every color, font size, spacing value, and radius comes from that file.
- **Do** keep the full palette role-based: cyan for primary action, magenta for secondary action, coral for focus and status, and violet for depth.
- **Do** keep body copy within readable measures and use Atkinson Hyperlegible for information.
- **Do** use thin rules, spacing, and tonal layering to organize sections.
- **Do** preserve semantic HTML, WCAG AA contrast, visible focus, 48px interactive targets, descriptive alt text, and reduced-motion behavior.
- **Do** keep production imagery under `src/assets/`, load the hero eagerly, and show a visible NASA credit.
- **Do** keep Home, Work, one case-study template, and About as the visible site structure.

### Don't:

- **Don't** communicate personal opinions, thought leadership, lifestyle commentary, or unsupported claims.
- **Don't** imply experience, outcomes, ownership, employers, projects, or metrics Tate cannot substantiate.
- **Don't** add Thoughts, Consulting, or Now to the visible navigation.
- **Don't** literalize a Japanese streetscape, vaporwave sun, Tron landscape, or cyberpunk environment.
- **Don't** add decorative Japanese characters, yellow, green, glassmorphism, gradient text, excessive glow, or effects that reduce recruiter clarity.
- **Don't** recolor, frame, hotlink, or replace the approved Crab Nebula artwork with a webpage screenshot.
- **Don't** use rounded card grids, ambient shadows, colored side-stripe borders, or repeated decorative uppercase kickers.
- **Don't** hardcode page-level color, font-size, spacing, or radius values outside `src/styles/tokens.css`.
