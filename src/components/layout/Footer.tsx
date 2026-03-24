"use client";

import Link from "next/link";

const nav = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#automation", label: "AI Automation" },
    { href: "/services#consulting", label: "AI Consulting" },
    { href: "/services#workflow", label: "Workflow Design" },
    { href: "/services#architecture", label: "Systems Architecture" },
  ],
  Industries: [
    { href: "/services#real-estate", label: "Real Estate" },
    { href: "/services#healthcare", label: "Healthcare" },
    { href: "/services#ecommerce", label: "E-commerce" },
    { href: "/services#finance", label: "Finance" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "4rem 0 2rem",
        marginTop: "var(--space-xl)",
      }}
    >
      <div className="container-lg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.125rem",
                marginBottom: "1rem",
                letterSpacing: "-0.03em",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, var(--brand-400), var(--brand-600))",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  color: "white",
                  fontWeight: 800,
                }}
              >
                L
              </span>
              Luminous Pixels
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: "1.5rem",
              }}
            >
              AI automation systems for service businesses worldwide. We turn
              repetitive work into intelligent workflows.
            </p>
            <a
              href="mailto:jehkat505@gmail.com"
              style={{
                fontSize: "0.875rem",
                color: "var(--text-brand)",
                textDecoration: "none",
              }}
            >
              jehkat505@gmail.com
            </a>
          </div>

          {Object.entries(nav).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                {title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} Luminous Pixels Agency. All rights
            reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

