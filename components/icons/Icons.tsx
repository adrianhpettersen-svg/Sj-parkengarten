import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5c0 9 6 15 15 15a2 2 0 0 0 2-2v-2.5l-4-1.5-2 2a12 12 0 0 1-5-5l2-2L10.5 4H8a2 2 0 0 0-2 2" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function FerryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17h18M5 17l1-5h12l1 5M8 12V8h8v4" />
      <circle cx="7.5" cy="20" r="1" />
      <circle cx="16.5" cy="20" r="1" />
    </svg>
  );
}

export function FishIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 7c-4 0-9 2-12 5 3 3 8 5 12 5 0 0 5-2 5-5s-5-5-5-5Z" />
      <circle cx="17" cy="12" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="13" r="4" />
      <path d="M12 3v3M5 7l1.5 1.5M19 7l-1.5 1.5M3 13h2M19 13h2M3 19h18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.4} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

export function SlipIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18h18M5 18l3-9h8l3 9M9 9V6h6v3" />
    </svg>
  );
}

export function StorageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />
    </svg>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16c2-4 4-4 6 0M3 12h18M21 16c-2-4-4-4-6 0M9 12V6M15 12V6" />
    </svg>
  );
}

export function ParkingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="11" width="18" height="9" rx="1" />
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m5 12 14-7-7 14-2-5-5-2Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.5v3H10v8z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />
      <circle cx="12" cy="9" r="2.6" fill="#fff" />
    </svg>
  );
}
