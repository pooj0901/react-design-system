import { useState } from "react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";

type DemoAlertProps = {
  variant: "info" | "success" | "warning" | "danger";
  title: string;
  description?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
};

function DemoAlert({ variant, title, description, dismissible, onDismiss }: DemoAlertProps) {
  const styles = {
    info: { border: "border-blue-200", bg: "bg-blue-50", icon: "text-blue-600", title: "text-blue-900", Icon: Info },
    success: { border: "border-emerald-200", bg: "bg-emerald-50", icon: "text-emerald-600", title: "text-emerald-900", Icon: CheckCircle2 },
    warning: { border: "border-amber-200", bg: "bg-amber-50", icon: "text-amber-600", title: "text-amber-900", Icon: AlertTriangle },
    danger: { border: "border-red-200", bg: "bg-red-50", icon: "text-red-600", title: "text-red-900", Icon: XCircle },
  }[variant];

  return (
    <div className={`flex items-start gap-3 rounded-[12px] border ${styles.border} ${styles.bg} p-4`}>
      <styles.Icon className={`mt-0.5 h-5 w-5 shrink-0 ${styles.icon}`} strokeWidth={2} />
      <div className="flex-1">
        <p className={`text-sm font-semibold ${styles.title}`}>{title}</p>
        {description && <p className="mt-1 text-sm text-slate-600">{description}</p>}
      </div>
      {dismissible && (
        <button onClick={onDismiss} className="shrink-0 rounded p-0.5 text-slate-400 hover:bg-black/5 hover:text-slate-600">
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

export function AlertPage() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="space-y-16">

      <PageHeader
        badge="Components"
        title="Alert"
        description="Inline messages that communicate status, feedback, or important information without interrupting the user's flow."
      />

      <Section
        title="Overview"
        description="Alerts map directly to the semantic color tokens — same meaning, same colors, everywhere."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[12px] bg-blue-50">
              <Info className="h-7 w-7 text-blue-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Semantic Variants</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Info, success, warning and danger — reusing the same tokens from Colors.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[12px] bg-emerald-50">
              <X className="h-7 w-7 text-emerald-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Dismissible</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Optional close button for alerts the user can acknowledge and clear.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[12px] bg-violet-50">
              <AlertTriangle className="h-7 w-7 text-violet-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Icon + Title + Body</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Consistent anatomy so alerts are scannable at a glance.
            </p>
          </div>

        </div>

      </Section>

     <div className="grid gap-6 lg:grid-cols-2">
  <Section
    title="Variants"
    description="Four semantic variants, matching the tokens documented in Colors."
  >
    <div className="space-y-3">
      <DemoAlert
        variant="info"
        title="New feature available"
        description="Dark mode is now available in settings."
      />

      <DemoAlert
        variant="success"
        title="Payment completed"
        description="Your subscription has been renewed."
      />

      <DemoAlert
        variant="warning"
        title="Storage almost full"
        description="You've used 92% of your available storage."
      />

      <DemoAlert
        variant="danger"
        title="Something went wrong"
        description="We couldn't save your changes. Please try again."
      />
    </div>
  </Section>

  <Section
    title="Dismissible Alert"
    description="Click the × to dismiss — this is a live, working example."
  >
    <div className="space-y-3">
      {!dismissed ? (
        <DemoAlert
          variant="info"
          title="This alert can be dismissed"
          description="Click the close button to remove it."
          dismissible
          onDismiss={() => setDismissed(true)}
        />
      ) : (
        <button
          onClick={() => setDismissed(false)}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
        >
          Reset Alert
        </button>
      )}
    </div>
  </Section>
</div>

      <Section
        title="Usage Guidelines"
        description="Match the variant to what the alert is actually communicating."
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Recommended</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Info → neutral announcements, tips</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Success → confirmed completed actions</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Warning → action needed soon, not urgent</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Danger → failed actions, destructive consequences</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Why Not Just Color?</h3>
            <p className="text-sm leading-7 text-slate-600">
              Every variant pairs its color with a distinct icon shape, so meaning still comes
              through for users who can't distinguish the colors from each other.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="API Reference"
        description="Props exposed by the Alert component."
      >

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Prop</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Default</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["variant", "'info' | 'success' | 'warning' | 'danger'", "'info'"],
                ["title", "string", "required"],
                ["description", "string", "undefined"],
                ["dismissible", "boolean", "false"],
                ["onDismiss", "() => void", "undefined"],
              ].map(([prop, type, def]) => (
                <tr key={prop} className="border-t border-slate-100 transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4"><code className="font-medium text-slate-900">{prop}</code></td>
                  <td className="px-6 py-4"><code className="text-slate-600">{type}</code></td>
                  <td className="px-6 py-4"><code className="text-slate-500">{def}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Token Refrence"
        description="Basic implementation."
      >
        <CodeBlock
          language="tsx"
          code={`<Alert
  variant="success"
  title="Payment completed"
  description="Your subscription has been renewed."
/>

<Alert
  variant="danger"
  title="Something went wrong"
  dismissible
  onDismiss={() => setVisible(false)}
/>`}
        />
      </Section>

      <Section
        title="Accessibility"
        description="Alerts need to reach assistive technology the same moment they reach sighted users."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-emerald-700">✓ Correct Role</h3>
            <p className="text-sm leading-6 text-slate-600">
              Use <code>role="alert"</code> for warning/danger, <code>role="status"</code> for info/success.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-blue-700">✓ Live Region</h3>
            <p className="text-sm leading-6 text-slate-600">
              Dynamically inserted alerts need <code>aria-live</code> so screen readers announce them.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-amber-700">✓ Focus on Dismiss</h3>
            <p className="text-sm leading-6 text-slate-600">
              After dismissing, move focus somewhere sensible instead of letting it vanish silently.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Do & Don't"
        description="Follow these guidelines to keep alerts trustworthy and usable."
      >
        <DoDont
          dos={[
            { title: "Match variant to severity", description: "Don't use danger styling for a routine confirmation." },
            { title: "Keep messages short", description: "One sentence for the title, one for supporting detail." },
            { title: "Use the correct ARIA role", description: "Assertive roles for urgent alerts, polite for routine ones." },
          ]}
          donts={[
            { title: "Don't stack too many alerts", description: "More than 2–3 visible alerts loses the reader's attention." },
            { title: "Don't rely on color alone", description: "Always pair the variant color with a distinct icon." },
            { title: "Don't auto-dismiss critical alerts", description: "Errors the user must act on should stay until dismissed manually." },
          ]}
        />
      </Section>

      <Section title="Summary" description="Key alert principles">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />
          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Four semantic variants, reusing existing color tokens.</li>
            <li>✓ Icon + color together, never color alone.</li>
            <li>✓ Correct ARIA role based on urgency.</li>
            <li>✓ Dismissible alerts return focus predictably.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}