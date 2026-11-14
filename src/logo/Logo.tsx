
import React from "react";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <div
      className="
        flex items-center justify-center
        rounded-lg
        bg-black dark:bg-white
        transition-colors duration-200
      "
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.65}
        height={size * 0.65}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5L3 12L9 19"
          stroke="#60A5FA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 5L21 12L15 19"
          stroke="#A78BFA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
