import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";
import {
  Home,
  Search,
  Settings,
  User,
  Bell,
  Heart,
  Star,
  Check,
  X,
  ChevronRight,
  Download,
  Trash2,
  Image,
} from "lucide-react";

export function IconsPage() {
  const icons = [
    { Icon: Home, name: "Home" },
    { Icon: Search, name: "Search" },
    { Icon: Settings, name: "Settings" },
    { Icon: User, name: "User" },
    { Icon: Bell, name: "Bell" },
    { Icon: Heart, name: "Heart" },
    { Icon: Star, name: "Star" },
    { Icon: Check, name: "Check" },
    { Icon: X, name: "X" },
    { Icon: ChevronRight, name: "ChevronRight" },
    { Icon: Download, name: "Download" },
    { Icon: Trash2, name: "Trash2" },
  ];

  return (
    <div className="space-y-16">

      <PageHeader
        badge="Design Tokens"
        title="Icons & Illustrations"
        description="A shared icon set and illustration guidelines keep visual language consistent across the product."
      />

      <Section
        title="Overview"
        description="Icons and illustrations serve different jobs — one is functional, the other is expressive."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50">
              <Star className="h-7 w-7 text-blue-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Icons</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Functional, single-color glyphs used for actions, navigation and status.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-50">
              <Image className="h-7 w-7 text-violet-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Illustrations</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Expressive, multi-color artwork used for empty states, onboarding and marketing.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-50">
              <Check className="h-7 w-7 text-emerald-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Consistency</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              One icon library, one stroke weight, one sizing scale — no mixed styles.
            </p>
          </div>

        </div>

      </Section>

      <Section
        title="Icon Sizes"
        description="Available sizing tokens for icons."
      >

        <div className="grid gap-5 md:grid-cols-4">

          <TokenCard
            name="SM"
            value="16px"
            description="Inline text, dense tables"
            preview={<Star className="h-4 w-4 text-blue-600" strokeWidth={2} />}
          />

          <TokenCard
            name="MD"
            value="20px"
            description="Default UI icon size"
            highlight
            preview={<Star className="h-5 w-5 text-blue-600" strokeWidth={2} />}
          />

          <TokenCard
            name="LG"
            value="24px"
            description="Buttons, nav items"
            preview={<Star className="h-6 w-6 text-blue-600" strokeWidth={2} />}
          />

          <TokenCard
            name="XL"
            value="32px"
            description="Empty states, feature callouts"
            preview={<Star className="h-8 w-8 text-blue-600" strokeWidth={2} />}
          />

        </div>

      </Section>

      <Section
        title="Icon Library"
        description="A sample of the shared icon set. All icons come from a single source to guarantee visual consistency."
      >

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {icons.map(({ Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="h-5 w-5 text-slate-700" strokeWidth={2} />
              <span className="font-mono text-[11px] text-slate-400">{name}</span>
            </div>
          ))}
        </div>

      </Section>

      <Section
        title="Stroke Width"
        description="Icon stroke weight should stay consistent across the interface."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <TokenCard
            name="Light"
            value="1.5"
            description="Large, decorative icons"
            preview={<Settings className="h-6 w-6 text-blue-600" strokeWidth={1.5} />}
          />

          <TokenCard
            name="Regular"
            value="2"
            description="Default for all UI icons"
            highlight
            preview={<Settings className="h-6 w-6 text-blue-600" strokeWidth={2} />}
          />

          <TokenCard
            name="Bold"
            value="2.5"
            description="Small icons needing extra clarity"
            preview={<Settings className="h-6 w-6 text-blue-600" strokeWidth={2.5} />}
          />

        </div>

      </Section>

      <Section
        title="Usage Guidelines"
        description="Where to use icons versus illustrations."
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Recommended</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Buttons & nav → 20px icons, stroke 2
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Empty states → illustration + 32px icon
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Status indicators → 16px icon, semantic color
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Onboarding → illustration, not icon
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Why One Icon Set?</h3>
            <p className="text-sm leading-7 text-slate-600">
              Mixing icon libraries introduces inconsistent stroke widths, corner styles and
              optical sizing that users notice even if they can't name what feels off.
              One library, imported once, keeps every icon visually related.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Token Reference"
        description="Icon sizing exposed through CSS variables and usage in code."
      >

        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">CSS Variables</h3>
            <CodeBlock
              language="css"
              code={`:root {
  --icon-sm: 16px;
  --icon-md: 20px;
  --icon-lg: 24px;
  --icon-xl: 32px;

  --icon-stroke: 2;
}`}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Usage</h3>
            <CodeBlock
              language="tsx"
              code={`import { Star } from "lucide-react";

<Star className="h-5 w-5 text-slate-700" strokeWidth={2} />

<Button>
  <Download className="h-4 w-4" />
  Export
</Button>`}
            />
          </div>

        </div>
      </Section>

      <Section
        title="Accessibility"
        description="Icons carry meaning — that meaning needs to reach assistive technology too."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-emerald-700">✓ Label Meaningful Icons</h3>
            <p className="text-sm leading-6 text-slate-600">
              Icon-only buttons need an <code>aria-label</code> describing the action.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-blue-700">✓ Hide Decorative Icons</h3>
            <p className="text-sm leading-6 text-slate-600">
              Purely decorative icons should use <code>aria-hidden="true"</code>.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-amber-700">✓ Sufficient Contrast</h3>
            <p className="text-sm leading-6 text-slate-600">
              Icon color against its background should meet the same contrast bar as text.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Do & Don't"
        description="Follow these guidelines to keep the icon and illustration system consistent."
      >
        <DoDont
          dos={[
            {
              title: "Use one icon library",
              description: "Pull every icon from the same shared set to keep stroke and geometry consistent.",
            },
            {
              title: "Match size to context",
              description: "Use the sizing scale instead of arbitrary pixel values.",
            },
            {
              title: "Label icon-only actions",
              description: "Every icon-only interactive element needs an accessible name.",
            },
          ]}
          donts={[
            {
              title: "Don't mix icon styles",
              description: "Avoid combining outline and filled icons, or icons from different libraries.",
            },
            {
              title: "Don't use icons without meaning",
              description: "Don't add an icon just to fill space — it should always support the label.",
            },
            {
              title: "Don't scale icons unevenly",
              description: "Avoid stretching icons non-proportionally to fit a layout.",
            },
          ]}
        />
      </Section>

      <Section
        title="Summary"
        description="Key icon and illustration principles"
      >
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />
          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Use one consistent icon library across the product.</li>
            <li>✓ Follow the defined sizing and stroke-width scale.</li>
            <li>✓ Reserve illustrations for empty states and onboarding.</li>
            <li>✓ Label icon-only buttons for screen readers.</li>
            <li>✓ Never mix icon styles within the same interface.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}