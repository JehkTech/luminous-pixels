"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s var(--ease-smooth)",
        background: scrolled ? "var(--bg-glass)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-lg">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.125rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.03em",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* Logo mark */}
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "linear-gradient(135deg, var(--brand-400), var(--brand-600))",
                display: "flex",
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
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="hidden md:flex"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 400,
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
            ))}
          </div>

          {/* CTA button */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href="/contact"
              style={{
                display: "none",
                padding: "8px 18px",
                borderRadius: "var(--radius-md)",
                background: "var(--brand-500)",
                color: "white",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
                fontFamily: "var(--font-display)",
              }}
              className="md:inline-flex"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-600)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--brand-500)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book a Call
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
                padding: 4,
                display: "flex",
              }}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: "var(--bg-glass)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
          }}
          className="md:hidden"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                padding: "12px 20px",
                borderRadius: "var(--radius-md)",
                background: "var(--brand-500)",
                color: "white",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                textAlign: "center",
                fontFamily: "var(--font-display)",
              }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
