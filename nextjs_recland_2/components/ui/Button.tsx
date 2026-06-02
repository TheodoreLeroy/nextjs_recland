import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "outlined";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  // Giữ nguyên hoặc hỗ trợ thêm prop từ Ant Design Form trigger
  type?: "button" | "submit" | "reset";
  htmlType?: "button" | "submit" | "reset"; // Thêm dòng này để tương thích hoàn toàn với AntD
  loading?: boolean; // Thêm trạng thái loading
  disabled?: boolean; // Thêm trạng thái disabled
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  htmlType, // Nhận thêm từ Antd Form nếu có
  loading = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
        flex
        items-center
        justify-center
        w-fit
        h-fit
        py-4
        px-10
        laptop:py-3
        laptop:w-fit
        rounded-[18px]
        text-md
        laptop:text-lg
        font-semibold
        transition-all
        duration-300
        cursor-pointer
        hover:scale-[1.02]
        active:scale-[0.98]
        text-nowrap
        disabled:opacity-60
        disabled:cursor-not-allowed
        disabled:hover:scale-100
    `;

  const variants = {
    primary: `
            bg-button-bg
            text-button-text
            hover:opacity-90
        `,

    secondary: `
            bg-[#006C8C]
            text-white
            hover:opacity-90
        `,

    outlined: `
            border-2
            border-[#F2A646]
            bg-white
            text-[#F2A646]
            hover:bg-[#FFF7ED]
        `,
  };

  // Ưu tiên htmlType (AntD) rồi mới tới type mặc định
  const finalType = htmlType || type;

  return (
    <button
      type={finalType}
      onClick={onClick}
      disabled={disabled || loading}
      className={twMerge(baseStyles, variants[variant], className)}
    >
      {loading && (
        <svg
          className="mr-3 -ml-1 h-5 w-5 animate-spin text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            document-rules="true"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
