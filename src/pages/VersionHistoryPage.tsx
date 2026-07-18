import { PageHeader } from "../components/layout/PageHeader";
import { Section } from "../components/docs/Section";

type VersionEntryProps = {
  version: string;
  date: string;
  current: boolean;
  changes: string[];
};

function VersionEntry({ version, date, current, changes }: VersionEntryProps) {
  return (
    <div className="relative pl-8">
      <span
        className={`absolute left-0 top-1.5 flex h-3 w-3 items-center justify-center rounded-full ${
          current ? "bg-blue-600 ring-4 ring-blue-100" : "bg-slate-300"
        }`}
      />
      <div className="absolute left-[5px] top-5 h-full w-px bg-slate-200" />

      <div className="flex items-center gap-3">
        <h3 className="font-mono text-sm font-semibold text-slate-900">{version}</h3>
        {current && (
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
            Current
          </span>
        )}
        <span className="text-xs text-slate-400">{date}</span>
      </div>

      <ul className="mt-3 space-y-2 pb-10 text-sm leading-6 text-slate-600">
        {changes.map((c) => (
          <li key={c} className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VersionHistoryPage() {
  const versions = [
    {
      version: "v1.0.0",
      date: "Current",
      current: true,
      changes: [
        "Added Design Tokens overview page with the Primitive → Semantic → Component tier model",
        "Added Motion, Grid, and Icons & Illustrations token pages",
        "Rebuilt TokenCard with a highlight/default state and corrected preview-area clipping",
        "Restyled Colors, Border Radius, and Shadow pages to the rounded-2xl card system",
        "Added Alert, Tooltip, Toast, and Tabs component documentation",
      ],
    },
    {
      version: "v0.4.0",
      date: "Earlier",
      current: false,
      changes: [
        "Added the Shadow token page with elevation scale and usage guidance",
        "Redesigned Research page with Systems Studied and Key Decisions sections",
      ],
    },
    {
      version: "v0.3.0",
      date: "Earlier",
      current: false,
      changes: [
        "Added the Border Radius token page with the 8-step scale",
      ],
    },
    {
      version: "v0.2.0",
      date: "Earlier",
      current: false,
      changes: [
        "Added the Colors token page — Primary, Neutral, and Semantic palettes",
      ],
    },
    {
      version: "v0.1.0",
      date: "Initial",
      current: false,
      changes: [
        "Initial design system scaffold",
        "Research overview page and component sidebar structure",
      ],
    },
  ];

  return (
    <div className="space-y-16">

      <PageHeader
        badge="Overview"
        title="Version History"
        description="A record of what changed and when, across the tokens and components documented in this system."
      />

      <Section
        title="Changelog"
        description="Most recent changes first."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {versions.map((v) => (
            <VersionEntry key={v.version} {...v} />
          ))}
        </div>
      </Section>

    </div>
  );
}