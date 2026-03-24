"use client";

import Link from "next/link";
import { ArrowRight, Building2, Heart, ShoppingCart, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Building2,
    industry: "Real Estate",
    title: "Automate Property Operations",
    description:
      "Lead qualification, listing updates, follow-up sequences, and document processing — all running on autopilot.",
    outcomes: ["24/7 lead response", "Auto-document prep", "CRM sync"],
    href: "/services#real-estate",
    color: "var(--brand-500)",
  },
  {
    icon: Heart,
    industry: "Healthcare",
    title: "Streamline Patient Workflows",
    description:
      "Appointment scheduling, patient intake, insurance verification, and billing reminders without lifting a finger.",
    outcomes: ["Zero scheduling errors", "Faster intake", "HIPAA-compliant"],
    href: "/services#healthcare",
    color: "#a855f7",
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    title: "Scale Order Intelligence",
    description:
      "Inventory alerts, customer support automation, abandoned cart recovery, and supplier communication on autopilot.",
    outcomes: ["80% support deflection", "Real-time inventory", "+22% recovery"],
    href: "/services#ecommerce",
    color: "#f59e0b",
  },
  {
    icon: TrendingUp,
    industry: "Finance",
    title: "Automate Financial Ops",
    description:
      "Report generation, client onboarding, data reconciliation, and compliance checks — accurate and instant.",
    outcomes: ["Instant reports", "Auto-reconcile", "Audit trails"],
    href: "/services#finance",
    color: "#10b981",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
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
            Services
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              letterSpacing: "-0.03em",
            }}
          >
            Built for your industry.
            <br />
            <span className="gradient-text">Tailored to your ops.</span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              maxWidth: 520,
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            We don't sell generic AI tools. We architect custom systems around
            your exact workflows.
          </p>
        </div>

        {/* Service cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.industry}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "all 0.25s var(--ease-smooth)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-brand)";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-md)",
                    background: `${s.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.color,
                  }}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.375rem",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {s.industry}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      marginBottom: "0.625rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.description}
                  </p>
                </div>

                {/* Outcome tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.outcomes.map((o) => (
                    <span
                      key={o}
                      style={{
                        fontSize: "0.75rem",
                        padding: "4px 10px",
                        borderRadius: 100,
                        background: `${s.color}12`,
                        color: s.color,
                        fontWeight: 500,
                        border: `1px solid ${s.color}25`,
                      }}
                    >
                      {o}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={s.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: "0.875rem",
                    color: "var(--text-brand)",
                    textDecoration: "none",
                    fontWeight: 500,
                    marginTop: "auto",
                    paddingTop: "0.5rem",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
