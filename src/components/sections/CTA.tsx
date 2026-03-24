"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", company: "", industry: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--border)",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
    fontSize: "0.9375rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-lg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: copy */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-brand)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1rem",
                fontFamily: "var(--font-display)",
              }}
            >
              Get in touch
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Ready to automate
              <br />
              <span className="gradient-text">your operations?</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                fontWeight: 300,
              }}
            >
              Tell us about your business and the workflows you want to automate.
              We&apos;ll send a tailored proposal within 48 hours — no obligation.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mail size={16} style={{ color: "var(--text-brand)" }} />
                <a
                  href="mailto:jehkat505@gmail.com"
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  jehkat505@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Phone size={16} style={{ color: "var(--text-brand)" }} />
                <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Book via Calendly link in confirmation email
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
            }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(6,182,212,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    fontSize: "1.5rem",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  Message sent!
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                  We&apos;ll review your details and respond within 48 hours.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      Name *
                    </label>
                    <input
                      style={inputStyle}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      onFocus={(e) => (e.target.style.borderColor = "var(--brand-500)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      Email *
                    </label>
                    <input
                      style={inputStyle}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      onFocus={(e) => (e.target.style.borderColor = "var(--brand-500)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    Company
                  </label>
                  <input
                    style={inputStyle}
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Real Estate"
                    onFocus={(e) => (e.target.style.borderColor = "var(--brand-500)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    Industry
                  </label>
                  <select
                    style={{ ...inputStyle, cursor: "pointer" }}
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.style.borderColor = "var(--brand-500)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  >
                    <option value="">Select industry</option>
                    <option>Real Estate</option>
                    <option>Healthcare</option>
                    <option>E-commerce</option>
                    <option>Finance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    What do you want to automate? *
                  </label>
                  <textarea
                    style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your current workflow pain points..."
                    onFocus={(e) => (e.target.style.borderColor = "var(--brand-500)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 24px",
                    borderRadius: "var(--radius-md)",
                    background:
                      status === "loading" ? "var(--text-muted)" : "var(--brand-500)",
                    color: "white",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-display)",
                    border: "none",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.background = "var(--brand-600)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--brand-500)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && <ArrowRight size={15} />}
                </button>

                {status === "error" && (
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#ef4444",
                      textAlign: "center",
                    }}
                  >
                    Something went wrong. Please email us directly at jehkat505@gmail.com
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
