export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 z-10 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="flex w-96 items-center">
        <input
          type="text"
          placeholder="Tìm kiếm tác vụ, dự án..."
          className="w-full rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-1.5 text-sm transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200">
          🔔
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500"></span>
        </button>
        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Hệ thống ổn định
        </span>
      </div>
    </header>
  );
}
