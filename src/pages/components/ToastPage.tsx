import { useState, useCallback } from "react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react";

const VARIANT_STYLES = {
  success: { bg: "bg-emerald-600", Icon: CheckCircle2 },
  danger: { bg: "bg-red-600", Icon: XCircle },
  info: { bg: "bg-blue-600", Icon: Info },
  warning: { bg: "bg-amber-500", Icon: AlertTriangle },
};

type Toast = {
  id: number;
  variant: keyof typeof VARIANT_STYLES;
  message: string;
};

export function ToastPage() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((variant: keyof typeof VARIANT_STYLES, message: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, variant, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const dismiss = (id: number) => setToasts((t) => t.filter((toast) => toast.id !== id));

  return (
    <div className="space-y-16">

      <PageHeader
        badge="Components"
        title="Toast"
        description="A brief, auto-dismissing notification that confirms an action without blocking the interface."
      />

      <Section
        title="Overview"
        description="Toasts are transient — they confirm, then get out of the way."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50">
              <Info className="h-7 w-7 text-blue-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Semantic Variants</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Same four-variant system as Alert — success, danger, info, warning.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-50 text-2xl">
              ⏳
            </div>
            <h3 className="font-semibold text-slate-900">Auto-Dismiss</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Disappears on its own after a set duration, or can be dismissed manually.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
              📚
            </div>
            <h3 className="font-semibold text-slate-900">Stackable</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Multiple toasts queue and stack instead of replacing each other.
            </p>
          </div>

        </div>

      </Section>

      <Section
        title="Live Demo"
        description="Click a button to trigger a real toast — it auto-dismisses after 4 seconds, or click the × to dismiss it early."
      >

        <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-8 justify-center">
         <button
  onClick={() => showToast("success", "Changes saved successfully")}
  className="rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-700"
>
  Trigger Success
</button>

         <button
  onClick={() => showToast("danger", "Failed to save changes")}
  className="rounded-2xl bg-rose-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-rose-600"
>
  Trigger Danger
</button>

          <button
  onClick={() => showToast("info", "This is an informational message")}
  className="rounded-2xl bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-600"
>
  Trigger Info
</button>

         <button
  onClick={() => showToast("warning", "Your session expires in 5 minutes")}
  className="rounded-2xl bg-amber-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-amber-600"
>
  Trigger Warning
</button>
        </div>

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
          {toasts.map((toast) => {
            const { bg, Icon } = VARIANT_STYLES[toast.variant];
            return (
              <div
                key={toast.id}
                className={`flex items-center gap-3 rounded-xl ${bg} px-4 py-3 text-sm text-white shadow-lg`}
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                <span className="flex-1">{toast.message}</span>
                <button onClick={() => dismiss(toast.id)} className="shrink-0 rounded p-0.5 hover:bg-white/20">
                  <X className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </div>
            );
          })}
        </div>

      </Section>

      <Section title="Usage Guidelines" description="What belongs in a toast versus a full alert.">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Recommended</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Confirm actions → "Saved", "Copied", "Sent"</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Background events → "Upload complete"</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Non-blocking errors → recoverable failures</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />4–6 second duration for most messages</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Toast vs. Alert</h3>
            <p className="text-sm leading-7 text-slate-600">
              Toasts are for events the user doesn't need to act on. If a message requires a
              decision or blocks progress, it belongs in an inline Alert or Modal instead.
            </p>
          </div>
        </div>
      </Section>

      <Section title="API Reference" description="Props exposed by the Toast component.">
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
                ["variant", "'success' | 'danger' | 'info' | 'warning'", "'info'"],
                ["message", "string", "required"],
                ["duration", "number (ms)", "4000"],
                ["position", "'top-right' | 'bottom-right' | 'top-center'", "'bottom-right'"],
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

      <Section title="Token Refrence" description="Basic implementation.">
        <CodeBlock
          language="tsx"
          code={`const { showToast } = useToast();

showToast({
  variant: "success",
  message: "Changes saved successfully",
});`}
        />
      </Section>

      <Section
        title="Accessibility"
        description="Toasts appear and disappear on their own — that timing needs to work for screen reader users too."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-emerald-700">✓ Live Region</h3>
            <p className="text-sm leading-6 text-slate-600">
              Use <code>aria-live="polite"</code> for routine toasts, <code>"assertive"</code> for errors.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-blue-700">✓ Enough Time to Read</h3>
            <p className="text-sm leading-6 text-slate-600">
              Don't auto-dismiss faster than an average reader can finish the message (WCAG 2.2.1).
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-amber-700">✓ Pause on Hover</h3>
            <p className="text-sm leading-6 text-slate-600">
              Pause the auto-dismiss timer while the user is hovering or focused on the toast.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Do & Don't" description="Follow these guidelines to keep toasts helpful, not disruptive.">
        <DoDont
          dos={[
            { title: "Keep messages to one line", description: "Toasts are glanceable, not something users read carefully." },
            { title: "Always offer manual dismiss", description: "Don't force users to wait out the timer." },
            { title: "Stack, don't replace", description: "Multiple toasts should queue visibly, not silently overwrite each other." },
          ]}
          donts={[
            { title: "Don't put required actions in a toast", description: "Anything the user must act on belongs in a persistent UI element." },
            { title: "Don't auto-dismiss errors too fast", description: "Give error toasts more time, or require manual dismissal." },
            { title: "Don't stack more than 3–4 at once", description: "Excess toasts overwhelm rather than inform." },
          ]}
        />
      </Section>

      <Section title="Summary" description="Key toast principles">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />
          <ul className="relative space-y-3 text-blue-950">
            <li>✓ For confirmations, not decisions.</li>
            <li>✓ Always dismissible manually, not just on a timer.</li>
            <li>✓ Correct aria-live urgency for the variant.</li>
            <li>✓ Pauses on hover/focus so nothing gets missed.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}