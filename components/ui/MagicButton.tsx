import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="group relative inline-flex h-16 w-full overflow-hidden rounded-lg p-[2px] focus:outline-none md:mt-7 md:w-70"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff_0%,#9ca3af_10%,#f9fafb_20%,#6b7280_30%,#e5e7eb_40%,#ffffff_50%,#9ca3af_60%,#f9fafb_70%,#6b7280_80%,#e5e7eb_90%,#ffffff_100%)]" />

      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#0a0a0a] px-10 text-lg font-bold text-white backdrop-blur-3xl ${otherClasses ?? ""}`}
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-[#3f3f46] via-[#c0c0c8] to-[#3f3f46] opacity-60 transition-transform duration-500 ease-out group-hover:translate-x-0" />

        <span className="relative z-10 inline-flex items-center gap-2">
          {position === "left" && icon}
          <span className="animate-shimmer bg-[linear-gradient(110deg,#ffffff_35%,#CBACF9_48%,#ffffff_52%,#ffffff_65%)] bg-[length:200%_100%] bg-clip-text text-transparent">
            {title}
          </span>
          {position === "right" && icon}
        </span>
      </span>
    </button>
  );
};

export default MagicButton;
