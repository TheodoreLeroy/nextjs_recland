interface TabOption {
  label: string;
  value: string;
}
interface SwitchTabsProps<T extends string = string> {
  value: T;
  onChange: (value: T) => void;
  options: {
    label: string;
    value: T;
  }[];
  className?: string;
}

export default function SwitchTabs<T extends string>({
  value,
  onChange,
  options,
  className,
}: SwitchTabsProps<T>) {
  const activeIndex = options.findIndex((option) => option.value === value);

  return (
    <div className="relative flex h-14 rounded-2xl border-2 border-gray-300 bg-gray-100 p-1 mb-3">
      <div
        className="absolute top-1 bottom-1 rounded-xl bg-button-bg transition-all duration-300"
        style={{
          width: `${100 / options.length}%`,
          left: `${(100 / options.length) * activeIndex}%`,
        }}
      />

      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`relative z-10 flex-1 font-bold rounded-2xl! transition-all duration-300 ease-in-out ${
            value === option.value ? "text-white bg-[#f9ac4e]" : "text-gray-400"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
