"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Dot grid background */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      {/* Radial glow center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-md" style={{ textAlign: "center", zIndex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 14px",
            borderRadius: 100,
            border: "1px solid var(--border-brand)",
            background: "rgba(6,182,212,0.06)",
            fontSize: "0.8125rem",
            color: "var(--text-brand)",
            fontWeight: 500,
            marginBottom: "2rem",
            fontFamily: "var(--font-display)",
          }}
        >
          <Sparkles size={13} />
          AI Automation Agency
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          Replace busywork
          <br />
          <span className="gradient-text">with intelligence.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            maxWidth: 560,
            margin: "0 auto 2.5rem",
            fontWeight: 300,
          }}
        >
          We design and deploy custom AI automation systems for real estate,
          healthcare, e-commerce, and finance businesses — globally.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              background: "var(--brand-500)",
              color: "white",
              fontSize: "0.9375rem",
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              transition: "all 0.2s var(--ease-smooth)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--brand-600)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(6,182,212,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--brand-500)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a Free Call
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/case-studies"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-hover)",
              color: "var(--text-primary)",
              fontSize: "0.9375rem",
              fontWeight: 400,
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              background: "transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-brand)";
              e.currentTarget.style.background = "var(--bg-card-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            See Case Studies
          </Link>
        </div>

        {/* Social proof bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Workflows Automated", value: "200+" },
            { label: "Industries Served", value: "4" },
            { label: "Avg. Time Saved / Week", value: "30h" },
            { label: "Client Satisfaction", value: "98%" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-brand)",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  marginTop: 2,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
