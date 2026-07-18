type InfoBoxProps = {
  title: string;
  color: "green" | "red";
  items: string[];
};

export function InfoBox({
  title,
  color,
  items,
}: InfoBoxProps) {
  const styles = {
    green:
      "border-green-200 bg-green-50 text-green-800",
    red:
      "border-red-200 bg-red-50 text-red-800",
  };

  return (
    <div
      className={`flex-1 rounded-xl border p-5 ${styles[color]}`}
    >
      <h3 className="mb-3 font-semibold">
        {title}
      </h3>

      <ul className="list-disc space-y-2 pl-5 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}