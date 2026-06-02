import StatsCard from "@/components/ui/StatsCard";

export default function DashboardPage() {
  const dummyTasks = [
    {
      id: "TS-102",
      name: "Tối ưu Dockerfile & Cấu hình WSL2",
      status: "Hoàn thành",
      priority: "Cao",
      date: "Hôm nay",
    },
    {
      id: "TS-103",
      name: "Refactor Codebase sang Clean Architecture",
      status: "Đang làm",
      priority: "Cao",
      date: "Hôm qua",
    },
    {
      id: "TS-104",
      name: "Tích hợp MediatR & CQRS cho Module Auth",
      status: "Đang làm",
      priority: "Trung bình",
      date: "2 ngày trước",
    },
    {
      id: "TS-105",
      name: "Thiết kế UI Sleep Tracker Dashboard",
      status: "Tạm dừng",
      priority: "Thấp",
      date: "3 ngày trước",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Chào buổi tối, Hùng Anh
        </h1>
        <p className="text-sm text-zinc-500">
          Dưới đây là cập nhật tiến độ công việc trong ngày hôm nay.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <StatsCard
          title="Dự án đang chạy"
          value="4 Hoạt động"
          change="+1"
          isPositive={true}
          icon="🚀"
        />
        <StatsCard
          title="Tác vụ hoàn thành"
          value="84 / 102"
          change="+12%"
          isPositive={true}
          icon="✅"
        />
        <StatsCard
          title="Thời gian Coding"
          value="38.5 Giờ"
          change="-4%"
          isPositive={false}
          icon="⚡"
        />
      </div>

      {/* Main Content Grid */}
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between border-b border-zinc-200 p-5 dark:border-zinc-800">
          <h2 className="font-semibold text-zinc-950 dark:text-zinc-50">
            Tác vụ gần đây
          </h2>
          <button className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
            Xem tất cả
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-400">
                <th className="p-4 font-medium">Mã</th>
                <th className="p-4 font-medium">Tên tác vụ</th>
                <th className="p-4 font-medium">Trạng thái</th>
                <th className="p-4 font-medium">Độ ưu tiên</th>
                <th className="p-4 text-right font-medium">Cập nhật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {dummyTasks.map((task) => (
                <tr
                  key={task.id}
                  className="transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30"
                >
                  <td className="p-4 font-mono font-medium text-zinc-600 dark:text-zinc-400">
                    {task.id}
                  </td>
                  <td className="p-4 font-medium text-zinc-900 dark:text-zinc-100">
                    {task.name}
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        task.status === "Hoàn thành"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : task.status === "Đang làm"
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                            : "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="p-4 text-zinc-600 dark:text-zinc-400">
                    {task.priority}
                  </td>
                  <td className="p-4 text-right text-zinc-400">{task.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
