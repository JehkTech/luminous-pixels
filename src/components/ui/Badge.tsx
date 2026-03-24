type BadgeVariant = "brand" | "success" | "warning" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const styles: Record<BadgeVariant, React.CSSProperties> = {
  brand: {
    background: "rgba(6,182,212,0.1)",
    color: "var(--brand-600)",
    border: "1px solid rgba(6,182,212,0.2)",
  },
  success: {
    background: "rgba(16,185,129,0.1)",
    color: "#059669",
    border: "1px solid rgba(16,185,129,0.2)",
  },
  warning: {
    background: "rgba(245,158,11,0.1)",
    color: "#d97706",
    border: "1px solid rgba(245,158,11,0.2)",
  },
  neutral: {
    background: "var(--bg-secondary)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border)",
  },
};

export default function Badge({ children, variant = "brand" }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: 100,
        fontSize: "0.75rem",
        fontWeight: 500,
        fontFamily: "var(--font-display)",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}
