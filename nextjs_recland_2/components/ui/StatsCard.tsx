interface StatsProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export default function StatsCard({
  title,
  value,
  change,
  isPositive,
  icon,
}: StatsProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {title}
        </p>
        <span className="rounded-xl bg-zinc-50 p-2 text-xl dark:bg-zinc-800">
          {icon}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {value}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs">
          <span
            className={`font-semibold ${isPositive ? "text-emerald-600" : "text-rose-600"}`}
          >
            {change}
          </span>
          <span className="text-zinc-400">so với tháng trước</span>
        </p>
      </div>
    </div>
  );
}
