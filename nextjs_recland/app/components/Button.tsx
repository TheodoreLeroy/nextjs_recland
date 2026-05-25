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
        w-full
        h-[50px]
        rounded-[18px]
        text-3xl
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-[0.98]
        text-nowrap
    `;

    const variants = {
        primary: `
            bg-[#F2A646]
            text-[#006C8C]
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
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    );
}
