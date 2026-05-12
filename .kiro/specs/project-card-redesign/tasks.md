# Implementation Plan: Project Card Redesign

## Overview

Transform the existing simple project list into a modern, full-width horizontal split card layout. Implementation proceeds from data model extension, through validation utilities, to the new ProjectCard component with GSAP animations and responsive design.

## Tasks

- [x] 1. Extend project data model and add validation
  - [x] 1.1 Define the ExtendedProject interface and update projectData.ts
    - Add `ProjectStat` interface with `value` (string, max 20 chars) and `label` (string, max 50 chars)
    - Add `ExtendedProject` interface extending existing fields with `number`, `company`, `year`, `headline`, `tags`, `stats`, `bgColor`
    - Update the `projectData` array to use `ExtendedProject` type with sample data for all existing projects
    - Preserve all existing fields (`id`, `title`, `description`, `image`, `url`)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8_

  - [x] 1.2 Create project validation utility
    - Create `src/lib/project-validation.ts`
    - Implement `validateProjectNumber(number: string): boolean` — accepts only two-digit zero-padded strings matching `/^\d{2}$/`
    - Implement `validateYear(year: string): boolean` — accepts "YYYY" or "YYYY - YYYY" format matching `/^\d{4}(\s-\s\d{4})?$/`
    - Implement `validateProject(project: ExtendedProject): ValidationResult` — validates all field constraints (company <= 100 chars, headline <= 150 chars, tags 1-10 items each <= 30 chars, stats 1-6 items with value <= 20 and label <= 50)
    - Export `ValidationResult` interface with `valid: boolean` and `errors: string[]`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

  - [ ]\* 1.3 Write property tests for validation utility
    - Install `fast-check` as a dev dependency
    - Set up test file `src/lib/__tests__/project-validation.test.ts`
    - **Property 1: Project number format validation** — generate random strings and verify acceptance iff matching `/^\d{2}$/`
    - **Property 2: String field length constraints** — generate random-length strings and verify company accepted iff <= 100, headline accepted iff <= 150
    - **Property 3: Year format validation** — generate random strings and verify acceptance iff matching "YYYY" or "YYYY - YYYY"
    - **Property 4: Tags array constraint validation** — generate arrays of varying lengths/item sizes and verify acceptance iff 1-10 items each <= 30 chars
    - **Property 5: Stats array constraint validation** — generate stat arrays and verify acceptance iff 1-6 items with value <= 20 and label <= 50
    - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6**

- [x] 2. Checkpoint - Ensure data model and validation are solid
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Implement the ProjectCard component
  - [x] 3.1 Create the ProjectCard component with horizontal split layout
    - Create `src/components/project-card.tsx`
    - Accept props: `project: ExtendedProject` and `index: number`
    - Implement conditional wrapper: `<a>` with `target="_blank"` and `rel="noopener noreferrer"` when `url` exists, `<article>` otherwise
    - Implement left content panel with vertical order: project number, company/year row, headline, tag badges (max 5), stat metrics (max 4)
    - Implement right image panel using Next.js `Image` component with `object-fit: cover` and `bgColor` background
    - Add Navigation_Arrow in bottom-right corner of image area (12px from edges)
    - Use Tailwind responsive classes: single column on mobile (`< 768px`), 70/30 split on tablet, 50/50 on desktop
    - Apply border-radius using `rounded-lg`, padding 24px+ on left panel, 0px on image area
    - Use `font-primary` (NeutralFace) for headline, `font-sans` (Inter) for body text
    - Style Tag_Badge: uppercase, 12px font, 12px horizontal / 4px vertical padding, 1px solid border
    - Style Stat_Metric: value bold 24px+ font, label normal 12px font
    - Hide tags area when array is empty; hide stats area when array is empty
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 5.1, 5.2, 5.5, 5.6, 6.1, 6.2, 6.3, 6.4, 6.5_

  - [x] 3.2 Add hover effects and keyboard accessibility
    - Add hover transition (scale or shadow) with 200-400ms duration on the card
    - Add Navigation_Arrow hover animation (rotation max 45deg or translate max 8px) with 200-400ms duration
    - Add `tabIndex={0}` for keyboard focus
    - Add `onKeyDown` handler for Enter key to trigger navigation (when URL exists)
    - Add visible focus indicator: `focus-visible:outline` with minimum 2px outline
    - _Requirements: 5.1, 5.3, 5.4, 8.4_

  - [x] 3.3 Add image error handling and alt text
    - Implement `onError` handler on the Image component
    - On error, replace image with placeholder div maintaining same dimensions, neutral background, and centered `ImageOff` icon from lucide-react
    - Set alt text to include project title (max 125 characters total)
    - _Requirements: 4.6, 8.3, 8.6_

  - [ ]\* 3.4 Write property tests for ProjectCard rendering logic
    - **Property 6: Tag display limit** — generate projects with 1-10 tags, verify exactly min(N, 5) tag badges rendered
    - **Property 7: Stat display limit** — generate projects with 1-6 stats, verify exactly min(N, 4) stat metrics rendered
    - **Property 8: Wrapper element determined by URL presence** — generate projects with/without URL, verify correct wrapper element
    - **Property 9: Alt text correctness** — generate projects with various titles, verify alt text contains title and is <= 125 chars
    - **Validates: Requirements 3.5, 3.6, 5.1, 5.5, 5.6, 8.3**

- [x] 4. Checkpoint - Ensure ProjectCard renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Refactor Projects section and add GSAP animations
  - [x] 5.1 Refactor the Projects component to use ProjectCard
    - Rewrite `src/components/projects.tsx`
    - Remove the hover-preview floating image logic (previewRef, handleMouseEnter, handleMouseLeave, image cache)
    - Import and render `ProjectCard` components in a vertical stack with 32px+ gap
    - Import `ExtendedProject` data from updated `projectData.ts`
    - Keep the section header ("Selected Projects" / "Works") and "See All" footer
    - _Requirements: 6.6_

  - [x] 5.2 Add GSAP ScrollTrigger entrance animations
    - Import `useGSAP` from `@gsap/react` and `ScrollTrigger` from `gsap/ScrollTrigger`
    - Register ScrollTrigger plugin
    - Set initial state: `opacity: 0`, `translateY: 50px` on each card
    - Animate to `opacity: 1`, `translateY: 0` with duration 0.6s
    - Configure ScrollTrigger: start at "top 80%" (20% of card visible), stagger 0.15s between cards, `once: true` to prevent re-triggering
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ]\* 5.3 Write unit tests for Projects section integration
    - Verify all project cards render from data
    - Verify GSAP ScrollTrigger is registered
    - Verify initial animation state (opacity 0, translateY 50px)
    - _Requirements: 7.1, 7.3_

- [x] 6. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The project uses TypeScript, Next.js 15, Tailwind CSS 4, GSAP with @gsap/react, and lucide-react for icons
- `fast-check` will need to be installed for property-based testing (along with a test runner like Vitest or Jest if not already configured)

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["1.3", "3.1"] },
    { "id": 3, "tasks": ["3.2", "3.3"] },
    { "id": 4, "tasks": ["3.4", "5.1"] },
    { "id": 5, "tasks": ["5.2"] },
    { "id": 6, "tasks": ["5.3"] }
  ]
}
```
