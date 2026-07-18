import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../lib/utils";

type CodeBlockProps = {
  language?: string;
  code: string;
  className?: string;
};

export function CodeBlock({
  language = "tsx",
  code,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
  

      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-4">

        <span className="rounded-2xl border border-slate-700 bg-slate-800 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">  {language}
        </span>

        <button
  type="button"
  onClick={handleCopy}
  className="
    inline-flex items-center gap-2
    rounded-2xl
    border border-slate-700
    bg-slate-900
    px-4 py-2.5
    text-sm font-medium text-slate-300
    shadow-sm
    transition-all duration-200
    hover:border-slate-600
    hover:bg-slate-800
    hover:text-white
    hover:shadow-md
    active:scale-[0.98]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-slate-500
    focus-visible:ring-offset-2
    focus-visible:ring-offset-slate-950
  "
>
          {copied ? (
            <>
              <Check size={16} />
              Copied
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>

      </div>

    

      <pre className="overflow-x-auto bg-slate-950 p-7 text-[14px] leading-7 text-slate-200">
        <code className="font-mono whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}