"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "one-time",
    description: "For businesses automating their first workflow.",
    features: [
      "1 core workflow automated",
      "Discovery & audit session",
      "Custom AI prompt engineering",
      "Integration with existing tools",
      "30-day post-launch support",
      "Loom video documentation",
    ],
    cta: "Get Started",
    href: "/contact?plan=starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$6,500",
    period: "one-time",
    description: "For teams ready to automate their entire operations.",
    features: [
      "Up to 5 workflows automated",
      "Full systems audit",
      "Custom AI agents + LLM integration",
      "CRM, email, and data integrations",
      "90-day support + iteration",
      "Team training session",
      "Analytics dashboard",
    ],
    cta: "Most Popular",
    href: "/contact?plan=growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "engagement",
    description: "For organizations needing a strategic AI partner.",
    features: [
      "Unlimited workflow automation",
      "Dedicated AI systems architect",
      "End-to-end AI transformation",
      "On-call support & monitoring",
      "Quarterly strategy reviews",
      "White-glove implementation",
      "NDA + custom SLA",
    ],
    cta: "Book a Discovery Call",
    href: "/contact?plan=enterprise",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-lg">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--text-brand)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "1rem",
              fontFamily: "var(--font-display)",
            }}
          >
            Pricing
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              maxWidth: 460,
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            Fixed packages or custom consultation — choose what fits your
            business.
          </p>
        </div>

        {/* Plans */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            alignItems: "start",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(135deg, var(--brand-600), var(--brand-700))"
                  : "var(--bg-card)",
                border: plan.highlighted
                  ? "1px solid var(--brand-400)"
                  : "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                position: "relative",
                transform: plan.highlighted ? "scale(1.02)" : "none",
                boxShadow: plan.highlighted
                  ? "0 20px 60px rgba(6,182,212,0.25)"
                  : "none",
              }}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--brand-400)",
                    color: "var(--brand-900)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 100,
                    fontFamily: "var(--font-display)",
                    whiteSpace: "nowrap",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Plan header */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    marginBottom: "0.375rem",
                    color: plan.highlighted ? "white" : "var(--text-primary)",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.7)"
                      : "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    color: plan.highlighted ? "white" : "var(--text-primary)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.6)"
                      : "var(--text-muted)",
                    marginLeft: 6,
                  }}
                >
                  / {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: "0.875rem",
                      color: plan.highlighted
                        ? "rgba(255,255,255,0.85)"
                        : "var(--text-secondary)",
                    }}
                  >
                    <Check
                      size={15}
                      style={{
                        flexShrink: 0,
                        marginTop: 2,
                        color: plan.highlighted ? "var(--brand-200)" : "var(--brand-500)",
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "13px 24px",
                  borderRadius: "var(--radius-md)",
                  background: plan.highlighted ? "white" : "var(--brand-500)",
                  color: plan.highlighted ? "var(--brand-700)" : "white",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  transition: "all 0.2s",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {plan.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Consultation note */}
        <p
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
          }}
        >
          Not sure which plan fits?{" "}
          <Link
            href="/contact"
            style={{ color: "var(--text-brand)", textDecoration: "none" }}
          >
            Book a free 30-min discovery call →
          </Link>
        </p>
      </div>
    </section>
  );
}
