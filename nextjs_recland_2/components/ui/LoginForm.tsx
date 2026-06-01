"use client";

import Link from "next/link";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function LoginForm() {
  return (
    <section className="flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-3xl font-bold">Chào mừng trở lại</h1>

        <p className="mb-8 text-gray-500">Đăng nhập vào tài khoản của bạn</p>

        <div className="mb-6 flex gap-4">
          <button className="flex-1 rounded-xl border p-3 transition hover:bg-gray-50">
            <FaGoogle className="mx-auto text-lg" />
          </button>

          <button className="flex-1 rounded-xl border p-3 transition hover:bg-gray-50">
            <FaFacebookF className="mx-auto text-lg" />
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">HOẶC</span>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-400"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-400"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Lưu tài khoản
            </label>

            <Link href="#" className="text-sm text-yellow-600">
              Quên mật khẩu?
            </Link>
          </div>

          <button className="w-full rounded-xl bg-yellow-400 py-3 font-semibold transition hover:bg-yellow-500">
            Đăng nhập
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Thành viên mới?{" "}
          <Link href="/register" className="font-semibold text-yellow-600">
            Tạo tài khoản ngay
          </Link>
        </p>
      </div>
    </section>
  );
}
