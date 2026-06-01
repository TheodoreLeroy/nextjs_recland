import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "outlined";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
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
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
