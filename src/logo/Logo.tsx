
type LogoProps = {
  size?: number;
};

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <div
      className="flex items-center justify-center rounded-lg bg-black"
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.8}
        height={size * 0.8}
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* < */}
        <path
          d="M8 5L2 12L8 19"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* / */}
        <path
          d="M18 4L14 20"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* > */}
        <path
          d="M24 5L30 12L24 19"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
