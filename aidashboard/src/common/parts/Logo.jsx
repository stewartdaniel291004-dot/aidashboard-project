import React from "react";

// WebWeave mark: two interlaced strands forming a "W".
export function LogoMark({ className = "size-9" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ww-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f1fd6" />
          <stop offset="60%" stopColor="#7047fb" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#ww-grad)" />
      <path
        d="M10 14 L17 34 L24 20 L31 34 L38 14"
        fill="none"
        stroke="#fff"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14 L19.5 28"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.45"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M34 14 L28.5 28"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.45"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Logo({ className = "", markClassName = "size-9", textClassName = "text-gray-900", accentClassName = "text-brand-600" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={markClassName} />
      <span className={`text-xl font-bold tracking-tight ${textClassName}`}>
        Web<span className={accentClassName}>Weave</span>
      </span>
    </span>
  );
}

export default Logo;
