import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";
type DropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
};

type DropdownItemProps = {
  children: ReactNode;
  leftIcon?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "danger";
  onClick?: () => void;
};

type DropdownLabelProps = {
  children: ReactNode;
};

function DropdownComponent({
  trigger,
  children,
}: DropdownProps) {
  const [open, setOpen] =
    useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
    >
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {open && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-2
            min-w-55
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            py-2
            shadow-xl
          "
        >
          {children}
        </div>
      )}
    </div>
  );
} 
function DropdownItem({
  children,
  leftIcon,
  disabled = false,
  variant = "default",
  onClick,
}: DropdownItemProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "hover:bg-slate-100",
        variant === "danger"
          ? "text-red-600 hover:bg-red-50"
          : "text-slate-700",
      ].join(" ")}
    >
      {leftIcon && (
        <span className="shrink-0">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>
    </button>
  );
}

function DropdownLabel({
  children,
}: DropdownLabelProps) {
  return (
    <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
      {children}
    </div>
  );
}

function DropdownDivider() {
  return (
    <div className="my-2 h-px bg-slate-200" />
  );
}
type DropdownComponentType =
  React.FC<DropdownProps> & {
    Item: typeof DropdownItem;
    Label: typeof DropdownLabel;
    Divider: typeof DropdownDivider;
  };

export const Dropdown =
  DropdownComponent as DropdownComponentType;

Dropdown.Item = DropdownItem;

Dropdown.Label = DropdownLabel;

Dropdown.Divider = DropdownDivider;