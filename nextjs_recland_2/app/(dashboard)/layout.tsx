"use client"
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import { useRoleStore } from "@/store/useRole.store";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role } = useRoleStore();
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Sidebar role={role}/>
      <div className="pl-64">
        <Header />
        <main className="mx-auto max-w-(--size-7xl) p-6 pt-20">{children}</main>
      </div>
    </div>
  );
}
