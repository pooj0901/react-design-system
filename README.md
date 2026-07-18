Design System — Component Library

A production-ready design system built with React 18, Tailwind CSS, and Figma. 8 fully accessible components with design tokens, documentation, and real-world usage examples.


Live Demo : "https://your-vercel-url.vercel.app"
Figma File : "https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?t=3eeIRiZMSmXrxYRf-1"


Design System Preview


Why I built this

Every new project starts by rebuilding the same UI components from scratch. This leads to inconsistent interfaces, wasted time, and accessibility gaps. This design system solves that by defining decisions once — in both Figma and code — and reusing them everywhere.



### What's inside

8 components

Components : Button, Input, Checkbox, Badge, Card, Modal, Dropdown, Table

### Design token system

All components use a shared token layer — never raw hex values in component code.

Colors     → primary-50 through primary-900 + semantic (success, warning, danger, info)
Typography → 8-step scale: Display (36px) → Caption (12px) · Inter font
Spacing    → 8px base grid: space-1 (4px) → space-16 (64px)
Radius     → rounded-none (0) → rounded-full (9999px)
Shadows    → shadow-sm → shadow-xl · 5 elevation levels

## Tech stack

React 18          Component architecture, hooks, forwardRef
Tailwind CSS 3    Utility-first styling with custom design tokens
Lucide React      Icon library (consistent 1.5px stroke, 24px base)
Vite 5            Build tool — <300ms dev server startup
Inter font        Primary typeface (Google Fonts)
JetBrains Mono    Monospace font for code and data

## Getting started

```bash
# Clone the repo
git clone https://github.com/pooj0901/react-design-system.git
cd design-system

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```



## Project structure

design-system/
├── src/
│   ├── tokens/
│   │   └── index.js              # All design tokens as JS exports
│   │
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx        # Component
│   │   │   └── index.js          # Barrel export
│   │   ├── Input/
│   │   ├── Checkbox/
│   │   ├── Badge/
│   │   ├── Card/
│   │   ├── Modal/
│   │   ├── Dropdown/
│   │   ├── Table/
│   │   └── index.js              # All component exports
│   │
│   ├── docs/
│   │   ├── shared/
│   │   │   ├── CodeBlock.jsx     # Syntax highlighted + copy button
│   │   │   └── PropsTable.jsx    # API reference table
│   │   ├── pages/
│   │   │   ├── ButtonDocs.jsx
│   │   │   ├── InputDocs.jsx
│   │   │   └── ...               # One page per component
│   │   └── Documentation.jsx     # Sidebar + layout shell
│   │
│   ├── index.css                 # Tailwind base + CSS variables
│   └── main.jsx
│
├── tailwind.config.js            # Token values — single source of truth
├── vite.config.js
└── index.html



### Accessibility built in, not bolted on
- `useId()` for stable label-input associations
- `aria-invalid`, `aria-describedby` on error states
- `aria-checked="mixed"` for indeterminate checkboxes
- Focus trap in Modal prevents keyboard from escaping
- `aria-sort` on sortable table headers
- All components pass keyboard navigation


## Figma file

The Figma file mirrors the code system exactly:

Same token names — `primary-600` in Figma = `primary-600` in Tailwind
Same variant names— "Primary / Medium / Default" = `variant="primary" size="md"`
Same component structure — every Figma component has a code equivalent

Open Figma file →  "https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?t=3eeIRiZMSmXrxYRf-1"


Pages:

🎨 Cover          ← overview and stats
📐 Design Tokens  ← colors, typography, spacing, radius, shadows
🧩 Components     ← all 8 components with states, props, examples


## Accessibility

All components are designed with WCAG 2.1 AA compliance in mind:

- ✅ Color contrast ratios ≥ 4.5:1 for normal text
- ✅ Focus rings visible on all interactive elements
- ✅ Keyboard navigable without mouse
- ✅ Screen reader compatible (NVDA, VoiceOver tested)
- ✅ No motion without preference check (`prefers-reduced-motion`)




## License

MIT — free to use, fork, and build on.