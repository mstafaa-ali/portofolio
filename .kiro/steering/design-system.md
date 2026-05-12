---
inclusion: auto
---

# Design System & Styling Guidelines

Panduan ini menjadi acuan untuk semua styling dan visual decisions di portfolio website ini. Semua code yang di-generate harus konsisten dengan guideline berikut.

## Design Philosophy

- **Minimalis**: Tidak ada elemen yang berlebihan. Setiap elemen punya tujuan.
- **Elegan**: Warm, sophisticated, seperti portfolio arsitektur/desain premium.
- **Whitespace-driven**: Biarkan konten bernafas. Gunakan spacing yang generous.
- **Subtle interactions**: Animasi dan hover state harus halus, tidak mencolok.

## Color Palette (Warm Neutral)

| Role                | Hex       | Tailwind Class                    | Usage                                     |
| ------------------- | --------- | --------------------------------- | ----------------------------------------- |
| Background          | `#F2EDE6` | `bg-[#F2EDE6]`                    | Section backgrounds, page bg              |
| Foreground/Text     | `#1A1A1A` | `text-[#1A1A1A]`                  | Headings, primary text                    |
| Muted Text          | `#6B6560` | `text-[#6B6560]`                  | Subtitles, secondary text, descriptions   |
| Accent              | `#A39080` | `text-[#A39080]` / `bg-[#A39080]` | Hover states, decorative elements, labels |
| Border/Divider      | `#E0DBD5` | `border-[#E0DBD5]`                | Borders, outlines, separators             |
| Dark (for contrast) | `#1A1A1A` | `bg-[#1A1A1A]`                    | Sparingly, for high-contrast sections     |
| Light on dark       | `#F2EDE6` | `text-[#F2EDE6]`                  | Text on dark backgrounds                  |

### Color Rules

- JANGAN gunakan `text-black` atau `text-white` murni. Gunakan `#1A1A1A` dan `#F2EDE6`.
- Background section utama selalu `#F2EDE6` kecuali ada kebutuhan kontras.
- Border/divider selalu `#E0DBD5`, bukan gray default Tailwind.
- Hover state buttons: `hover:bg-[#A39080] hover:text-white hover:border-[#A39080]`.

## Typography

### Font Stack

| Font                      | Variable         | Usage                                                          |
| ------------------------- | ---------------- | -------------------------------------------------------------- |
| NeutralFace               | `font-primary`   | Body text, subtitles, navbar, labels                           |
| Clash Display (Fontshare) | `font-clash`     | Hero heading nama (display, large text) — MASIH DALAM EVALUASI |
| Zodiak                    | `font-secondary` | Available for special use cases                                |
| Inter                     | `font-sans`      | Fallback, system text                                          |

### Typography Rules

- Semua text uppercase untuk headings dan labels: `uppercase`
- Body/description text: `font-light` atau `font-extralight`
- Tracking widest untuk labels kecil: `tracking-widest`
- Heading nama (hero): `font-semibold` atau `font-bold`, size `text-5xl xl:text-[12rem] md:text-7xl`
- Subtitle/role: `text-lg`, `text-[#6B6560]`
- Small descriptions: `text-sm`, `font-light`, `text-[#6B6560]`

## Components Style Patterns

### Buttons

```
rounded-full font-extralight px-6 py-5 border-[#E0DBD5] text-[#1A1A1A]
hover:bg-[#A39080] hover:text-white hover:border-[#A39080] transition-colors
```

- Selalu `rounded-full` (pill shape)
- Variant: `outline` (border only, no fill)
- Font weight: `font-extralight`

### Section Dividers

- Gunakan `border-y border-[#E0DBD5]` atau `border-t border-[#E0DBD5]`
- JANGAN gunakan background solid sebagai divider
- Prefer outline/border approach over filled backgrounds

### Cards

- Background: transparent atau `bg-[#F2EDE6]`
- Border: `border border-[#E0DBD5]`
- Rounded: `rounded-lg` atau `rounded-xl`
- Hover: subtle scale atau border color change

### Marquee/Running Text

- No background, hanya border atas-bawah
- Text color: `text-[#A39080]` (muted accent)
- Font weight: `font-light`
- Separator: small dot `w-1.5 h-1.5 rounded-full bg-[#E0DBD5]`

## Animation Guidelines

### Library: GSAP + @gsap/react

### Patterns

- **Slide up (reveal)**: `y: 60-80, opacity: 0, duration: 0.8-1`
- **Hero heading**: `y: 500, opacity: 0, duration: 2` (more dramatic)
- **Stagger sequence**: Use timeline with `-=0.4` overlap
- **Ease**: `power3.out` for entrances
- **Wrap animated elements** in `overflow-hidden` container for clean clip effect

### Rules

- Buttons TIDAK dianimasikan (tetap statis)
- Urutan animasi: heading dulu, lalu subtitle/supporting text
- Jangan over-animate. Satu section = 1 timeline sederhana.

## Spacing & Layout

- Section padding: `md:p-12`
- Content gaps: `gap-3` (small), `gap-8` (medium), `gap-12` (large)
- Hero: `h-screen flex items-end`
- Responsive: mobile-first, breakpoints `md:` dan `xl:`

## Do's and Don'ts

### DO

- Gunakan warm neutral palette secara konsisten
- Biarkan whitespace bekerja
- Gunakan border/outline sebagai dekorasi, bukan filled backgrounds
- Uppercase untuk headings dan labels
- Font-light/extralight untuk body text
- Subtle hover transitions

### DON'T

- Jangan pakai warna saturated/bright
- Jangan pakai shadow yang berat (prefer no shadow atau shadow sangat subtle)
- Jangan pakai border-radius yang terlalu kecil (prefer rounded-full atau rounded-xl)
- Jangan pakai font-weight bold untuk body text
- Jangan pakai background solid gelap kecuali untuk kontras yang disengaja
- Jangan pakai animasi yang terlalu cepat atau bouncy
