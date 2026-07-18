import type {
  HTMLAttributes,
  TableHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
  FC,
} from "react";

import { cn } from "../../../lib/utils";

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  striped?: boolean;
  hoverable?: boolean;
};

function TableComponent({
  className,
  children,
  striped = false,
  hoverable = false,
  ...props
}: TableProps) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table
          className={cn(
            "w-full border-collapse bg-white text-sm",
            striped && "[&_tbody_tr:nth-child(even)]:bg-slate-50",
            hoverable && "[&_tbody_tr:hover]:bg-slate-50",
            className
          )}
          {...props}
        >
          {children}
        </table>
      </div>
    </div>
  );
}

function TableHead({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn(
        "bg-slate-50",
        className
      )}
      {...props}
    />
  );
}

function TableBody({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody
      className={cn(
        "divide-y divide-slate-100",
        className
      )}
      {...props}
    />
  );
}

function TableRow({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "transition-colors duration-150 last:border-0",
        className
      )}
      {...props}
    />
  );
}

function TableHeader({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
        className
      )}
      {...props}
    />
  );
}

function TableCell({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        "px-5 py-4 align-middle text-sm text-slate-700",
        className
      )}
      {...props}
    />
  );
}

type TableComponentType = FC<TableProps> & {
  Head: typeof TableHead;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Header: typeof TableHeader;
  Cell: typeof TableCell;
};

export const Table = TableComponent as TableComponentType;

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Header = TableHeader;
Table.Cell = TableCell;