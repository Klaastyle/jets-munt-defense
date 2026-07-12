 
import type { ReactNode, SVGProps } from "react";

export type TechnicalIconName =
  | "speedometer"
  | "feather"
  | "shield-check"
  | "crossed-tools"
  | "microchip"
  | "lightning"
  | "thermometer"
  | "can-bus"
  | "fiber-optic"
  | "i2c"
  | "sine-wave"
  | "target-crosshair"
  | "environment-sensor"
  | "sd-card"
  | "kalman-filter"
  | "paper-plane"
  | "database"
  | "chart-line"
  | "altitude"
  | "monitor-settings"
  | "code-serial"
  | "globe"
  | "factory"
  | "calendar"
  | "users"
  | "puzzle"
  | "lock"
  | "aircraft"
  | "macos"
  | "linux"
  | "windows";

type TechnicalIconProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
  name: TechnicalIconName;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  title?: string;
};

const iconPaths: Record<TechnicalIconName, ReactNode> = {
  speedometer: (
    <>
      <path d="M7 21a11 11 0 1 1 18 0" />
      <path d="M10.5 20.5h11" />
      <path d="M16 17l5.2-6.2" />
      <path d="M9.7 15.2l2.1 1.2M22.3 15.2l-2.1 1.2M16 8.8v2.4" />
    </>
  ),
  feather: (
    <>
      <path d="M25 6.8c-7.5.2-14.2 3.6-17.8 10.2-1.8 3.2-1.2 6.1.6 7.9 1.8 1.8 4.7 2.3 7.9.6C22.2 22 25.7 15.1 25 6.8Z" />
      <path d="M8 24 22.5 9.5" />
      <path d="M13.2 18.8H8.8M17 15l-5.2-.2M20.4 11.6l-4.2-.3" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M16 4.5 25 8v6.5c0 5.8-3.6 10.5-9 13-5.4-2.5-9-7.2-9-13V8l9-3.5Z" />
      <path d="m12.2 16 2.6 2.6 5-5.4" />
    </>
  ),
  "crossed-tools": (
    <>
      <path d="m7 25 7.7-7.7" />
      <path d="m17.3 14.7 2.1-2.1" />
      <path d="M18.6 6.6 25.4 13l-2.9 2.9-6.7-6.5 2.8-2.8Z" />
      <path d="m25 25-7.4-7.4" />
      <path d="M11.8 14.2 7.4 9.8 6.5 6.5l3.3.9 4.4 4.4" />
    </>
  ),
  microchip: (
    <>
      <rect x="9" y="9" width="14" height="14" rx="2" />
      <rect x="13" y="13" width="6" height="6" rx="1" />
      <path d="M11 4v5M16 4v5M21 4v5M11 23v5M16 23v5M21 23v5M4 11h5M4 16h5M4 21h5M23 11h5M23 16h5M23 21h5" />
    </>
  ),
  lightning: <path d="M18 3 8 17h7l-1 12 10-15h-7l1-11Z" />,
  thermometer: (
    <>
      <path d="M13 18.5V7a3 3 0 0 1 6 0v11.5a6 6 0 1 1-6 0Z" />
      <path d="M16 9v11" />
      <path d="M22 8h3M22 13h2.2" />
    </>
  ),
  "can-bus": (
    <>
      <rect x="6.5" y="8" width="19" height="16" rx="2" />
      <path d="M10 6v4M16 6v4M22 6v4M10 22v4M16 22v4M22 22v4" />
      <text x="16" y="18.2" textAnchor="middle" fontSize="6.2" fontWeight="800" fill="currentColor" stroke="none">CAN</text>
    </>
  ),
  "fiber-optic": (
    <>
      <circle cx="16" cy="16" r="3.2" />
      <path d="M16 5v5M16 22v5M5 16h5M22 16h5M8.2 8.2l3.5 3.5M20.3 20.3l3.5 3.5M23.8 8.2l-3.5 3.5M11.7 20.3l-3.5 3.5" />
      <path d="M16 2.5v1M16 28.5v1M2.5 16h1M28.5 16h1" />
    </>
  ),
  i2c: (
    <>
      <rect x="6.5" y="8" width="19" height="16" rx="2" />
      <path d="M10 6v4M16 6v4M22 6v4M10 22v4M16 22v4M22 22v4" />
      <text x="16" y="18.2" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" stroke="none">I2C</text>
    </>
  ),
  "sine-wave": (
    <>
      <path d="M4 16c3 0 3-6 6-6s3 12 6 12 3-12 6-12 3 6 6 6" />
      <path d="M5 25h22" />
    </>
  ),
  "target-crosshair": (
    <>
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="16" r="3" />
      <path d="M16 3v6M16 23v6M3 16h6M23 16h6" />
    </>
  ),
  "environment-sensor": (
    <>
      <path d="M9 20.5V9a2.5 2.5 0 0 1 5 0v11.5a5 5 0 1 1-5 0Z" />
      <path d="M22.5 22.5a4.5 4.5 0 0 0 0-9 4.8 4.8 0 0 0-4.2 2.4" />
      <path d="M24.5 12.8V9.5M22.2 8.2l2.3 1.3 2.3-1.3" />
      <path d="M19 22.8h7" />
    </>
  ),
  "sd-card": (
    <>
      <path d="M9 4h10l5 5v17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1Z" />
      <path d="M13 4v5M17 4v5M21 10h3" />
      <text x="16" y="22.2" textAnchor="middle" fontSize="6.2" fontWeight="800" fill="currentColor" stroke="none">SD</text>
    </>
  ),
  "kalman-filter": (
    <>
      <path d="M5 24h22" />
      <path d="M7 21c2-6 4-6 6-3s4 3 6-3 4-7 6-2" />
      <path d="M7 15c2 1.5 4 1.7 6 .2s4-1.8 6-.5 4 .8 6-1.4" strokeDasharray="2.2 2.2" />
    </>
  ),
  "paper-plane": (
    <>
      <path d="M27 5 5 15l8 3 3 8L27 5Z" />
      <path d="m13 18 6-6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="16" cy="8" rx="9" ry="4" />
      <path d="M7 8v8c0 2.2 4 4 9 4s9-1.8 9-4V8" />
      <path d="M7 16v8c0 2.2 4 4 9 4s9-1.8 9-4v-8" />
    </>
  ),
  "chart-line": (
    <>
      <path d="M5 25h22M7 25V7" />
      <path d="m9 20 5-5 4 3 7-9" />
      <path d="M23 9h2v2" />
    </>
  ),
  altitude: (
    <>
      <path d="M16 27V5" />
      <path d="m11 10 5-5 5 5" />
      <path d="M7 24h18" />
      <path d="M9 20h14M11 16h10M13 12h6" />
    </>
  ),
  "monitor-settings": (
    <>
      <rect x="4" y="6" width="24" height="16" rx="2" />
      <path d="M12 27h8M16 22v5" />
      <circle cx="13" cy="14" r="2.2" />
      <path d="M19 12h5M19 16h3" />
    </>
  ),
  "code-serial": (
    <>
      <path d="m12 10-5 6 5 6M20 10l5 6-5 6" />
      <path d="M15 24 17 8" />
      <path d="M5 27h22" />
    </>
  ),
  globe: (
    <>
      <circle cx="16" cy="16" r="11" />
      <path d="M5 16h22M16 5c3 3.1 4.5 6.7 4.5 11S19 23.9 16 27M16 5c-3 3.1-4.5 6.7-4.5 11S13 23.9 16 27" />
    </>
  ),
  factory: (
    <>
      <path d="M5 27V13l7 4v-4l7 4V8h6v19H5Z" />
      <path d="M9 22h3M15 22h3M21 22h3" />
      <path d="M20 8V5h6v3" />
    </>
  ),
  calendar: (
    <>
      <rect x="6" y="7" width="20" height="20" rx="2" />
      <path d="M10 5v4M22 5v4M6 13h20" />
      <path d="M11 18h3M18 18h3M11 23h3M18 23h3" />
    </>
  ),
  users: (
    <>
      <circle cx="13" cy="11" r="4" />
      <path d="M5 26c.9-4.4 4-7 8-7s7.1 2.6 8 7" />
      <path d="M22 14a3.3 3.3 0 1 0-.8-6.5" />
      <path d="M21 20c2.8.5 5 2.5 5.7 6" />
    </>
  ),
  puzzle: (
    <>
      <path d="M13 5h6v5.2a2.8 2.8 0 1 1 0 5.6V27h-6v-4.2a2.8 2.8 0 1 0-5.6 0H5v-8h5.2a2.8 2.8 0 1 0 0-5.6H5V5h8Z" />
    </>
  ),
  lock: (
    <>
      <rect x="7" y="14" width="18" height="13" rx="2" />
      <path d="M11 14v-3a5 5 0 0 1 10 0v3" />
      <path d="M16 19v3" />
    </>
  ),
  aircraft: (
    <>
      <path d="M4 18 28 7l-8.5 20-5-8.4L4 18Z" />
      <path d="M14.5 18.6 28 7" />
      <path d="m11 21-3 5" />
    </>
  ),
  macos: (
    <>
      <rect x="5" y="7" width="22" height="16" rx="2" />
      <path d="M12 27h8M16 23v4" />
      <path d="M12 13h8M12 17h8" />
      <path d="M9 13h.1M9 17h.1" />
    </>
  ),
  linux: (
    <>
      <rect x="5" y="7" width="22" height="18" rx="2" />
      <path d="M9 13h4l-2 2 2 2H9" />
      <path d="M16 18h7" />
      <path d="M16 13h4" />
    </>
  ),
  windows: (
    <>
      <path d="M5 7.5 15 6v9H5V7.5Z" />
      <path d="M17 5.7 27 4.2V15H17V5.7Z" />
      <path d="M5 17h10v9l-10-1.5V17Z" />
      <path d="M17 17h10v10.8l-10-1.5V17Z" />
    </>
  ),
};

export function TechnicalIcon({
  name,
  size = 32,
  color = "currentColor",
  strokeWidth = 1.8,
  className,
  title,
  ...props
}: TechnicalIconProps) {
  const titleId = title ? `technical-icon-${name}` : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      {iconPaths[name]}
    </svg>
  );
}
