"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { DASHBOARD_MENUS_BY_ROLE } from "@/constants/dashboard";

interface SidebarProps {
  role: "candidate" | "recruiter" | "employer";
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  // Lấy danh sách menu động dựa vào role được truyền xuống
  const currentMenu = DASHBOARD_MENUS_BY_ROLE[role] || [];

  return (
    <aside className="fixed top-0 left-0 z-20 flex h-screen w-64 flex-col justify-between border-r border-zinc-800 bg-zinc-900 p-4 text-zinc-100">
      <div>
        {/* Logo / Header Sidebar */}
        <div className="mb-6 flex items-center gap-3 px-2 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
            R
          </div>
          <span className="text-lg font-semibold tracking-wide">
            Recland {role}
          </span>
        </div>

        {/* Danh sách các link điều hướng động */}
        <nav className="space-y-1">
          {currentMenu.map((item) => {
            const Icon = item.icon;
            // Kiểm tra trạng thái active của route hiện tại
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-800 text-zinc-100 shadow-xs" // Style khi active trong nền tối
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100" // Style khi hover
                }`}
              >
                {/* Render Lucide Icon từ constant nếu có */}
                {Icon && (
                  <Icon
                    className={`h-4 w-4 ${isActive ? "text-indigo-400" : "text-zinc-400"}`}
                  />
                )}
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Thông tin User dưới đáy Sidebar */}
      <div className="flex items-center gap-3 border-t border-zinc-800 px-2 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 text-sm font-semibold text-zinc-100">
          KA
        </div>
        <div className="overflow-hidden text-sm">
          <p className="truncate font-medium text-zinc-200">Hung Anh</p>
          <p className="truncate text-xs text-zinc-500">Software Engineer</p>
        </div>
      </div>
    </aside>
  );
}
