import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";

type ModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  footer?: ReactNode;
};

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  size = "md",
  children,
  footer,
}: ModalProps) {
  const width = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>

      
        <Dialog.Overlay
          className="
            fixed inset-0 z-50
            bg-slate-950/40
            backdrop-blur-[3px]
            data-[state=open]:animate-in
            data-[state=closed]:animate-out
            data-[state=open]:fade-in-0
            data-[state=closed]:fade-out-0
            duration-200
          "
        />

    
        <Dialog.Content
          className={cn(
            `
            fixed
            left-1/2
            top-1/2
            z-50
            w-[92vw]
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            outline-none

            shadow-[0_24px_80px_rgba(15,23,42,0.18)]

            data-[state=open]:animate-in
            data-[state=closed]:animate-out
            data-[state=open]:fade-in-0
            data-[state=closed]:fade-out-0
            data-[state=open]:zoom-in-95
            data-[state=closed]:zoom-out-95
            data-[state=open]:slide-in-from-top-2
            duration-200
            `,
            width[size]
          )}
        >
         
          <div className="flex items-start justify-between px-7 pt-7">

            <div className="pr-6">

              <Dialog.Title className="text-xl font-semibold tracking-tight text-slate-900">
                {title}
              </Dialog.Title>

              {description && (
                <Dialog.Description className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  {description}
                </Dialog.Description>
              )}

            </div>

            <Dialog.Close asChild>

              <button
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-400
                  transition-all
                  duration-200
                  hover:bg-slate-100
                  hover:text-slate-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:ring-offset-2
                "
              >
                <X size={18} />
              </button>

            </Dialog.Close>

          </div>

      
          <div className="px-7 py-6">
            {children}
          </div>

       
          {footer && (
            <div
              className="
                flex
                justify-end
                gap-3
                border-t
                border-slate-100
                bg-slate-50/70
                px-7
                py-5
              "
            >
              {footer}
            </div>
          )}

        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  );
}