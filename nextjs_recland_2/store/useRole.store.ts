import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Định nghĩa các loại Role hợp lệ trong hệ thống
export type UserRole = "candidate" | "recruiter" | "employer";

interface RoleState {
  role: UserRole;
  setRole: (role: UserRole) => void;
  clearRole: () => void;
}

export const useRoleStore = create<RoleState>()(
  persist(
    (set) => ({
      // Giá trị mặc định khi chưa đăng nhập hoặc khởi tạo ban đầu
      role: "candidate", 

      // Hàm cập nhật role mới
      setRole: (newRole) => set({ role: newRole }),

      // Hàm reset về mặc định khi Logout
      clearRole: () => set({ role: "candidate" }),
    }),
    {
      name: "user-role-storage", // Tên key lưu dưới LocalStorage
      storage: createJSONStorage(() => localStorage), // Lưu trữ tại LocalStorage của trình duyệt
    }
  )
);