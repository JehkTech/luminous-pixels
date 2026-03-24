import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--brand-500)",
    color: "white",
    border: "1px solid transparent",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-hover)",
  },
  outline: {
    background: "transparent",
    color: "var(--text-brand)",
    border: "1px solid var(--border-brand)",
  },
};

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: "0.8125rem" },
  md: { padding: "11px 22px", fontSize: "0.9375rem" },
  lg: { padding: "14px 28px", fontSize: "1rem" },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled,
  className,
  type = "button",
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.2s var(--ease-smooth)",
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  if (href) {
    return (
      <Link href={href} style={baseStyle} className={cn(className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      className={cn(className)}
    >
      {children}
    </button>
  );
}
