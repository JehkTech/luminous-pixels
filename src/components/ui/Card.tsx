interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: string;
}

export default function Card({
  children,
  hover = true,
  padding = "1.75rem",
}: CardProps) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding,
        transition: hover ? "all 0.25s var(--ease-smooth)" : undefined,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-hover)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
