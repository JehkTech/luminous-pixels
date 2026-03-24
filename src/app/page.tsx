import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

// Problem section (inline — minimal)
function Problem() {
  const pains = [
    {
      stat: "23h",
      label: "per week lost to manual tasks",
      detail: "The average service business employee spends 23 hours weekly on work that AI can handle in seconds.",
    },
    {
      stat: "67%",
      label: "of leads go uncontacted",
      detail: "Without automation, most inbound leads never get a timely response — and go cold.",
    },
    {
      stat: "3×",
      label: "more errors in manual data entry",
      detail: "Human data entry produces triple the errors compared to automated pipelines.",
    },
  ];

  return (
    <section
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="container-lg">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Your team is too good
            <br />
            for repetitive work.
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
            Manual workflows are quietly killing your growth, your margins, and
            your team&apos;s motivation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {pains.map((p) => (
            <div
              key={p.stat}
              style={{
                padding: "1.75rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-card)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--brand-500)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {p.stat}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.625rem",
                  color: "var(--text-primary)",
                }}
              >
                {p.label}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How it Works section (inline — minimal)
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Discovery Call",
      body: "We map your current workflows, identify the highest-ROI automation opportunities, and define the system architecture.",
    },
    {
      n: "02",
      title: "System Design",
      body: "We design your custom AI system — prompt engineering, integrations, data flows, and edge cases — before writing a single line of code.",
    },
    {
      n: "03",
      title: "Build & Integrate",
      body: "We build, test, and deploy your automation stack fully integrated with your existing tools — CRM, EHR, Shopify, QuickBooks, whatever you use.",
    },
    {
      n: "04",
      title: "Launch & Scale",
      body: "You go live with full documentation, team training, and ongoing support. We monitor, iterate, and scale with you.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-lg">
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
            Process
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            From idea to live system
            <br />
            <span className="gradient-text">in 4 steps.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                padding: "1.75rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-card)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-brand)",
                  fontWeight: 500,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
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
                  lineHeight: 1.65,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
